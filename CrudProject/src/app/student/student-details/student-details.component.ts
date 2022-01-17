import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from '@angular/router';
import { Student } from 'src/app/models/student.model';
import{StudentserviceService} from '../studentservice.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})

export class StudentDetailsComponent implements OnInit {

  student: Student = new Student;

  constructor(private _activatedRoute:ActivatedRoute,
              private _studentService:StudentserviceService) { }

  ngOnInit(): void {
    const id = +this._activatedRoute.snapshot.params['id'];
    this.student = this._studentService.GetStudent(id);
  }

}
