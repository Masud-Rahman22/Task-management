import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import img from '../../public/background/9154281.jpg'

const Main = () => {
    const backgroundImageStyle = {
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
    };
    return (
        <div style={backgroundImageStyle}>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;