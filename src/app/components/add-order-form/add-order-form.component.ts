import { Component, EventEmitter, Output } from '@angular/core';
import { Order } from '../../models/order';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-order-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-order-form.component.html',
  styleUrl: './add-order-form.component.css'
})
export class AddOrderFormComponent {
  @Output() Submitted = new EventEmitter<Order>();

  formOrder: Order = {} as Order;

  emitSubmit(){
    let result: Order = {...this.formOrder};
    this.Submitted.emit(result);
    this.formOrder = {} as Order;
    console.log(result);
  }
}
