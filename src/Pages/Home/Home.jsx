import { Link } from 'react-router-dom';
import HabilitiesCard from './HabilitiesCard';
import InteresesCard from './InteresesCard';
import MotivationCard from './MotivationCard';
import TecnologiesCard from './TecnologiesCard';
import UserInfoCard from './UserInfoCard';
import { FaArrowCircleRight } from 'react-icons/fa';

const Home = () => {
    return (
        <div className='flex flex-wrap gap-4 justify-center text-white'>
            <UserInfoCard />
            <TecnologiesCard />
            <InteresesCard />
            <HabilitiesCard />
            <MotivationCard />
            <Link className='btn bg-black/40 rounded-lg h-full max-w-lg hover:scale-105 animate-fade animate-once animate-duration-200 animate-delay-200 animate-normal glass text-3xl font-bold text-cyan-500 p-8' to="/SobreMi">
                Más sobre mí
                <FaArrowCircleRight className='size-12' />
            </Link>
        </div>
    )
}

export default Home