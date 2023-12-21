import Lottie from 'lottie-react';
import errorAnimation from '../../public/errorpage/Animation - 1703193298275.json'

const ErrorPage = () => {
    return (
        <div className='h-screen flex items-center justify-center'>
            <Lottie animationData={errorAnimation}></Lottie>
        </div>
    );
};

export default ErrorPage;