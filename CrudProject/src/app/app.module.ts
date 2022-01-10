import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListStudentsComponent } from './student/list-students/list-students.component';
import { CreateStudentsComponent } from './student/create-students/create-students.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import{StudentserviceService} from '../app/student/studentservice.service';
import { DisplayStudentComponent } from './student/display-student/display-student.component';

@NgModule({
  declarations: [
    AppComponent,
    ListStudentsComponent,
    CreateStudentsComponent,
    DisplayStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [StudentserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
