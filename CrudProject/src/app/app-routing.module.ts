import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateStudentsComponent } from './student/create-students/create-students.component';
import { ListStudentsComponent } from './student/list-students/list-students.component';

const routes: Routes = [
  {
    path:"list-students",
    component:ListStudentsComponent
  },
  {
    path:"create-students",
    component:CreateStudentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
