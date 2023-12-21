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

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children : [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: 'contact',
                element: <Contact></Contact>
            },
            {
                path: 'ourTeam',
                element: <OurTeam></OurTeam>
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
                element: <DashboardHome></DashboardHome>
            },
            {
                path: 'addTask',
                element: <AddTask></AddTask>
            }
        ]
    }
]);
export default Router;