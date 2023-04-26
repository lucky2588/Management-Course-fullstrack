package com.demo.train.service;

import com.demo.train.Mapper.CourseMapper;
import com.demo.train.dto.CourseDTO;
import com.demo.train.entity.Category;
import com.demo.train.entity.Course;
import com.demo.train.entity.User;
import com.demo.train.repository.CategoryRepository;
import com.demo.train.repository.CourseRepository;
import com.demo.train.repository.UserRepository;
import com.demo.train.request.CreateCourseRequest;
import com.demo.train.request.UpsertCourseRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service

public class CourseService {
    @Autowired
    private CourseRepository courseRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private CategoryRepository categoryRepository;


    public List<CourseDTO> getCourse(String name, String type, String topic) {
        if (name.equals("") && type.equals("") && topic.equals("")) {
            return courseRepository.findAll().stream().map(user -> CourseMapper.mapperCourse(user)).toList();
        }
        List<Course> newList = new ArrayList<>();
        for (int i = 0; i <= courseRepository.findAll().size() - 1; i++) {
            if (courseRepository.findAll().get(i).getName().equalsIgnoreCase(name) || courseRepository.findAll().get(i).getType().equalsIgnoreCase(type) ||
                    courseRepository.findAll().get(i).getCategories().contains(topic)) {
                newList.add(courseRepository.findAll().get(i));
            }
        }
        return newList.stream().map(user -> CourseMapper.mapperCourse(user)).toList();
    }


    public Page<Course> getCoursebyPage() {
        return courseRepository.findAll(PageRequest.of(1, 12, Sort.by("id").descending()));

    }

    public CourseDTO findCourseById(int id) {
        Optional<Course> courseOptional = courseRepository.findById(id);
        if (courseOptional.isPresent()) {
            return CourseMapper.mapperCourse(courseOptional.get());
        }
        throw new RuntimeException("Khong tim thay Id ");
    }


    public CourseDTO updateCourse(Integer id,UpsertCourseRequest upsertCourseRequest) {

        Course course = courseRepository.findById(id).orElseThrow(
                ()->{
                    throw new RuntimeException("Not Found Course");
                }
        );

        course.setName(upsertCourseRequest.getName());
        course.setType(upsertCourseRequest.getType());
        course.setDescription(upsertCourseRequest.getDescription());
        course.setThumbnail(upsertCourseRequest.getThumbnail());
        List<Category> categories = new ArrayList<>();
        List<Category> categoryList = categoryRepository.findAll();
        for (int i = 0; i <upsertCourseRequest.getCategoryList().size() ; i++) {
            for (int j = 0; j < categoryList.size() ; j++) {
                if(!categories.equals(categoryList.get(j) ) && upsertCourseRequest.getCategoryList().get(i)== categoryList.get(j).getId()){
                    categories.add(categoryList.get(j));
                }
            }
        }
        course.setCategories(categories);
        User user = userRepository.findById(upsertCourseRequest.getUserId()).get();

        course.setUser(user);
        courseRepository.save(course);
        return CourseMapper.mapperCourse(course);
    }

    public CourseDTO createCourse(CreateCourseRequest createCourseRequest) {
       User user = userRepository.findById(createCourseRequest.getUserId()).orElseThrow(
               ()->{
                   throw new RuntimeException("Not Found User");
               }
       );
        Integer id = courseRepository.findAll().size()+1;
        Course course = Course.builder()
                .id(id)
                .name(createCourseRequest.getName())
                .thumbnail(createCourseRequest.getThumbnail())
                .price(createCourseRequest.getPrince())
                .type(createCourseRequest.getType())
                .user(user)
                .build();
        List<Category> categories = new ArrayList<>();
        List<Category> categoryList = categoryRepository.findAll();
        for (int i = 0; i <createCourseRequest.getCategoryList().size() ; i++) {
            for (int j = 0; j < categoryList.size() ; j++) {
                if(!categories.equals(categoryList.get(j) ) && createCourseRequest.getCategoryList().get(i) == categoryList.get(j).getId()){
                    categories.add(categoryList.get(j));
                }
            }
        }
        course.setCategories(categories);
        courseRepository.save(course);
        return CourseMapper.mapperCourse(course);
    }


    public void deleteCourse(int id) {
        if (!courseRepository.findById(id).isPresent()) {
            throw new RuntimeException("Ko tim thay ID");
        }
        courseRepository.delete(courseRepository.findById(id).get());
    }


}
