import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { CourseService } from './../../../../../course-manager-master/course-manager-master/src/app/courses/course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
})

export class CourseListComponent implements OnInit {
  courses: Course[] = [];

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
   this.courses = this.courseService.retrieveAll();
  }
}
