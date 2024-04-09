// order-item.model.ts

import { Medicine } from './Medicine';

export class OrderItem {
  orderItemid: number;
  medicine: Medicine;
  quantity: number;

  constructor(orderItemid: number, medicine: Medicine, quantity: number) {
    this.orderItemid = orderItemid;
    this.medicine = medicine;
    this.quantity = quantity;
  }
}
