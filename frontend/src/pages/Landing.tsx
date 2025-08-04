import backgroundImage from '../assets/background.png';
import { Navbar } from '../components/navbar';

export const LandingPage = () => {
    return (
        <div 
            className="bg-cover bg-center h-screen flex justify-center" 
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <Navbar/>
        </div>
    );
};