import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-carditem',
  templateUrl: './carditem.component.html',
  styleUrl: './carditem.component.css'
})
export class CarditemComponent {
  @Input() employee: any;
  @Output()
  employeeSelected = new EventEmitter<Employee>();

  onEmployeeChecked(currentEmployee: Employee){
    this.employeeSelected.emit(currentEmployee);
  }
}
