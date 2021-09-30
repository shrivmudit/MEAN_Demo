import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommonService } from '../common.service';
import { Hotel } from '../Hotel';


@Component({
  selector: 'app-add-hotel',
  templateUrl: './add-hotel.component.html',
  styleUrls: ['./add-hotel.component.css']
})
export class AddHotelComponent implements OnInit {
  alert:boolean = false;
  // addhotel = new FormGroup ({
  //   name: new FormControl(''),
  //   Address: new FormControl(''),
  //   email: new FormControl(''),
  //   mobile: new FormControl('')
  // })

  name = " "
  place = " "
  emailid = " "
  list : Hotel[]=[]
  constructor(private commonservice:CommonService) { }

  ngOnInit(): void {
  }
  // createhotel(){
  //   // console.log(this.addhotel.value);
  //   this.hotel.addhotel(this.addhotel.value).subscribe((result)=>{
  //     this.alert = true;
  //     this.addhotel.reset({});
  //     console.log("Get Data Through Service", result)
  //   })
  // }

  createhotel(){
    const list = {
     
      
      name : this.name,
      place: this.place,
      emailid : this.emailid
  
    }
    this.commonservice.setList(list).subscribe();
    
  }
  closeAlert(){
    this.alert = false;
  }
}
