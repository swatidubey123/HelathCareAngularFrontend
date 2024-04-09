import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserRegistrationServiceService } from '../user-registration-service.service';
@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.css']
})
export class OrderSuccessComponent implements OnInit{

  
  totalAmount: number;
  user_id:number;

  // Inject OrderService for making API requests
  constructor(private orderService: UserRegistrationServiceService,private router: Router) { }

  ngOnInit(): void {
    // Retrieve total amount from session storage
    this.totalAmount = JSON.parse(sessionStorage.getItem('totalAmount'));
    this.user_id=JSON.parse(sessionStorage.getItem('user_id'));
    if (!this.totalAmount) {
      // Redirect to place order if total amount is not available
      this.router.navigate(['/placeNeworder']);
    }
  }

}
