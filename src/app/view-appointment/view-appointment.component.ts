import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { EventEmitterService } from '../event-emitter.service';

@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html'
})
export class ViewAppointmentComponent implements OnInit{
  Router: any;
  allAppointment: Object;

  constructor(private commonService: CommonService, private eventEmitterService: EventEmitterService) { }

  ngOnInit() {    
    this.getLatestAppointment();
    if (this.eventEmitterService.subsVar==undefined) {    
      this.eventEmitterService.subsVar = this.eventEmitterService.    
      invokeFirstComponentFunction.subscribe((name:string) => {    
        this.getLatestAppointment();    
      });    
    }    
  }    

  getLatestAppointment(){
    this.commonService.getAllAppointment().subscribe((response)=>{
      this.allAppointment = response
    })
  }
  editAppointment(){}
  deleteAppointment(appointment){
    this.commonService.deleteAppointment(appointment).subscribe(()=>{
      this.getLatestAppointment();
    })
  }  
}
