import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Student } from 'src/app/models/student.model';
import{Router} from '@angular/router';
import { StudentserviceService } from '../studentservice.service';

@Component({
  selector: 'app-display-student',
  templateUrl: './display-student.component.html',
  styleUrls: ['./display-student.component.css']
})
export class DisplayStudentComponent implements OnInit, OnChanges {
  confirmDelete = false;

  @Input()
  student!: Student;

  @Output() notify: EventEmitter<Student> = new EventEmitter<Student>();
  constructor(private _router:Router,
              private _studentService:StudentserviceService) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit(): void {
  }

  handleClick(){
    this.notify.emit(this.student);
  }

  ViewStudent(){
    this._router.navigate(['/student-details',this.student.id]);
  }

  EditStudent(){
    this._router.navigate(['edit-students',this.student.id]);
  }

  DeleteStudent(){
    this._studentService.DeleteStudent(this.student.id);
  }
}
