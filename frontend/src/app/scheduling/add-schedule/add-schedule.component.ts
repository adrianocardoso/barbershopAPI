import { Component, OnInit, Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-schedule',
  templateUrl: './add-schedule.component.html',
  styleUrls: ['./add-schedule.component.css']
})



export class AddScheduleComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() schedule:any;
  schedulingId!: string;
  clientName!:string;
  clientEmail!:string;
  clientCPF!:string;
  appointed_time!:string;
  selected_barber!:string;

  ngOnInit(): void {
    this.schedulingId =this.schedule.schedulingId;
    this.clientName=this.schedule.clientName;
    this.clientEmail=this.schedule.clientEmail;
    this.clientCPF=this.schedule.clientCPF;
    this.appointed_time=this.schedule.appointed_time;
    this.selected_barber=this.schedule.selected_barber;

  }

  addSchedule(){
    var val = {schedulingId:this.schedulingId,
               clientName:this.clientName,
               clientEmail:this.clientEmail,
               clientCPF:this.clientCPF,
               appointed_time:this.appointed_time,
               selected_barber:this.selected_barber};
    this.service.addSchedule(val).subscribe(res=>{
      alert(res.toString());
    });
  }

}
