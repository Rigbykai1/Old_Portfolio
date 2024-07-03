import { useState } from "react";
import MobileBar from "./SideBar/MobileBar";
import BigScreenBar from "./SideBar/BigScreenBar";

const SideBar = () => {
    const [screenWidth, setScreenWidth] = useState(window.screen.width)
    let isMobile = screenWidth <= 768;

    window.addEventListener('resize', () => {
        setScreenWidth(window.screen.width)
        isMobile = screenWidth <= 768;
    })
    return (
        <>
            {isMobile ? <MobileBar /> : <BigScreenBar />}
        </>
    )
}

export default SideBar