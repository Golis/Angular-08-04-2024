import { Component, ContentChild, EventEmitter, Input, Output, ViewChild } from '@angular/core';
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

  @ContentChild ('contentProjectionRef') contentProjectionRef:any;

  onEmployeeChecked(currentEmployee: Employee){
    this.employeeSelected.emit(currentEmployee);
  }

  onCheckRank(rank: string){
    if(rank === "senior"){
      return {'text-decoration': "underline"};
    } else{
      return null;
    }
  }

  ngAfterViewInit(){
    console.log('Referencia proyectada');
    console.log(this.contentProjectionRef);
  }
}
