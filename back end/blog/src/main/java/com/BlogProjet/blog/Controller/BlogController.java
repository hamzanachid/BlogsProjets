package com.BlogProjet.blog.Controller;

import com.BlogProjet.blog.Entity.BlogEntity;
import com.BlogProjet.blog.Service.BlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/blogs")
public class BlogController {
    @Autowired
    BlogService blogService;

    @GetMapping
    public List<BlogEntity> findAllBlogs(){
        return blogService.findAllBlogs();
    }

    @GetMapping("/{id}")
    public Optional<BlogEntity> findBlogById(@PathVariable("id") Long id){
        return blogService.findBlogById(id);
    }

    @PostMapping
    public BlogEntity saveBlog(@RequestBody BlogEntity blogEntity){
        return blogService.saveBlog(blogEntity);
    }

    @PutMapping
    public BlogEntity updateBlog(@RequestBody BlogEntity blogEntity){
        return blogService.updateBlog(blogEntity);
    }

    @DeleteMapping("/{id}")
    public void deleteBlog(@PathVariable("id") Long id){
        blogService.deleteBlog(id);
    }
}
