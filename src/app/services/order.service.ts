import { Injectable } from '@angular/core';
import { Order } from '../models/order';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }
  url:string = "https://localhost:7297/";

  orders: Order[] = [];

  //use httpparams instead of if-else

  getAllOrders(restaurant?:string, orderAgain?:boolean):Observable<Order[]>{
    if(restaurant != undefined && orderAgain != undefined){
      return this.http.get<Order[]>(`${this.url}api/Orders?restaurant=${restaurant}&orderAgain=${orderAgain}`);
    }
    else if(restaurant != undefined){
      return this.http.get<Order[]>(`${this.url}api/Orders?restaurant=${restaurant}`)
    }
    else if(orderAgain != undefined){
      return this.http.get<Order[]>(`${this.url}api/Orders?orderAgain=${orderAgain}`)
    }
    else{
      return this.http.get<Order[]>(`${this.url}api/Orders`)
    }
  }

  addOrder(newOrder:Order):Observable<Order>{
    return this.http.post<Order>(`${this.url}api/Orders`, newOrder);
  }

  deleteOrder(id:number):Observable<void>{
    return this.http.delete<void>(`${this.url}api/Orders/${id}`);
  }
}
