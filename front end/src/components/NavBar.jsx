import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div id='test' className="w-full font-thin capitalize h-15 flex items-center justify-between">
      <h1 className="text-2xl text-blue-500">Hamza Blogs</h1>
      <ul className="flex">
        <li className="text-xl hover:text-blue-500 cursor-pointer">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="ml-10 text-xl hover:text-blue-500 cursor-pointer">
          <Link to={"/AddBlog"}>Add Blog</Link>
        </li>
        <li className="ml-10 text-xl hover:text-blue-500 cursor-pointer">About</li>
      </ul>
    </div>
  );
}

export default NavBar;
