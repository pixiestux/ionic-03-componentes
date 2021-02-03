import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  fechaNac: Date = new Date();

  customPickerOptions = {
    buttons: [
      { 
        text: "Hola",
        handler: (event) => {
          console.log(event);
        }
      },
      { text: "Mundo"},
    ]
  }

  constructor() { }

  ngOnInit() {
  }

  cambioFecha(evento){
    console.log(evento);
    console.log(evento.detail.value);
  }

}
