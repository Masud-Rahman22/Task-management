import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../MainLayout/Main";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import OurTeam from "../Pages/Our_Team/OurTeam";
import PrivateRoute from "../../PrivateRoute/PrivateRoute";
import Dashboard from "../Pages/Dashboard/Dashboard";
import AddTask from "../Pages/Dashboard/AddTask";
import DashboardHome from "../Pages/Dashboard/DashboardHome";
import TaskUpdate from "../Pages/Dashboard/TaskUpdate";
import ErrorPage from "../Pages/ErrorPage";
import FaqQuestions from "../assets/FAQ/FaqQuestions";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children : [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: 'contact',
                element: <PrivateRoute><Contact></Contact></PrivateRoute>
            },
            {
                path: 'ourTeam',
                element: <PrivateRoute><OurTeam></OurTeam></PrivateRoute>
            },
            {
                path: 'faq',
                element: <PrivateRoute><FaqQuestions></FaqQuestions></PrivateRoute>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children : [
            {
                path: 'DashboardHome',
                element: <PrivateRoute><DashboardHome></DashboardHome></PrivateRoute>
            },
            {
                path: 'addTask',
                element: <PrivateRoute><AddTask></AddTask></PrivateRoute>
            },
            {
                path: 'taskUpdate/:id',
                element: <PrivateRoute><TaskUpdate></TaskUpdate></PrivateRoute>,
                loader: ({params})=> fetch(`https://task-management-server-three-xi.vercel.app/tasks/${params.id}`) 
            }
        ]
    }
]);
export default Router;