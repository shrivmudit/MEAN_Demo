import { Component, OnInit } from '@angular/core';
import {CommonService} from '../common.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
students : any;
error: any;


  constructor(private commonservice : CommonService) { }

  ngOnInit(): void  {
    this.commonservice.getStudents().subscribe(data =>{
      this.students = data
      
    },(error) => {
      //  console.log(error)
      this.error= error
      
    }
      );

  }

}
