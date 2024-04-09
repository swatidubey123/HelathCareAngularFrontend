import { Component,OnInit } from '@angular/core';
import { Medicine } from '../Medicine';
import { UserRegistrationServiceService } from '../user-registration-service.service';

@Component({
  selector: 'app-add-medicine',
  templateUrl: './add-medicine.component.html',
  styleUrls: ['./add-medicine.component.css']
})
export class AddMedicineComponent implements OnInit{
  medicine:Medicine=new Medicine();
  message:any
    constructor(private service:UserRegistrationServiceService) { }

    
  ngOnInit(): void {
  }
  public addMedicine(){
    let respo=this.service.serviceAddMedicine(this.medicine);
    respo.subscribe((data:any)=>this.message=data);
    this.medicine = new Medicine();
    }

}
