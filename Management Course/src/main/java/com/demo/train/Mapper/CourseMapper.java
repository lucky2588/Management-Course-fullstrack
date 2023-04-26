package com.demo.train.Mapper;

import com.demo.train.dto.CourseDTO;
import com.demo.train.entity.Course;

public class CourseMapper {
    public static CourseDTO mapperCourse(Course course){
        CourseDTO course1 = CourseDTO.builder()
                .id(course.getId())
                .type(course.getType())
                .thumbnail(course.getThumbnail())
                .name(course.getName())
                .categoryList(course.getCategories())
                .user(course.getUser())
                .description(course.getDescription())
                .build();
        return course1;
    }
}
