import { Component, OnInit } from '@angular/core';
import{NgForm} from '@angular/forms';
import { Student } from 'src/app/models/student.model';

@Component({
  selector: 'app-create-students',
  templateUrl: './create-students.component.html',
  styleUrls: ['./create-students.component.css']
})
export class CreateStudentsComponent implements OnInit {
  student:Student={
      id:0,
      name:'',
      class:'',
      grade:'',
      address:'',
      rollNo:'',
      imgPath:''
  }

  constructor() { }
 
  ngOnInit(): void {
  }

  saveStudent(studForm: Student):void{
    console.log(studForm);
  }
}
