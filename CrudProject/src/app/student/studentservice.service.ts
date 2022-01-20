import { Injectable } from '@angular/core';
import { max } from 'rxjs';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentserviceService {
  private listStudents: Student[] = [
    {
      id: 1,
      name: 'Selena Gomez',
      class: 'I',
      grade: 'O',
      address: 'UK',
      rollNo: '20',
      imgPath: 'assets/images/selena.jpg'
    },
    {
      id: 2,
      name: 'Ariana Grande',
      class: 'I',
      grade: 'A',
      address: 'US',
      rollNo: '30',
      imgPath: 'assets/images/ariana-grande.jpg'
    },
    {
      id: 3,
      name: 'Taylor Swift',
      class: 'II',
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

    if (student.id == 0) {
      const maxid = this.listStudents.reduce(function(s1,s2){
        return (s1.id>s2.id) ?  s1 : s2;
      }).id;

      student.id = maxid + 1;  
      this.listStudents.push(student);
    }
    else {
      const newIndex = this.listStudents.findIndex(e => e.id === student.id);
      this.listStudents[newIndex] = student;
    }

  }

  DeleteStudent(id:number){
     const newid = this.listStudents.findIndex(s=>s.id === id);

     if(newid !== -1)
     {
       this.listStudents.splice(newid,1);
     }
  }

  constructor() { }
}
