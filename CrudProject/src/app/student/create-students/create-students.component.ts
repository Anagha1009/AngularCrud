import { Component, OnInit } from '@angular/core';
import{NgForm} from '@angular/forms';

@Component({
  selector: 'app-create-students',
  templateUrl: './create-students.component.html',
  styleUrls: ['./create-students.component.css']
})
export class CreateStudentsComponent implements OnInit {

  constructor() { }
 
  ngOnInit(): void {
  }

  saveStudent(studForm: NgForm):void{
    console.log(studForm.value);
  }
}
