import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service'

@Component({
  selector: 'app-show-schedule',
  templateUrl: './show-schedule.component.html',
  styleUrls: ['./show-schedule.component.css']
})
export class ShowScheduleComponent implements OnInit {

  constructor(private service: SharedService) { }

  ScheduleList: any=[];

  ngOnInit(): void {
    this.refreshScheduleList();
  }

  refreshScheduleList(){
    this.service.getScheduleList().subscribe(data =>{
      this.ScheduleList=data;
    });
  }

}
