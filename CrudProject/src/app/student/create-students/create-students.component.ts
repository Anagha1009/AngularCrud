import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Student } from 'src/app/models/student.model';
import { StudentserviceService } from '../studentservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-students',
  templateUrl: './create-students.component.html',
  styleUrls: ['./create-students.component.css']
})
export class CreateStudentsComponent implements OnInit {
  @ViewChild('StudentForm')
  public CreateStudentForm!: NgForm;

  student: Student = new Student;

  constructor(private _studentService: StudentserviceService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(parameterMap => {
      const id: any = parameterMap.get('id');
      this.getStudent(id);
    });
  }

  private getStudent(id: any) {
    if (id === 0) {
      this.student = {
        id: 0,
        name: '',
        class: '',
        grade: '',
        address: '',
        rollNo: '',
        imgPath: ''
      }
    }
    else{
      this.student = this._studentService.GetStudent(id);
    }
  }

  saveStudent(studForm: NgForm): void {
    const newStudent: Student = Object.assign({}, this.student);
    this._studentService.SaveStudent(newStudent);
    studForm.reset();
    this._router.navigate(['list-students']);
  }
}
