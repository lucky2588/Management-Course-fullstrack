package com.demo.train.controller;

import com.demo.train.dto.CourseDTO;
import com.demo.train.entity.Course;
import com.demo.train.request.CreateCourseRequest;
import com.demo.train.request.UpsertCourseRequest;
import com.demo.train.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/admin")
public class AdminController {
    @Autowired
    private CourseService courseService;

    @PostMapping("updateCourse/{id}")
    public CourseDTO updateCourse(@PathVariable Integer id,@RequestBody UpsertCourseRequest upsertCourseRequest){
        return courseService.updateCourse(id,upsertCourseRequest);
    }


    // xoa khoa hoc
    @DeleteMapping("courses/{id}")
    public void deleteCourse(@PathVariable int id){
        courseService.deleteCourse(id);
    }


    @GetMapping("getCourseByPage")
    public Page<Course> getCourseAll(){
        return courseService.getCoursebyPage();
    }

      // tao khoa hoc
 @PostMapping("createCourse")
    public ResponseEntity<?> createCourse(@RequestBody CreateCourseRequest createCourseRequest){
//         return ResponseEntity.ok(createCourseRequest);

//
        return courseService.createCourse(createCourseRequest);
 }


}
