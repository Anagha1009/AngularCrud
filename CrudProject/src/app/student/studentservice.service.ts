import { Injectable } from '@angular/core';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentserviceService {
  private listStudents: Student[] = [
    {
      id: 1,
      name: 'Selena Gomez',
      class: 'X',
      grade: 'O',
      address: 'UK',
      rollNo: '20',
      imgPath: 'assets/images/selena.jpg'
    },
    {
      id: 2,
      name: 'Ariana Grande',
      class: 'X',
      grade: 'A',
      address: 'US',
      rollNo: '30',
      imgPath: 'assets/images/ariana-grande.jpg'
    },
    {
      id: 3,
      name: 'Taylor Swift',
      class: 'X',
      grade: 'D',
      address: 'UK',
      rollNo: '35',
      imgPath: 'assets/images/Taylor-Swift.jpg'
    }
  ]

  GetStudents(): Student[] {
    return this.listStudents;
  }

  GetStudent(id: number): Student {
    return this.listStudents.filter(s => s.id == id)[0];
  }

  SaveStudent(student: Student) {
    this.listStudents.push(student);
  }

  constructor() { }
}
