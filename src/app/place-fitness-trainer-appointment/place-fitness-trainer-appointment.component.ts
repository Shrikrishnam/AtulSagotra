import { Component, OnInit,Output, EventEmitter} from '@angular/core';
import {  FormGroup,FormBuilder,Validators } from "@angular/forms";
import { CommonService } from '../common.service';



export class Fitness {
  constructor(
    public inr: number,
    public paisa: number,
    public streetaddress: string,
    public city: string,
    public state: string,
    public country: string,
    public pincode: number,
    public phonenumber: number,
    public email: string,
    public firstname:string,
    public lastname: string,
    public age:number,
    public trainerpreference: string,
    public physiotherapist: string,
    public packages: string
  ) { }
}

@Component({
  selector: 'app-place-fitness-trainer-appointment',
  templateUrl: './place-fitness-trainer-appointment.component.html'
  
})
export class PlaceFitnessTrainerAppointmentComponent implements OnInit {
  @Output() Fitnessdata = new EventEmitter<Fitness>();
  fitnessForm: FormGroup;
  public obj: any = {};
  constructor(private commonService: CommonService,private fb: FormBuilder) { }  
  
  

  ngOnInit() {
    this.fitnessForm = this.fb.group({
      inr: ["", [Validators.required]],
      paisa: ["", [Validators.required]],
      streetaddress:  ["", [Validators.required]],
      city: ["", [Validators.required]], 
      state: ["", [Validators.required]],
      country: ["", [Validators.required]],
      pincode: ["", [Validators.required]],
      phonenumber: ["", [Validators.required]],
      email: ["", [Validators.required,Validators.pattern("[^ @]*@[^ @]*")]],
      firstname: ["",[Validators.required]],
      lastname: ["",[Validators.required]],
      age: ["",[Validators.required]],
      trainerpreference: ["",[Validators.required]],
      physiotherapist: ["",[Validators.required]],
      packages: ["",[Validators.required]]
    });
    
  }

  onSubmit() {
    this.obj = { ...this.fitnessForm.value, ...this.obj };
    this.fitnessForm.value;
    console.log(
      "LOG: LoginComponent -> onSubmit -> this.contactForm.value",
      this.fitnessForm.value
    );

    if (this.fitnessForm.valid) {
      this.Fitnessdata.emit(
        new Fitness(
          this.fitnessForm.value.firstname,
          this.fitnessForm.value.lastname,
          this.fitnessForm.value.age,
          this.fitnessForm.value.phonenumber,
          this.fitnessForm.value.email,
          this.fitnessForm.value.streetaddress,
          this.fitnessForm.value.city,
          this.fitnessForm.value.state,
          this.fitnessForm.value.country,
          this.fitnessForm.value.pincode,
          this.fitnessForm.value.trainerpreference,
          this.fitnessForm.value.physiotherapist,
          this.fitnessForm.value.packages,
          this.fitnessForm.value.inr,
          this.fitnessForm.value.paisa
        )
      );
    }
  }
  addAppointment(fitnessForm){
    console.log(fitnessForm)
    this.commonService.createAppointment(fitnessForm).subscribe(()=>{
      console.log("Appointment has been added")
    })
  }
  }
    

