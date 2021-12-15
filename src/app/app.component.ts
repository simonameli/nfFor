import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  allCourses;
/*
  courses= [
    {id:1, name: 'storia'},
    {id:2, name: 'fisica'},
    {id:3, name: 'geografia'}
  ]

  onAdd(){
    this.courses.push({id:4, name:'italiano'})
  }

  onRemove(course){
    let index= this.courses.indexOf(course, 1);
    this.courses.splice(index, 1);
  }
*/
  onUpdate(course){
    course.name ='Updated';
  }

  loadCourses() {
  this.allCourses = [
    {id:1, name: 'storia'},
    {id:2, name: 'fisica'},
    {id:3, name: 'geografia'}
  ]
  }
  trackCourse(index,course){
    return course ? course.id : undefined;
  }
}
