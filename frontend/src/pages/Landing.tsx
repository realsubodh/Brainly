import backgroundImage from '../assets/background.png';
import LoginBtn from '../components/loginbtn';
import { Navbar } from '../components/navbar';
import RegisterBtn from '../components/registerbtn';

export const LandingPage = () => {
    return (
        <div 
            className="bg-cover bg-center h-screen flex flex-col justify-between items-center" 
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >   <div className='relative top-6 '>
               <Navbar />
            </div>
            
            <div className="w-4xl h-fit  justify-center flex items-center flex-col text-center ">
                <h1 className='text-8xl text-white font-medium'>Save <span className='text-amber-400'>Everything</span> That Inspires You <span className='text-black'>✺</span></h1>
                <h5 className='text-2xl text-black font-medium mt-4'>Brainly transforms how you connect with Information</h5>
                <div className='flex flex-row mt-7 w-[25rem] justify-between'>
                <LoginBtn/>
                <RegisterBtn/>
            </div>
            </div>
            
            <div className='h-15 items-center flex align-middle text-md font-medium text-gray-700 '>
                <p> <span className='font-extrabold'>&copy;</span> {new Date().getFullYear()} Subodh Singh ● All rights reserved</p>
            </div>
        
        </div>
    );
};