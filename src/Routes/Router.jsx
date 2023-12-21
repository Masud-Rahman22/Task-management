import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../MainLayout/Main";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import OurTeam from "../Pages/Our_Team/OurTeam";

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
]);
export default Router;