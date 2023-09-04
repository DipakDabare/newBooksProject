import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url="http://localhost:3000/login"

  constructor(private http : HttpClient,private router:Router) { }

  loginVerification(data:any){
    this.http.get<any[]>(`http://localhost:3000/login?Email=${data.Email}&Password=${data.Password}`,{observe:'response'}).subscribe(res=>{
      console.log(res);
      console.log(res.body?.length);
      
      if(res.body?.length===1){
        localStorage.setItem('user',JSON.stringify(res.body[0]));
        console.log("welcome");
        this.router.navigate(['/welcome'])
      }else{
        console.log("please cheack Email and password");
        alert("please cheack Email and password")
        
      }
    })
  }

  userAuthReload(){
    if(localStorage.getItem('user')){
      this.router.navigate(['/welcome'])
    }
  }
}
