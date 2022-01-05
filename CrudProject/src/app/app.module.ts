import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListStudentsComponent } from './student/list-students/list-students.component';
import { CreateStudentsComponent } from './student/create-students/create-students.component';

@NgModule({
  declarations: [
    AppComponent,
    ListStudentsComponent,
    CreateStudentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
