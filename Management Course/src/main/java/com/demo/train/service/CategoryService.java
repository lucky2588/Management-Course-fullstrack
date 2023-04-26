package com.demo.train.service;

import com.demo.train.entity.Category;
import com.demo.train.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {
    @Autowired
    private CategoryRepository categoryRepository;

    public List<Category> getCategoryAll(){
        return categoryRepository.findAll();
    }



}
