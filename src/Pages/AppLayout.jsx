import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from "../Components/SideBar/SideBar"

const AppLayout = () => {
    return (
        <div className="min-h-screen flex flex-col md:flex-row overflow-auto p-2 gap-2 items-center" style={{
            backgroundImage: 'url(https://raw.githubusercontent.com/Rigbykai1/Portfolio/master/src/Sources/Backgrounds/japaneseBackGround.jpg)',
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
        }}>
            <SideBar />
            <div className='w-full h-[88vh] mb-12 p-4 bg-white/10 rounded-xl backdrop-blur-sm md:h-[97vh] overflow-y-auto md:p-4 md:m-auto'>
                <Outlet />
            </div>
        </div>
    );
};

export default AppLayout;
