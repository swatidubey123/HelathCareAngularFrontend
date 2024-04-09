import { Component, OnInit } from '@angular/core';
import { UserRegistrationServiceService } from '../user-registration-service.service';

@Component({
  selector: 'app-searchdelete',
  templateUrl: './searchdelete.component.html',
  styleUrls: ['./searchdelete.component.css']
})
export class SearchdeleteComponent implements OnInit {
users:any;
email:any;
  constructor(private service:UserRegistrationServiceService) { }

  ngOnInit(): void {
    let respo=this.service.getusers();
    respo.subscribe((data:any)=>this.users=data);
  }

public finduserbyemail(){
  let respo=this.service.getuserbyemail(this.email);
  respo.subscribe((data:any)=>this.users=data);
}

public deleteuser(user_id:number){
  let respo=this.service.deleteuser(user_id);
  respo.subscribe((data:any)=>this.users=data);
}


}
