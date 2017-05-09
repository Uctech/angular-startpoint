import { Component } from '@angular/core';
import { CourseComponent } from './course/course.component';
import { AuthorComponent } from './author/author.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CourseComponent, AuthorComponent]
})
export class AppComponent {
  constructor(courseComponent: CourseComponent, authorComponent: AuthorComponent) { }
}
