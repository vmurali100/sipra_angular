import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mdf',
  templateUrl: './mdf.component.html',
  styleUrls: ['./mdf.component.css']
})
export class MdfComponent implements OnInit {
  userForm = new FormGroup({
    fname:new FormControl('',[Validators.required,Validators.minLength(6)]),
    lname:new FormControl('',[Validators.required,Validators.minLength(6)]),
    email:new FormControl('',[Validators.required,Validators.email])

  }) // Created a Form Group Instance
  constructor(private _http:HttpClient) { }

  ngOnInit(): void {
  }

  addUser(){
    console.log(this.userForm.value)
    console.log(this.userForm.valid)
    // Consume the Given API
    this._http.post("http://localhost:3000/users",this.userForm.value).subscribe(res=>{
      console.log("User Added Successfully")
    })
  }
}
