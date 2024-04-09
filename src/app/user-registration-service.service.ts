import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from './User';
import { LoginRequest } from './LoginRequest';
import { PlaceOrder } from './PlaceOrder';
import { OrderItem } from './OrderItem';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationServiceService {
  private apiUrl = 'http://34.207.76.221:8080';
  private currentUserSubject = new BehaviorSubject<any>(null);
  currentUser$ = this.currentUserSubject.asObservable();
//'http://34.207.76.221:8080' here 34.207.76.221 is ec2 ip.....if we run it from ec2 we need to chage whereever its written localhost with
//34.207.76.221 for eg http://34.207.76.221:8080/register
  constructor(private http:HttpClient) { }

  public doregistration(user:any){
    return this.http.post("http://34.207.76.221:8080/register",user,{responseType:'text' as 'json'})
   }

   public serviceAddMedicine(medicine:any){
    return this.http.post("http://34.207.76.221:8080/addMedicine",medicine,{responseType:'text' as 'json'})
   }
 public getusers(){
   return this.http.get("http://34.207.76.221:8080/getAllusers")
 }
 getAllMedicines(){
  return this.http.get("http://34.207.76.221:8080/getAllMeds")
 }
 public getuserbyemail(email:any){
   return this.http.get("http://34.207.76.221:8080/findbyemail/"+email)
 }
 
 public deleteuser(user_id:any){
   return this.http.delete("http://34.207.76.221:8080/cancel/"+user_id)
 }

 public getUserAccountBalance(user:User){
  return this.http.post("http://34.207.76.221:8080/checkBalance",user,{responseType:'text' as 'json'})
  
 }
 public login(loginRequest: LoginRequest): Observable<any> {
  return this.http.post<any>(`${this.apiUrl}/login`, loginRequest).pipe(
    tap(user => {
      // If user found, store user object in session/local storage
      if (user) {
        this.currentUserSubject.next(user);
        sessionStorage.setItem('user_id', user.user_id);
        sessionStorage.setItem('currentUser', JSON.stringify(user));
        }
      
    }),
    catchError(error => {
      throw error;
    })
  );
  
}

public placeOrder(orderItems: OrderItem[]): Observable<any> {
  return this.http.post<any>("http://34.207.76.221:8080/placeOrder", orderItems,{responseType:'text' as 'json'})
}


getCurrentUser(): any {
  // Retrieve user data from session/local storage
  return JSON.parse(sessionStorage.getItem('currentUser')
  );
}
}
