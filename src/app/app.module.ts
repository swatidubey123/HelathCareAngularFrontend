import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { SearchdeleteComponent } from './searchdelete/searchdelete.component';


import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { LoginsucessComponent } from './loginsucess/loginsucess.component';
import { LoginfailComponent } from './loginfail/loginfail.component';
import { AddMedicineComponent } from './add-medicine/add-medicine.component';
import { ViewOrdersComponent } from './view-orders/view-orders.component';
import { ViewPaymentComponent } from './view-payment/view-payment.component';
import { PlaceNeworderComponent } from './place-neworder/place-neworder.component';
import { ViewPrescriptionComponent } from './view-prescription/view-prescription.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MakePaymentComponent } from './make-payment/make-payment.component';


const routes:Routes=[
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'makepayment',component:MakePaymentComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'success',component:LoginsucessComponent},
  {path:'addmedicine',component:AddMedicineComponent},
  {path:'vieworders',component:ViewOrdersComponent},
  {path:'viewpayments',component:ViewPaymentComponent},
  {path:'placeNeworder',component:PlaceNeworderComponent},
  {path:'viewprescription',component:ViewPrescriptionComponent},
  {path:'orderSuccess',component:OrderSuccessComponent},
  {path:'failure',component:LoginfailComponent},
  //{path:'',redirectTo:'/view',pathMatch:'full'},
  {path:'search/:user_id',component:SearchdeleteComponent},
  
  ]
  
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    SearchdeleteComponent,
    LoginComponent,
    LoginsucessComponent,
    LoginfailComponent,
    AddMedicineComponent,
    ViewOrdersComponent,
    ViewPaymentComponent,
    PlaceNeworderComponent,
    ViewPrescriptionComponent,
    OrderSuccessComponent,
    MakePaymentComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
