import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateStudentCanDeactivateGuardService } from './student/create-student-can-deactivate-guard.service';
import { CreateStudentsComponent } from './student/create-students/create-students.component';
import { ListStudentsComponent } from './student/list-students/list-students.component';
import { StudentDetailsComponent } from './student/student-details/student-details.component';

const routes: Routes = [
  {
    path:"list-students",
    component:ListStudentsComponent
  },
  {
    path:"create-students",
    component:CreateStudentsComponent,
    canDeactivate: [CreateStudentCanDeactivateGuardService]
  },
  {
    path:"student-details/:id",
    component:StudentDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
