import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddHotelComponent } from './add-hotel/add-hotel.component';
import { HomeComponent } from './home/home.component';
import { ListHotelComponent } from './list-hotel/list-hotel.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { StudentComponent } from './student/student.component';
import { UpdateHotelComponent } from './update-hotel/update-hotel.component';

const routes: Routes = [
  {component:HomeComponent, path: ''},
  {component:AddHotelComponent, path:'add'},
  {component:UpdateHotelComponent, path:'update'},
  {component:ListHotelComponent, path: 'list'},
  {component:RegisterComponent, path: 'register'},
  {component:LoginComponent, path: 'login'},
  {component:StudentComponent, path: 'student'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
