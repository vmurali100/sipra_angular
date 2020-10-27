import { CommonService } from './../common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allUsers:any=[]
  constructor(private cs:CommonService) { }

  ngOnInit(): void {
    this.cs.getUsersFromServer().subscribe(res=>{
      this.allUsers = res
      console.log(this.allUsers)
    })
  }

}
