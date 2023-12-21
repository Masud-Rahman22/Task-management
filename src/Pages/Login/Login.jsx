import { Link, useNavigate } from "react-router-dom";
import animation from '../../../public/login/Animation - 1703137312822.json'
import Lottie from "lottie-react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import toast from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
const Login = () => {
    const {googleLogin,Login, githubLogin} = useContext(AuthContext)
    const navigate = useNavigate();
    const handleToGoogleLogin = () => {
        googleLogin()
            .then(() => {
                toast.success('You successfully signed in');
                navigate('/dashboard/DashboardHome')
            })
            .catch((err) => {
                console.log(err);
            })
    }
    const handleToGithubLogin = () => {
        githubLogin()
            .then(() => {
                toast.success('You successfully signed in');
                navigate('/dashboard/DashboardHome')
            })
            .catch((err) => {
                console.log(err);
            })
    }
    const handleToLogin = e =>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        Login(email,password)
        .then(()=>{
            toast.success('You successfully signed in');
            navigate('/dashboard/DashboardHome')
        })
        .catch((error)=>{
            if (error.code === 'auth/invalid-login-credentials') {
                toast.error('Invalid Login Credentials');
            }
        })
    }
    return (
        <section className="flex flex-col md:flex-row-reverse items-center justify-between">
            <div className="flex-1">
                <Lottie className="w-[500px] h-[500px]" animationData={animation}></Lottie>
            </div>
            <div className="md:mb-20 hero  bg-opacity-30 text-white flex-1">
                <div className=" my-auto hero-overlay  lg:w-2/4 bg-transparent backdrop-blur-lg mx-auto ">
                    <div className=" card w-full p-3 shadow-2xl">
                        <h1 className="text-4xl text-center font-bold text-purple-500 font-sans underline">Welcome Back!</h1>

                        <form onSubmit={handleToLogin} className="card-body">
                            <div className="form-control">
                                <input name="email" type="email" placeholder="Your Email" className="border-b-2 font-bold text-sm w-full mt-5 p-2 rounded text-black" required />
                            </div>
                            <div className="form-control">
                                <input name="password" type="password" placeholder="password" className="border-b-2 font-bold text-sm w-full mt-5 rounded p-2 text-black" required />
                            </div>

                            <div className="form-control mt-6">
                                <button className="bg-purple-500 text-black w-full mt-5 rounded-full p-3">Login</button>
                                <div className="flex flex-col justify-center items-center gap-3">
                                    <p className="font-bold text-xl mt-5 text-purple-500">Or you can login using</p>
                                    <div className="flex gap-5">
                                    <button onClick={handleToGoogleLogin}><FcGoogle className="w-full h-[50px]"></FcGoogle></button>
                                    <button onClick={handleToGithubLogin}><FaGithub className="w-full h-[50px]"></FaGithub></button>
                                    </div>
                                </div>
                                <p className=" mt-5 text-center text-purple-500 text-xl">New Here? <Link to="/register" className="underline text-blue-500 text-xl font-bold">Register</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;