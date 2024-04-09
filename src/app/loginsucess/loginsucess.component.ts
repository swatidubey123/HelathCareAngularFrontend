import { Component, OnInit } from '@angular/core';
import { UserRegistrationServiceService } from '../user-registration-service.service';

@Component({
  selector: 'app-loginsucess',
  templateUrl: './loginsucess.component.html',
  styleUrls: ['./loginsucess.component.css']
})
export class LoginsucessComponent implements OnInit {
  isAdmin: boolean;

  constructor(private authService: UserRegistrationServiceService) { }

  ngOnInit(): void {
    const currentUser = this.authService.getCurrentUser();
    if (currentUser && currentUser.userType === 'admin') {
      this.isAdmin = true;
    } else {
      this.isAdmin=false;
    }
  }
}
