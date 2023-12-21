import pic1 from '../../../public/employee/brunette-business-woman-with-wavy-long-hair-blue-eyes-stands-holding-notebook-hands.jpg'
import pic2 from '../../../public/employee/businesswoman-posing.jpg'
import pic3 from '../../../public/employee/young-smiling-businesswoman.jpg'
const OurTeam = () => {
    return (
        <div data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
            <div className="flex flex-col items-center justify-center">
                <p className="text-white text-2xl lg:mt-20">Meet Us</p>
                <h1 className="text-purple-500 text-3xl md:text-5xl font-semibold mt-5">Our Awesome Team</h1>
                <p className="text-white font-extralight text-sm md:text-lg mt-5  lg:w-3/4 text-center"><span className='text-purple-500 text-xl'>TaskFlowPortal</span> boasts a dynamic team meticulously dedicated to revolutionizing task management. Our diverse squad of tech enthusiasts, project management gurus, UX/UI wizards, and customer-centric experts collaborates seamlessly to craft an intuitive platform. With an unwavering commitment to user experience, our team synergizes creativity and cutting-edge technology. We thrive on simplifying complexities, offering streamlined solutions for individuals, businesses, and teams worldwide. Through relentless innovation and agile methodologies, TaskFlowPortal's team empowers users with an unparalleled task management experience. Join us on our journey towards enhanced productivity, efficiency, and organizational excellence.</p>
                <button className="btn btn-outline border-white text-white mt-5 hover:bg-orange-400">Read More</button>
            </div>
            <div className='flex flex-col md:flex-row justify-evenly items-center mt-10'>
                <div className="relative flex flex-col text-gray-700  shadow-md w-48 lg:w-60 rounded-xl bg-clip-border">
                    <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg h-52 rounded-full">
                        <img src={pic2} alt="profile-picture" />
                    </div>
                    <div className="p-6 text-center">
                        <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-white">
                            Eve Anderson
                        </h4>
                        <p className="block font-sans text-base antialiased font-medium leading-relaxed text-purple-500 bg-clip-text">
                            CEO
                        </p>
                    </div>
                    <div className="flex justify-center p-6 pt-2 gap-7">
                        <a
                            href="#facebook"
                            className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text"
                        >
                            <i className="fab fa-facebook" aria-hidden="true"></i>
                        </a>
                        <a
                            href="#twitter"
                            className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-gradient-to-tr from-light-blue-600 to-light-blue-400 bg-clip-text"
                        >
                            <i className="fab fa-twitter" aria-hidden="true"></i>
                        </a>
                        <a
                            href="#instagram"
                            className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-gradient-to-tr from-purple-600 to-purple-400 bg-clip-text"
                        >
                            <i className="fab fa-instagram" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
                <div className="relative flex flex-col text-gray-700  shadow-md w-48 lg:w-60 rounded-xl bg-clip-border">
                    <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg h-52 rounded-full bg-clip-border">
                        <img src={pic3} alt="profile-picture" />
                    </div>
                    <div className="p-6 text-center">
                        <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-white">
                            Diana Jones
                        </h4>
                        <p className="block font-sans text-base antialiased font-medium leading-relaxed text-purple-500 bg-clip-text">
                            Visual Effects Artist
                        </p>
                    </div>
                    <div className="flex justify-center p-6 pt-2 gap-7">
                        <a
                            href="#facebook"
                            className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text"
                        >
                            <i className="fab fa-facebook" aria-hidden="true"></i>
                        </a>
                        <a
                            href="#twitter"
                            className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-gradient-to-tr from-light-blue-600 to-light-blue-400 bg-clip-text"
                        >
                            <i className="fab fa-twitter" aria-hidden="true"></i>
                        </a>
                        <a
                            href="#instagram"
                            className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-gradient-to-tr from-purple-600 to-purple-400 bg-clip-text"
                        >
                            <i className="fab fa-instagram" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
                <div className="relative flex flex-col text-gray-700  shadow-md w-48 lg:w-60 rounded-xl bg-clip-border">
                    <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg md:h-52 rounded-full bg-clip-border">
                        <img src={pic1} alt="profile-picture" />
                    </div>
                    <div className="p-6 text-center">
                        <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-white">
                            Jane Davidson
                        </h4>
                        <p className="block font-sans text-base antialiased font-medium leading-relaxed text-purple-500 bg-clip-text">
                            Editor
                        </p>
                    </div>
                    <div className="flex justify-center p-6 pt-2 gap-7">
                        <a
                            href="#facebook"
                            className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text"
                        >
                            <i className="fab fa-facebook" aria-hidden="true"></i>
                        </a>
                        <a
                            href="#twitter"
                            className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-gradient-to-tr from-light-blue-600 to-light-blue-400 bg-clip-text"
                        >
                            <i className="fab fa-twitter" aria-hidden="true"></i>
                        </a>
                        <a
                            href="#instagram"
                            className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-gradient-to-tr from-purple-600 to-purple-400 bg-clip-text"
                        >
                            <i className="fab fa-instagram" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;