import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  titulo: string = "PORTAFOLIO DE MONSERRAT, JUAN PABLO";
  constructor() { }

  ngOnInit(): void {
  }

}
