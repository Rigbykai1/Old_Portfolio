import { useState } from "react";
import MobileBar from "./MobileBar";
import BigScreenBar from "./BigScreenBar";

const SideBar = () => {
    const [screenWidth, setScreenWidth] = useState(window.screen.width)
    let isMobile = screenWidth < 768;

    window.addEventListener('resize', () => {
        setScreenWidth(window.screen.width)
        isMobile = screenWidth < 768;
    })
    return (
        <>
            {isMobile ? <MobileBar /> : <BigScreenBar />}
        </>
    )
}

export default SideBar