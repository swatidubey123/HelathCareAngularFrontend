import { Medicine } from "./Medicine";
import { OrderItem } from "./OrderItem";
export class PlaceOrder{
    order_id?: number;
    user_id: number;
    orderItems: OrderItem[] = [];
    totalAmount: number;
    userAccountBalance: number;

    // Other properties as needed
  
    constructor(user_id: number, orderItems: OrderItem[], totalAmount: number,userAccountBalance: number) {
      this.user_id = user_id;
      this.orderItems = orderItems;
      this.totalAmount = totalAmount;
      this.userAccountBalance=userAccountBalance;

    }
    
   //constructor(user_id:number,name: string,  password: string,email:string,phno:string,userType:string) {}
   
}