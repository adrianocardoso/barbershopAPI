import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-barber',
  templateUrl: './add-barber.component.html',
  styleUrls: ['./add-barber.component.css'],
  providers: [SharedService]
})
export class AddBarberComponent implements OnInit {

  input: any;
  barberName!: string;
  barberPassword!:string;
  barberEmail!: string;

  constructor(private service: SharedService) { }

  ngOnInit(): void {
    this.input = {
      barberName: '',
      barberPassword: '',
      barberEmail: '',
    };
  }
  addBarber() {
    var val = {barberName:this.barberName,
               barberPassword:this.barberPassword,
               barberEmail:this.barberEmail}
    this.service.addBarber(val).subscribe(res=>{
      alert('Barbeiro' + this.input.barberName + 'foi criado!')
    },
    error => console.log('Erro', error));
  }
  loginBarber() {
    var val = {barberName:this.barberName,
               barberPassword:this.barberPassword,
               barberEmail:this.barberEmail}
    this.service.loginBarber(val).subscribe(res=>{
      alert('Barbeiro' + this.input.barberName + 'está logado!')
    },
    error => console.log('Erro', error));
  }

}
