import { Link } from 'react-router-dom';
import logo from '../../public/logo/cover.png'
import { FaFacebook, FaLinkedin } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className="footer footer-center p-10 text-white bg-black rounded">
            <nav className="grid grid-flow-col gap-4">
                <Link to='/'><a className="link link-hover">Home</a></Link>
                <Link to='ourTeam'><a className="link link-hover">Our Team</a></Link>
                <Link to='contact'><a className="link link-hover">Contact</a></Link>
            </nav>
            <nav>
                <div className="flex items-center gap-4">
                    <a href='https://twitter.com/MasudRhmn2001'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                    <a href='https://www.linkedin.com/in/masud-rahman-91a499289'>
                    <FaLinkedin width="24" height="24" className="fill-current text-2xl" /></a>
                    <a href='https://www.facebook.com/profile.php?id=100009878949750'>
                    <FaFacebook className="fill-current text-2xl" /></a>
                </div>
            </nav>
            <aside>
            <img className="w-[250px]" src={logo} alt="" />
            </aside>
        </footer>
    );
};

export default Footer;