import { RiMessage3Fill } from 'react-icons/ri';
import { ImLocation2 } from 'react-icons/Im';
import { BiSolidPhoneCall } from 'react-icons/Bi';

const Contact = () => {
    return (
        <div className='md:mb-20'>
            <div className='mt-32 md:mt-1'>
                <h3 className='text-center text-3xl font-semibold text-white mt-20'>Contact Us</h3>
                <h1 className='text-center text-5xl font-bold text-white mt-7'>Got a Question?</h1>
                <p className='text-center text-2xl font-extralight text-white mt-7'>We would like to talk more about what you need</p>
            </div>
            <div className='flex flex-col md:flex-row items-center justify-around mt-20 gap-5'>
                <div className='flex flex-1 flex-col justify-center items-center'>
                    <ImLocation2 className='w-[50px] h-[50px] mt-8 text-purple-500'></ImLocation2>
                    <div className='text-center'>
                        <h3 className='font-bold text-white text-2xl mt-3'>Address</h3>
                        <p className='text-xl font-extralight text-white mt-3'>Find us at the office</p>
                        <p className='font-medium text-white text-xl mt-3'>16/1 Chashara bongobondhu shorok,<br /> Narayangonj Dhaka</p>
                    </div>
                </div>
                <div className='flex flex-1 flex-col justify-center items-center'>
                    <RiMessage3Fill className='w-[50px] h-[50px] text-purple-500'></RiMessage3Fill>
                    <div className='text-center'>
                        <h3 className='font-bold text-white text-2xl mt-3'>Email</h3>
                        <p className='text-xl font-extralight text-white mt-3'>Send us your feedback</p>
                        <p className='font-medium text-white text-xl mt-3'>masudrhmn6560@gmail.com</p>
                    </div>
                </div>
                <div className='flex flex-1 flex-col justify-center items-center'>
                    <BiSolidPhoneCall className='w-[50px] h-[50px] text-purple-500'></BiSolidPhoneCall>
                    <div className='text-center'>
                        <h3 className='font-bold text-white text-2xl mt-3'>Phone</h3>
                        <p className='text-xl font-extralight text-white mt-3'>Give us a ring</p>
                        <p className='font-medium text-white text-xl mt-3'>+8801850556560</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;