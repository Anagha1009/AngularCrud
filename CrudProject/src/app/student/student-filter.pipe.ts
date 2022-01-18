import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../models/student.model';

@Pipe({
    name: 'studentFilter'
})
export class StudentFilterPipe implements PipeTransform {
    transform(student: Student[], searchTerm: string): Student[] {
        if (!student || !searchTerm) {
            return student;
        }

        return student.filter(student => student.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }
}