import React, { useEffect } from 'react'
import { useState } from 'react';
import Blog from './Blog'; 
import { NavLink } from 'react-router-dom';
import axios from 'axios';
function ListBlogs() { 
    const [blogs, setBlogs] = useState([

    ]);
    const [load,setLoad]=useState(true)
    useEffect(()=>{
        axios.get('http://localhost:3000/blogs')
    .then(response => {
        setLoad(true)
      setBlogs(response.data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
    },[load])
    const hundleDelete = (id) => {
        axios.delete(`http://localhost:3000/blogs/${id}`)
            .then(response => { 
                setLoad(false)
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });
    }
    return (
        <div  className='w-[100%] h-[80%] cursor-pointer  overflow-hidden'>
            <h1 className='text-3xl'>List of You Blogs</h1>
            <div className='overflow-auto w-[100%] h-[90%] mt-10'>
                {blogs.map((blog) => {
                    return ( 
                        <Blog hundleDelete={hundleDelete} key={blog.id} blog={blog}/> 
                    )
                })}
            </div>
        </div>
    )
}

export default ListBlogs