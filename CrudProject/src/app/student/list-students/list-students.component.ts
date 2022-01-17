import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student.model';
import {StudentserviceService} from '../studentservice.service';
import{Router} from '@angular/router';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent implements OnInit {

  dataFromChild!: Student;
  students: Student[] = [
    {
      id:1,
      name:'Selena',
      class:'X',
      grade:'O',
      address:'UK',
      rollNo:'20',
      imgPath:'assets/images/selena.jpg'
    },
    {
      id:2,
      name:'Ariana',
      class:'X',
      grade:'A',
      address:'US',
      rollNo:'30',
      imgPath:'assets/images/ariana-grande.jpg'
    },
    {
      id:3,
      name:'Taylor Swift',
      class:'X',
      grade:'D',
      address:'UK',
      rollNo:'35',
      imgPath:'assets/images/Taylor-Swift.jpg'
    }
  ]
  studentToDisplay: Student = new Student;
  private arrayIndex  = 1;

  constructor(private _studentService:StudentserviceService,
              private _router:Router) 
              { }

  ngOnInit(): void {
    this.students = this._studentService.GetStudents();
    this.studentToDisplay = this.students[0];
  }

  nextStudent():void{
    if(this.arrayIndex<= 2){
      this.studentToDisplay = this.students[this.arrayIndex];
      this.arrayIndex++;
    }else{
      this.studentToDisplay = this.students[0];
      this.arrayIndex = 1;
    }
  }

  handleNotify(eventData:Student){
    this.dataFromChild = eventData;
  }

  onClick(studentId:number){
    this._router.navigate(['/student-details',studentId]);
  }
}
