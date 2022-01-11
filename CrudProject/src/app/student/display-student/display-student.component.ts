import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Student } from 'src/app/models/student.model';

@Component({
  selector: 'app-display-student',
  templateUrl: './display-student.component.html',
  styleUrls: ['./display-student.component.css']
})
export class DisplayStudentComponent implements OnInit, OnChanges {
  @Input()
  student!: Student;

  @Output() notify: EventEmitter<Student> = new EventEmitter<Student>();
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit(): void {
  }

  handleClick(){
    this.notify.emit(this.student);
  }
}
