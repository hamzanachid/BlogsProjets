import React from 'react' 
import { NavLink } from 'react-router-dom';
function Blog({ blog ,hundleDelete}) {
    
    return (

        <div key={blog.id} className='p-2 border-black border h-[15vh] flex flex-col  justify-between mb-10 hover:shadow-lg rounded-sm'>
            <NavLink to={`UpdateBlog/${blog.id}`}>
            <div className='flex justify-between'>
                <h1>{blog.title}</h1>
                <h1>{blog.autour}</h1>
            </div>
            </NavLink>
            <button className='text-blue-500' onClick={()=>{hundleDelete(blog.id)}}>delete</button>
        </div>
    )
}

export default Blog