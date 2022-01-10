import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student.model';
import {StudentserviceService} from '../studentservice.service';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent implements OnInit {
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
  constructor(private _studentService:StudentserviceService) { }

  ngOnInit(): void {
    this.students = this._studentService.GetStudents();
  }

}
