import { CommonService } from './../../common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sibling1',
  templateUrl: './sibling1.component.html',
  styleUrls: ['./sibling1.component.css']
})
export class Sibling1Component implements OnInit {
  message = "Welcome Message From Sibling 1"
  constructor(private cs:CommonService) { }

  ngOnInit(): void {
  }

  sendMessage(){
    console.log("sendMessage called")
    this.cs.sendDataToSibling2(this.message)
  }
}
