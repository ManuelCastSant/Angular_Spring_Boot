import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'Bienvenido a Angular- Spring';
  curso: string = 'Curso Spring con Angular';
  profesor: string = 'Manuel Castañeda Santana Cambia';
}
