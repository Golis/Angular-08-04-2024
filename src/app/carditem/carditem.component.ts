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

  constructor(){
    console.log('constructor - CarditemComponent');
  }

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

  
 ngOnChanges(changes: any){
  console.log('ngOnChanges - CarditemComponent', changes);
 }

 ngOnInit(){
  console.log('ngOnInit - CarditemComponent');
  console.log('Método importante para conectar por primera vez con un backend- o modificar valores de un Input');
  console.log('Frecuencia 90%');
 }

 ngDoCheck(){
  console.log('ngDoCheck - CarditemComponent');
  console.log('Buen método para implementar lógica de detección de cambios manual');
  console.log('Frecuencia 10%');
 }

 ngAfterContentInit(){
  console.log('ngAfterContentInit - CarditemComponent');
  console.log('Buen método para inicializar cualquier variable que guarde relación con @ContentChild o @ContentChildren');
  console.log('Solo cuando tenemos contenido proyectado'); 
}

 ngContentChecked(){
  console.log('ngContentChecked - CarditemComponent');
  console.log('Se llama a la vez que ngOnChanges. Lugar donde Angular verifica el contenido del componente antes de renderizar la vista');
  console.log('Frecuencia 10%');
 }

  ngAfterViewInit(){
    console.log('ngAfterViewInit - CarditemComponent');
    console.log('Buen método para inicializar cualquier variable que guarde relación con @ViewChild o @ViewChildren');
    console.log(this.contentProjectionRef);
    console.log('Siempre que usemos @ViewChild o @ViewChildren');
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked - CarditemComponent');
    console.log('Instanciarse tras la renderización de la vista');
    console.log('Frecuencia 10%');
   }

   ngOnDestroy(){
    console.log('ngOnDestroy - CarditemComponent');
    console.log('Sirve para destruir las suscripciones o lo que sea necesario');
    console.log('Siempre que queramos destruir una suscripción');
   }
}
