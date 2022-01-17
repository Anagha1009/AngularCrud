import { Component, OnInit, ViewChild } from '@angular/core';
import{NgForm} from '@angular/forms';
import { Student } from 'src/app/models/student.model';
import{StudentserviceService} from '../studentservice.service';
import{Router} from '@angular/router';

@Component({
  selector: 'app-create-students',
  templateUrl: './create-students.component.html',
  styleUrls: ['./create-students.component.css']
})
export class CreateStudentsComponent implements OnInit {
  @ViewChild('StudentForm')
  public CreateStudentForm!: NgForm;

  student:Student={
      id:0,
      name:'',
      class:'',
      grade:'',
      address:'',
      rollNo:'',
      imgPath:''
  }

  constructor(private _studentService:StudentserviceService, 
              private _router:Router) 
              { 

              }
 
  ngOnInit(): void {
  }

  saveStudent(studForm:NgForm):void{
  this._studentService.SaveStudent(this.student);
  studForm.reset();
  this._router.navigate(['list-students']);
  }
}
