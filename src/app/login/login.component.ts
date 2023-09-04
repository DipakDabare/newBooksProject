import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../service/login.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder, private service :LoginService,private router:Router){}


  ngOnInit(): void {
    if(localStorage.getItem('user')){
      this.router.navigate(['/welcome'])
    }else{
      this.router.navigate([''])
    }
  }


  login=this.fb.group({
    Email: this.fb.control("",[Validators.required]),
    Password: this.fb.control("",[Validators.required])
  })

  loginFunction(){
    console.log(this.login.value);
    this.service.loginVerification(this.login.value)
    this.login.reset()
  }
}
