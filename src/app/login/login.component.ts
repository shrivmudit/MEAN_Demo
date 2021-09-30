import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { CommonService } from '../common.service';
import {Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error : any;
  response : any;
  email = ""
  password = ""
  data : any

  constructor(private commonservice : CommonService , private router : Router) { 
  }

  ngOnInit(): void {
    this.getDataFromAPI();
  }
getDataFromAPI(){
this.commonservice.getData().subscribe((response)=>

{ console.log('Response from API is', response)

}, (error)=> {
  this.error= error
  console.log(error);
  
})
}
submitForm(){
  const user ={ 
    email: this.email,
    password : this.password
  }
  this.commonservice.validateuser(user).subscribe(data=>
    {this.data = data 
      if (data.token) {
        console.log(data)
        this.commonservice.storetoken(data.token)
        this.router.navigate(['/add'])
      }
      else {
        console.log("Error")
        
      }
    })

    
  // console.log(this.email, this.password)
// this.commonservice.validateuser({
//   email : this.email, 
//   password : this.password
// }).subscribe((msg)=>  {
// console.log(msg.msg)
// if (msg.msg== "Incorrect Password"){
//   console.log("Password is inccorect")
// }
// else if (msg.msg == "Invalid User") {
//   console.log("Not Found")

// }
// else {
//  this.router.navigate(['/list'])

// }
// })
}
}
