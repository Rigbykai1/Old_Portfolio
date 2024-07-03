import HabilitiesCard from './HabilitiesCard';
import InteresesCard from './InteresesCard';
import MotivationCard from './MotivationCard';
import TecnologiesCard from './TecnologiesCard';
import UserInfoCard from './UserInfoCard';

const Home = () => {
    return (
        <div className='flex flex-wrap gap-4 justify-center text-white'>
            <UserInfoCard />
            <TecnologiesCard />
            <InteresesCard />
            <HabilitiesCard />
            <MotivationCard />
        </div>
    )
}

export default Home