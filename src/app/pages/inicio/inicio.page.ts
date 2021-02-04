import { Component, OnInit } from '@angular/core';

interface Componente{
  icon: string;
  name: string;
  redirectTo: string
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
    {
      icon: "american-football",
      name: "Action Sheet",
      redirectTo: "/action-sheet"
    },
    {
      icon: "alert-circle",
      name: "Alert",
      redirectTo: "/alert"
    },
    {
      icon: "beaker",
      name: "Avatar",
      redirectTo: "/avatar"
    },
    {
      icon: "aperture",
      name: "Buttons",
      redirectTo: "/buttons"
    },
    {
      icon: "card",
      name: "Cards",
      redirectTo: "/card"
    },
    {
      icon: "checkbox",
      name: "Checkboxes",
      redirectTo: "/check"
    },
    {
      icon: "calendar",
      name: "Date Time",
      redirectTo: "/date-time"
    },
    {
      icon: "car-outline",
      name: "Fab",
      redirectTo: "/fab"
    },
]

  constructor() { }

  ngOnInit() {
  }

}
