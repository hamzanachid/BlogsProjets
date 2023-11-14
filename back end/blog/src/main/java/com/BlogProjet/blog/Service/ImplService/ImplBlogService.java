package com.BlogProjet.blog.Service.ImplService;

import com.BlogProjet.blog.Entity.BlogEntity;
import com.BlogProjet.blog.Service.BlogService;
import com.BlogProjet.blog.repository.BlogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ImplBlogService implements BlogService {

    @Autowired
    BlogRepository blogRepository;
    @Override
    public BlogEntity saveBlog(BlogEntity blog) {
        return blogRepository.save(blog);
    }

    @Override
    public Optional<BlogEntity> findBlogById(Long id) {
        return blogRepository.findById(id);
    }

    @Override
    public BlogEntity updateBlog(BlogEntity blog) {
        return blogRepository.save(blog);
    }

    @Override
    public List<BlogEntity> findAllBlogs() {
        return blogRepository.findAll();
    }

    @Override
    public void deleteBlog(Long id) {
        blogRepository.deleteById(id);
    }
}
