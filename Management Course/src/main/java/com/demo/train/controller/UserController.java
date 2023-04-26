package com.demo.train.controller;

import com.demo.train.dto.CourseDTO;
import com.demo.train.entity.Category;
import com.demo.train.entity.User;
import com.demo.train.service.CategoryService;
import com.demo.train.service.CourseService;
import com.demo.train.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/admin")

public class UserController {
    @Autowired
    private CategoryService CategoryService;
    @Autowired
    private UserService userService;
    @Autowired
    private CourseService courseService;
    @GetMapping("sreachCourse")
    public List<CourseDTO> getAll(@RequestParam(defaultValue = "",required = false) String type, @RequestParam(defaultValue = "",required = false) String name , @RequestParam(defaultValue = "",required = false)String topic){
        return courseService.getCourse(name,type,topic);
    };

    //xem danh sách khóa học
    @GetMapping("course/{id}")
    public CourseDTO getCourse(@PathVariable int id){
        return courseService.findCourseById(id);
    }

    @GetMapping("getUser")
    public List<User> getUserAll(){
        return userService.getAll();
    }


    // Lay danh sach Category
    @GetMapping("getCategory")
    public List<Category> getCategory(){
        return CategoryService.getCategoryAll();
    }

}
