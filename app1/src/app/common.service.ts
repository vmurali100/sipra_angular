import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  sendInfo = new Subject;
  constructor() { }
  sendDataToSibling2(message){
    this.sendInfo.next(message)
  }
}
