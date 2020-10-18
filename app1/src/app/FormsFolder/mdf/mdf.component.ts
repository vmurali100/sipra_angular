import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mdf',
  templateUrl: './mdf.component.html',
  styleUrls: ['./mdf.component.css']
})
export class MdfComponent implements OnInit {
  userForm = new FormGroup({
    fname:new FormControl()
  }) // Created a Form Group Instance
  constructor() { }

  ngOnInit(): void {
  }

  addUser(){
    console.log(this.userForm.value)
  }
}
