import { Component, OnInit } from '@angular/core';
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

  saveStudent():void{
  this._studentService.SaveStudent(this.student);
  this._router.navigate(['list-students']);
  }
}
