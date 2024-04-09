import { Component } from '@angular/core';
import { employees } from '../../assets/fixtures/employees';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-listitems',
  templateUrl: './listitems.component.html',
  styleUrl: './listitems.component.css'
})
export class ListitemsComponent {
  firstEmployee="";
  secondEmployee="";
  thirdEmployee="";
  fourthEmployee="";

  selectedEmployee?: Employee;

  constructor(){
    this.firstEmployee = employees[0];
    this.secondEmployee = employees[1];
    this.thirdEmployee = employees[2];
    this.fourthEmployee = employees[3];
  }

  onEmployeeChecked(employee: Employee){
      this.selectedEmployee = employee;

      //Enviar al API el/los empleados que recibo para realizar X acción
  }
    
}
