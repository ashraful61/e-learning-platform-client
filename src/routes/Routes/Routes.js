import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Login from "../../Pages/Auth/Login/Login";
import Register from "../../Pages/Auth/Register/Register";
import Blog from "../../Pages/Blog/Blog";
import Checkout from "../../Pages/Checkout/Checkout";
import CategoryWiseCourse from "../../Pages/Courses/CategoryWiseCourse/CategoryWiseCourse";
import Courses from "../../Pages/Courses/CourseDetails";
import FAQ from "../../Pages/FAQ/FAQ";
import Home from "../../Pages/Home/Home";
import NotFound from "../../Pages/NotFound/NotFound";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <NotFound></NotFound>,
        children:[
            {
                path: '/',
                loader: async () => fetch('https://online-backend-learning.vercel.app/courses'),
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
                path: 'course/:id',
                loader: ({params}) => fetch(`https://online-backend-learning.vercel.app/courses/${params.id}`) ,
                element: <Courses></Courses>
            },
            {
                path: 'FAQ',
                element:<FAQ></FAQ>
            },
            {
                path:'blog',
                element:<Blog></Blog>
            },
            {
                path:'checkout',
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>
            },
            {
                path: 'course-categories/:id',
                loader: ({params}) => fetch(`https://online-backend-learning.vercel.app/course-categories/${params.id}`),
                element: <CategoryWiseCourse></CategoryWiseCourse>
            }
        ]
    }
])