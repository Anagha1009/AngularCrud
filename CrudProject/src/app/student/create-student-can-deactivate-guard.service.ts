import { Injectable } from '@angular/core';
import { CanDeactivate } from "@angular/router";
import { CreateStudentsComponent } from "./create-students/create-students.component";

@Injectable()
export class CreateStudentCanDeactivateGuardService implements CanDeactivate<CreateStudentsComponent>{
    canDeactivate(component: CreateStudentsComponent): boolean {
        if (component.CreateStudentForm.dirty) {
            return confirm('Are you sure want to discard the changes');
        }

        return true;
    }
}