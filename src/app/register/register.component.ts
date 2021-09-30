import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { User } from '../User';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
email = ""
password = ""
user: User[]=[]
  constructor(private commonservice : CommonService) { }

  ngOnInit(): void {
  }
submitForm(){
  const user = {
    email: this.email,
    password: this.password

  }
  this.commonservice.setUsers(user).subscribe();
  
}
}

