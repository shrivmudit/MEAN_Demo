import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-list-hotel',
  templateUrl: './list-hotel.component.html',
  styleUrls: ['./list-hotel.component.css']
})
export class ListHotelComponent implements OnInit {
public collection:any;
  constructor(private commonService:CommonService) { }

  ngOnInit(): void {
    this.commonService.getHotelList().subscribe((result)=> {
      this.collection=result;
      console.log(this.collection)

      

    });
  }

}
