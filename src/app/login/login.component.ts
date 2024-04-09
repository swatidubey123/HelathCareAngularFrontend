import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../User';
import { UserRegistrationServiceService } from '../user-registration-service.service';
import { LoginRequest } from '../LoginRequest';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  { 
 loginRequest:LoginRequest=new LoginRequest();
  message:any
  error: string;

  constructor(private service:UserRegistrationServiceService,private router: Router) { }

  
ngOnInit(): void {
}
public loginUser(): void {
 // const loginRequest = new LoginRequest();
  let respo=this.service.login(this.loginRequest);
  respo.subscribe(
    (data: any) => {
      this.message = data;
      // Navigate to the success page if login is successful
      this.router.navigate(['/success']);
    },
    (error: any) => {
      // Handle error here, if necessary
      console.error('Error occurred during login:', error);
    }
  );
}
}