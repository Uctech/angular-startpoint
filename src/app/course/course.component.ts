import { Component } from '@angular/core';
import { CourseService } from '../service/course.service';
import { BackGroundDirective } from '../directive/back-ground.directive';

@Component({
  selector: 'courses',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  providers: [CourseService,BackGroundDirective],

})
export class CourseComponent {
  title = "Course Title";
  courses: string[];
  constructor(courseService: CourseService) {
    this.courses = courseService.getCourses();
  }
}
