import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private _http:HttpClient) { }

  createAppointment(appointment){
    return this._http.post(" http://localhost:6565/allfriends", appointment);
  }
  getAllAppointment(){
    return this._http.get(" http://localhost:6565/allfriends")
  }
  deleteAppointment(appointment){
    return this._http.delete("http://localhost:6565/allfriends/"+appointment.id)
  }

  createContactUs(contact){
    return this._http.post("http://localhost:6565/contactUs", contact);
  }
}
