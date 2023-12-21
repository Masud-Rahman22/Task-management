import { Link } from "react-router-dom";
import animation from '../../../public/login/Animation - 1703137312822.json'
import Lottie from "lottie-react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
const Register = () => {
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

                            <form className="card-body">
                                <div className="form-control">
                                    <input name="firstName" type="text" placeholder="First Name" className="border-b-2 font-bold text-sm w-full mt-5 p-2 rounded text-black" required />
                                </div>
                                <div className="form-control">
                                    <input name="lastName" type="text" placeholder="Last Name" className="border-b-2 font-bold text-sm w-full mt-5 p-2 rounded text-black" required />
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
                                            <button><FcGoogle className="w-full h-[50px]"></FcGoogle></button>
                                            <button><FaGithub className="w-full h-[50px]"></FaGithub></button>
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