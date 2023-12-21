import { Link, useNavigate } from "react-router-dom";
import animation from '../../../public/login/Animation - 1703137312822.json'
import Lottie from "lottie-react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
    const navigate = useNavigate();
    const { googleLogin, register, githubLogin } = useContext(AuthContext)
    const handleToGoogleLogin = () => {
        googleLogin()
            .then(() => {
                toast.success('You successfully signed up');
                navigate('dashboard')
            })
            .catch((err) => {
                console.log(err);
            })
    }
    const handleToGithubLogin = () => {
        githubLogin()
            .then(() => {
                toast.success('You successfully signed in');
                navigate('dashboard')
            })
            .catch((err) => {
                console.log(err);
            })
    }
    const handleToRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        if (!/^(?=.*[A-Z])(?=.*?[0-9])(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~])[A-Za-z!@#$%^&*()_+{}[\]:;<>,.?~0-9]{6,}$/.test(password)){
            toast.error("password must be at least 6 characters long with one uppercase letter and one special character");
            return;
        }
        console.log(email,password);
        register(email, password)
            .then(() => {
                toast.success('You successfully signed up');
                navigate('/login')
            })
            .catch()
    }
    return (
        <div>
            <section className="flex flex-col md:flex-row-reverse items-center justify-between">
                <div className="flex-1">
                    <Lottie className="w-[500px] h-[500px]" animationData={animation}></Lottie>
                </div>
                <div className="md:mb-20 hero  bg-opacity-30 text-white flex-1">
                    <div className=" my-auto hero-overlay  lg:w-2/4 bg-transparent backdrop-blur-lg mx-auto ">
                        <div className=" card w-full p-3 shadow-2xl">
                            <h1 className="text-4xl text-center font-bold text-purple-500 font-sans underline">Sign Up!</h1>

                            <form onSubmit={handleToRegister} className="card-body">
                                <div className="form-control">
                                    <input name="name" type="text" placeholder="Last Name" className="border-b-2 font-bold text-sm w-full mt-5 p-2 rounded text-black" required />
                                </div>
                                <div className="form-control">
                                    <input name="photo" type="photo" placeholder="Photo Url" className="border-b-2 font-bold text-sm w-full mt-5 p-2 rounded text-black" required />
                                </div>
                                <div className="form-control">
                                    <input name="email" type="email" placeholder="Your Email" className="border-b-2 font-bold text-sm w-full mt-5 p-2 rounded text-black" required />
                                </div>
                                <div className="form-control">
                                    <input name="password" type="password" placeholder="password" className="border-b-2 font-bold text-sm w-full mt-5 rounded p-2 text-black" required />
                                </div>
                                <div className="form-control">
                                    <input name="password" type="password" placeholder="confirm password" className="border-b-2 font-bold text-sm w-full mt-5 rounded p-2 text-black" required />
                                </div>

                                <div className="form-control mt-6">
                                    <button className="bg-purple-500 text-black w-full mt-5 rounded-full p-3">Sign Up</button>
                                    <div className="flex flex-col justify-center items-center gap-3">
                                        <p className="font-bold text-xl mt-5 text-purple-500">Or you can sign up using</p>
                                        <div className="flex gap-5">
                                            <button onClick={handleToGoogleLogin}><FcGoogle className="w-full h-[50px]"></FcGoogle></button>
                                            <button onClick={handleToGithubLogin}><FaGithub className="w-full h-[50px]"></FaGithub></button>
                                        </div>
                                    </div>
                                    <p className="mt-5 text-center text-purple-500 text-xl">Already have an account? <Link to="/login" className="underline text-blue-500 text-xl font-bold">Login</Link></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Register;