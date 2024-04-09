import { Component,OnInit } from '@angular/core';
import { Medicine } from '../Medicine';
import { UserRegistrationServiceService } from '../user-registration-service.service';
import { PlaceOrder } from '../PlaceOrder';
import { OrderItem } from '../OrderItem';

import { Router } from '@angular/router';
import { User } from '../User';
@Component({
  selector: 'app-place-neworder',
  templateUrl: './place-neworder.component.html',
  styleUrls: ['./place-neworder.component.css']
})
export class PlaceNeworderComponent implements OnInit {
 
  medicines: Medicine[] = []; // Assuming Medicine model is defined
  user:User;
  userId: number;
  quantities: { [key: number]: number } = {}; // Object to store quantities by medicine ID
  selectedMedicines: { medicine: Medicine, quantity: number }[] = [];
  totalAmount: number = 0;
  message:any;
  userAccountBalance: number;


  // Inject OrderService for making API requests
  constructor(private orderService: UserRegistrationServiceService,private router: Router) { }

  ngOnInit(): void {
    // Call a service method to fetch list of medicines
    const userIdStr = sessionStorage.getItem('user_id');
    console.log('User ID from session:', userIdStr);
    this.userId = parseInt(sessionStorage.getItem('user_id'), 10);
    const userObj = sessionStorage.getItem('currentUser');

// Parse the user string into a User object
if (userObj) {
  this.user = JSON.parse(userObj) as User;
} else {
  console.error('User not retrived from session:', userObj);
}
    //this.user=sessionStorage.getItem('currentUser');
    console.log('User ID:', this.userId);
    // Retrieve user's account balance
    this.orderService.getUserAccountBalance( this.user).subscribe(
      (balance: number) => {
        this.userAccountBalance = balance;
        console.log('User Account Balance:', this.userAccountBalance);
      },
      (error) => {
        console.error('Failed to fetch user account balance:', error);
      }
    );
    this.orderService.getAllMedicines().subscribe(
      (medicines: Medicine[]) => {
        this.medicines = medicines;
        if (!medicines) {
      console.error('medicine not found in!');
    return;
   }
      },
      (error) => {
        console.error('Failed to fetch medicines:', error);
      }
    );
  }

  addToCart(medicine: Medicine, quantity: number) {
    const existing = this.selectedMedicines.find(item => item.medicine.med_id === medicine.med_id);
    if (existing) {
      existing.quantity += quantity;
    } else {
      this.selectedMedicines.push({ medicine, quantity });
    }
    this.calculateTotalAmount();
  }

  removeFromCart(index: number) {
    this.selectedMedicines.splice(index, 1);
    this.calculateTotalAmount();
  }

  calculateTotalAmount() {
    this.totalAmount = this.selectedMedicines.reduce((total, item) => {
      return total + (item.medicine.price * item.quantity);
    }, 0);
  }

  placeOrder(): void {
    // user_id is stored in session, you can retrieve it similarly
    
    if (!this.userId) {
     console.error('User not logged in!');
     return;
    }
     // Store totalAmount in session
     sessionStorage.setItem('total_amount', this.totalAmount.toString());

    console.log('User ID:', this.userId);
    // Map selectedMedicines to an array of Medicine objects
  // Ensure at least one medicine is selected
  if (this.selectedMedicines.length === 0) {
    console.error('No medicines selected for order');
    return;
  }
  if (this.totalAmount > this.userAccountBalance) {
    console.error('Insufficient account balance');
    return;
  }
  if (this.totalAmount < this.userAccountBalance) {
    console.log('you may purchase with this account balance');
    sessionStorage.setItem('balance', this.userAccountBalance.toString());
    // Navigate to the makepayment component
    this.router.navigate(['/makepayment']);
    return;
  }
  // Map selected medicines to an array of OrderItem objects
  const orderItems: OrderItem[] = this.selectedMedicines.map(item => new OrderItem(null, item.medicine, item.quantity));

  // Call the service method to place the order
  const respo = this.orderService.placeOrder(orderItems);
  respo.subscribe(
    (data: any) => {
      this.message = data;
      // Navigate to the success page if order is successful
      this.router.navigate(['/orderSuccess']);
    },
    (error: any) => {
      // Handle error here, if necessary
      console.error('Error occurred during placing order:', error);
    }
  );
}


}