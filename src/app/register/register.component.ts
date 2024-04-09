import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../User';
import { UserRegistrationServiceService } from '../user-registration-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit  { 
  user:User=new User();
  message:any
    constructor(private service:UserRegistrationServiceService) { }

    
  ngOnInit(): void {
  }
  public registerNow(){
    let respo=this.service.doregistration(this.user);
    respo.subscribe((data:any)=>this.message=data);
    }
}
