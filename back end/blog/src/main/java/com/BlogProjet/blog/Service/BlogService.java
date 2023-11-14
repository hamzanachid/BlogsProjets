package com.BlogProjet.blog.Service;

import com.BlogProjet.blog.Entity.BlogEntity;

import java.util.List;
import java.util.Optional;

public interface BlogService {
    public BlogEntity saveBlog(BlogEntity blog);
    public Optional<BlogEntity> findBlogById(Long id);

    public BlogEntity updateBlog(BlogEntity blog);
    public List<BlogEntity> findAllBlogs();
    public void deleteBlog(Long id);


}
