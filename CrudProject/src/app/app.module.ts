import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListStudentsComponent } from './student/list-students/list-students.component';
import { CreateStudentsComponent } from './student/create-students/create-students.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import{StudentserviceService} from '../app/student/studentservice.service';
import { DisplayStudentComponent } from './student/display-student/display-student.component';
import{CreateStudentCanDeactivateGuardService} from '../app/student/create-student-can-deactivate-guard.service';
import { StudentDetailsComponent } from './student/student-details/student-details.component';
import { StudentFilterPipe } from './student/student-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListStudentsComponent,
    CreateStudentsComponent,
    DisplayStudentComponent,
    StudentDetailsComponent,
    StudentFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [StudentserviceService,CreateStudentCanDeactivateGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
