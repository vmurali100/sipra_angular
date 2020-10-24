import { CommonService } from './../../common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sibling2',
  templateUrl: './sibling2.component.html',
  styleUrls: ['./sibling2.component.css']
})
export class Sibling2Component implements OnInit {
  msg
  constructor(private cs:CommonService) { }

  ngOnInit(): void {
    this.cs.sendInfo.subscribe(res=>{
      console.log(res)
      this.msg = res
    })
  }

}
