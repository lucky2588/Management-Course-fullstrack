package com.demo.train.request;

import com.demo.train.entity.Category;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UpsertCourseRequest {

    private Integer courseID;
    private String name;
    private String description;
    private String type;
    private List<Integer> categoryList;
    private String thumbnail;
    private Integer userId;

}
