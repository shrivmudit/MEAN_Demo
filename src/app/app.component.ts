import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private commonservice: CommonService, private router: Router){}
  title = 'hotel-app';
  Logout(){
    this.commonservice.logout()
    this.router.navigate(['/'])
  }
  
  }
 

  



