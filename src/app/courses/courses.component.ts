import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  // CHALLENGE
  // STEP 01: Display courses using ngFor
  // STEP 02: Add event handler to select course
  // STEP 03: Display raw json of selected course
  selectedCourse = null;

  courses = [
    {
      id: 1,
      title: 'Angular 9 Fundamentals',
      description: 'Learn the fundamentals of Angular 9',
      percentComplete: 26,
      favorite: true,
    },
    {
      id: 2,
      title: 'JavaScript The Really REALLY HARD PARTS',
      description: 'Worship Will Sentance',
      percentComplete: 50,
      favorite: true,
    },
  ];

  constructor() {}

  selectCourse(course) {
    this.selectedCourse = course;
  }

  deleteCourse(course) {
    const idx = this.courses.findIndex((el) => el.id == course.id);
    this.courses.splice(idx, 1);
  }

  saveCourse() {
    console.log('SAVE SOURCE!');
  }

  cancel() {
    this.resetSelectedCourse();
  }

  resetSelectedCourse() {
    const emptyCourse = {
      id: null,
      title: '',
      description: '',
      percentComplete: 0,
      favorite: false,
    };

    this.selectCourse(emptyCourse);
  }

  ngOnInit(): void {
    this.resetSelectedCourse();
  }
}
