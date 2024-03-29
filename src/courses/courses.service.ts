import { HttpException, Injectable } from '@nestjs/common';
import { resolve } from 'path';
import {COURSES} from './courses.mock'
@Injectable()
export class CoursesService {
    courses=COURSES;


//Get course//
    getCourse(): Promise<any> {
        return new Promise(resolve =>{
            resolve(this.courses);
        })
    }

    getcourse(CourseId): Promise<any>{
        let id=Number(CourseId);
        return new Promise(resolve =>{
            const course= this.courses.find(course => course.id=== id)
            if(!course){
                throw new HttpException('Course does not exist', 404)
            }
            resolve(course);
        });
        
    }

//Add course//
    addCourse(course): Promise<any> {
        return new Promise(resolve => {
            this.courses.push(course)
            resolve(this.courses)
        })
    }


//Delete Course//
    deleteCourse(courseId): Promise<any>{
        let id=Number(courseId);
    return new Promise(resolve=> {
        let index=this.courses.findIndex(course => course.id===id);
        if(index === -1){
            throw new HttpException('Course does not exist', 404);
            this.courses.splice(index, 1);
            resolve(this.courses);
        }
    });

    }
    
}
