import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { employees } from '../../assets/fixtures/employees';
import { Employee } from '../../models/employee';
import { DatePipe } from '@angular/common';
import { CarditemComponent } from '../carditem/carditem.component';
import { Observable, Subscription } from 'rxjs';
import { MockService } from '../services/mock.service';

@Component({
  selector: 'app-listitems',
  templateUrl: './listitems.component.html',
  styleUrl: './listitems.component.css'
})
export class ListitemsComponent {
  @ViewChild('todayRef') todayRef?:ElementRef

  @ViewChildren('component')
  cards!: QueryList<CarditemComponent>;

  /*firstEmployee="";
  secondEmployee="";
  thirdEmployee="";
  fourthEmployee="";*/

  selectedEmployee?: Employee;
  employeesList:any;
  //employeesList$? : Observable<Employee[]>;

  today = new Date();
  datepipe: DatePipe = new DatePipe('en-US');
  tomorrow?:any;

  subscription?: Subscription;

  constructor(
    private mockService: MockService
  ){
    /*this.firstEmployee = employees[0];
    this.secondEmployee = employees[1];
    this.thirdEmployee = employees[2];
    this.fourthEmployee = employees[3];*/

    //this.employeesList = employees;

    console.log("constructor");
    console.log(this.todayRef?.nativeElement.innerText);
  }

  onEmployeeChecked(employee: Employee){
      this.selectedEmployee = employee;
  }

  ngOnChanges(changes: any){
    console.log('ngOnChanges', changes);
  }

  ngOnInit(){
    // Este es el método ideal para traer datos desde un API
    this.subscription = this.mockService.getEmployees().subscribe(
      data => {
          this.employeesList = data;
      }
    )
    //Notación alternativa
    // this.employeesList$ = this.mockService.getEmployees();
  }

  ngAfterViewInit(){
      console.log("ngAfterViewInit");
      console.log("today");
      console.log(this.todayRef?.nativeElement.innerText);
      this.tomorrow = this.datepipe.transform(new Date(this.today.setDate(this.today.getDate() +1)), 'dd/MM/YYYY');
      console.log("tomorrow");
      console.log(this.tomorrow);
      console.log('cards');
      console.log(this.cards);
  }

  ngOnDestroy(){
    console.log('ngOnDestroy');

    if (this.subscription){
      this.subscription.unsubscribe();
    }
  }
    
}
