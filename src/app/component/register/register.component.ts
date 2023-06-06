import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  Registerform=new FormGroup({
    fname:new FormControl('',[Validators.required,Validators.minLength(5)]),
    gender:new FormControl('',[Validators.required]),
    lname:new FormControl('',[Validators.required,Validators.minLength(5)]),
    email:new FormControl('',[Validators.required ,Validators.email]),
    pass:new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(10)]),
    cpass:new FormControl('',[Validators.required,Validators.minLength(5)])

  })

  Register() {
    console.log(this.Registerform.value);
  }
  get Fname() {
    return this.Registerform.get('fname');
  }
  
  get Lname() {
    return this.Registerform.get('lname');
  }

  get Gender() {
    return this.Registerform.get('gender');
  }

  get Email() {
    return this.Registerform.get('email');
  }
  get Pass() {
    return this.Registerform.get('pass');
  }

  get Cpass() {
    return this.Registerform.get('cpass');
  }
  ngOnInit(): void {
  }

}
