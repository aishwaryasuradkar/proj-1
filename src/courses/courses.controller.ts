import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import {CoursesService} from './courses.service'
import {CreateCourseDto} from './create-course.dto'

@Controller('courses')
export class CoursesController {
    constructor(private coursesService: CoursesService) {}



    @Get()
    async getCourses(){
        const courses = await this.coursesService.getCourse();
        return courses;
    }




    @Get(':courseId')
    async getCourse(@Param('courseId') courseId){
        const course = await this.coursesService.getCourse();
        return course;
    }



    @Post()
    async addCourse(@Body() createCourseDto: CreateCourseDto){
        const course= await this.coursesService.addCourse(createCourseDto);
        return course;
    }


    @Delete()
    async deleteCourse(@Query() query){
        const course= await this.coursesService.deleteCourse(query.courseId);
        return course;
    }
}


