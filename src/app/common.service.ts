import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError} from 'rxjs/operators';
import { User } from './User';
import {Hotel} from './Hotel';

const httpOptions={headers:new HttpHeaders({'content-type':'application/json'})}



@Injectable({
  providedIn: 'root'
})

export class CommonService {
JwtAuthToken : any
URL = "http://localhost:3000/hotel"
URL1 = "http://localhost:8080/students"
 URL2 = "http://localhost:2000/register"
 URL3 = "http://localhost:2000/login"
 URL4 = "http://localhost:2000/add"
  constructor(private http:HttpClient) { }
  getHotelList(){
   return this.http.get(this.URL);
  }

  addhotel(data: any){
    return this.http.post(this.URL, data);
  }

getStudents() : Observable<any>{
 return this.http.get<any>(this.URL1 ).pipe(catchError(this.handleError));
 }

 handleError(error: { message: any; }){
  return throwError(error.message || "Server error");
 }

 getData(){
   return this.http.get(this.URL2);
 }
 
 setUsers(user:User): Observable<User[]>{
   console.log(user)
return this.http.post<User[]>(this.URL2 ,user, httpOptions);
 }

validateuser(user:User): Observable<any>{
  // console.log(user)
  return this.http.post<any> (this.URL3, user)
}

setList(list:Hotel): Observable<Hotel[]>{
  this.loadtoken()
  console.log(this.loadtoken())
  console.log(list)
  const header=new HttpHeaders()
  .set("Content-Type","application/json")
  .set("authorization",this.JwtAuthToken)
  return this.http.post<Hotel[]>(this.URL4, list, {headers: header})

}
storetoken(Token: any): any{
const token = localStorage.setItem("token", Token) 
}
loadtoken(){
  const token = localStorage.getItem("token")
  this.JwtAuthToken = token
  
}
logout(){
  localStorage.clear()
}
}

