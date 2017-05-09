import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CourseService } from './service/course.service';
import { AuthorComponent } from './author/author.component';
import { AuthorService } from './service/author.service';
import { BackGroundDirective } from './directive/back-ground.directive';


@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    AuthorComponent,
    BackGroundDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [CourseService,AuthorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
