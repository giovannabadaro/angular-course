import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html'
})

export class CourseListComponent implements OnInit {
  courses: Course[] = [];

  ngOnInit(): void {
    this.courses = [
      {
        id: 1,
        name: 'Angular 11',
        imageUrl: '',
        code: '746283ASD',
        duration: 120,
        rating: 1.5,
        releaseDate: 'December 2019'
      },
      {
        id: 2,
        name: 'React',
        imageUrl: '',
        code: '746283JAS',
        duration: 1280,
        rating: 1.5,
        releaseDate: 'January 2020'
      }
    ]
  }
}
