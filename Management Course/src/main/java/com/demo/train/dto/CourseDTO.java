package com.demo.train.dto;


import com.demo.train.entity.Category;
import com.demo.train.entity.User;
import lombok.*;

import java.util.List;
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CourseDTO {
private Integer id;
private String name;
private String  description;
private String type;
private List<Category> categoryList;
private String thumbnail;
private User user;
}
