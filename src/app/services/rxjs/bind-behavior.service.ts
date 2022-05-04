import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from 'src/app/interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class BindBehaviorService {

  detailDataItem = new BehaviorSubject<any>({});
  public $getDataItem = this.detailDataItem.asObservable();
  
  constructor() { }

  setDataItem(item: IProduct){
    this.detailDataItem.next(item);
  }

}