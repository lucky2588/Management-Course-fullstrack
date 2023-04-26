package com.demo.train.request;

import com.demo.train.entity.Category;
import com.demo.train.entity.User;
import lombok.*;

import java.util.List;
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CreateCourseRequest {

    private String name;
    private String  description;
    private String type;
    private List<Integer> categoryList;
    private String thumbnail;
    private Integer prince;
    private Integer userId;
}
