import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function AddFolder() {
    const navigate=useNavigate()
    const [blog, setBlog] = useState({
        title: '',
        autour: '',
        desc: '',
    });


    const handleTitleChange = (e) => {
        setBlog(prevState => ({
            ...prevState,
            title: e.target.value,
        }));
    };

    const handleAuthorChange = (e) => {
        setBlog(prevState => ({
            ...prevState,
            autour: e.target.value,
        }));
    };

    const handleDescriptionChange = (e) => {
        setBlog(prevState => ({
            ...prevState,
            desc: e.target.value,
        }));
    };

    const test = () => {
        axios.post('http://localhost:3000/blogs', blog)
        .then(response => {
          console.log('Data updated:', response.data);
          navigate("/")
        })
        .catch(error => {
          console.error('Error updating data: ', error);
        });
    };    

    return (
        <div className='w-[100%] capitalize h-[60%]'>
            <h1 className='text-3xl'>Update a blog</h1>
            <div className='p-3'>
                <h1 className='mb-6'>Title</h1>
                <input
                    className='border w-[40vw] h-[7vh] pl-2'
                    value={blog.title}
                    onChange={handleTitleChange}
                />
            </div>
            <div className='p-3'>
                <h1 className='mb-6'>Author</h1>
                <input
                    className='border w-[40vw] h-[7vh] pl-2'
                    value={blog.autour}
                    onChange={handleAuthorChange}
                />
            </div>
            <div className='p-3'>
                <h1 className='mb-6'>Description</h1>
                <input
                    className='border w-[40vw] h-[7vh] pl-2'
                    value={blog.desc}
                    onChange={handleDescriptionChange}
                />
            </div>
            <button className='p-3 text-2xl text-blue-500' onClick={test}>
                add blog
            </button>
        </div>
    );
    
}

export default AddFolder