import { Component } from '@angular/core';
import { AddOrderFormComponent } from '../add-order-form/add-order-form.component';
import { OrderService } from '../../services/order.service';
import { Order } from '../../models/order';

@Component({
  selector: 'app-order-history',
  standalone: true,
  imports: [AddOrderFormComponent],
  templateUrl: './order-history.component.html',
  styleUrl: './order-history.component.css'
})
export class OrderHistoryComponent {
  constructor(private _orderService: OrderService) {}

  allOrders:Order[] = [];

  ngOnInit():void{
    this.getAll();
  }

  getAll():void{
    this._orderService.getAllOrders().subscribe((response:Order[]) => {
      this.allOrders = response;
    })
  }

  deleteOrder(o:Order):void{
    this._orderService.deleteOrder(o.id).subscribe((response) => {
      this.getAll();
    })
  }

  addOrder(o:Order):void{
    this._orderService.addOrder(o).subscribe((response: Order) => {
      this.getAll();
    })
  }
  
}
