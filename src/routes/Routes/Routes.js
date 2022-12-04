import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Login from "../../Pages/Auth/Login/Login";
import Register from "../../Pages/Auth/Register/Register";
import Blog from "../../Pages/Blog/Blog";
import Courses from "../../Pages/Courses/CourseDetails";
import FAQ from "../../Pages/FAQ/FAQ";
import Home from "../../Pages/Home/Home";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'course/',
                element: <Courses></Courses>
            },
            {
                path: 'FAQ',
                element:<FAQ></FAQ>
            },
            {
                path:'blog',
                element:<Blog></Blog>
            }
        ]
    }
])