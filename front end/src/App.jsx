import {
  Link,
  Route,
  Outlet,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import ListBlogs from "./components/ListBlogs";
import AddFolder from "./components/AddFolder";
import NavBar from "./components/NavBar"
import UpdateBlog from "./components/UpdateBlog";
function App() { 
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root/>}>
           <Route index element={<ListBlogs></ListBlogs>}></Route>
           <Route element={<AddFolder/>} path="/AddBlog"></Route>
           <Route element={<UpdateBlog></UpdateBlog>} path="/UpdateBlog/:id"></Route>
      </Route>
    )
  )
  return (
    <div className='w-[100vw] h-[100vh]  font-thin'> 
      <RouterProvider router={router}></RouterProvider>
    </div>
    )
}

export default App


const Root=()=>{
  return (
    <div className='w-[100vw] h-[100vh] px-60 font-thin'>
      <NavBar/>
      <div>
        <Outlet/>
      </div>
    </div>
    ) 
}