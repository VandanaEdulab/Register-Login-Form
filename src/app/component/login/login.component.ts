import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

loginform=new FormGroup({
  email:new FormControl('',[Validators.required]),
  pass:new FormControl('',[Validators.required]) 
})

login() {
  console.log(this.loginform.value);
}
get email() {
  return this.loginform.get('email');
}
get pass() {
  return this.loginform.get('pass');
}
// onSubmit()

  ngOnInit(): void {
  }

}
