import { SiAboutdotme } from "react-icons/si";
import { MdContactMail } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { Link } from "react-router-dom";

const MobileBar = () => {
    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white/10 py-2 backdrop-blur-lg z-10 md:hidden">
            <div className="flex justify-around">
                <button><Link to="/Contacto">
                    <MdContactMail className="w-26" />
                </Link></button>
                <button><Link to="/Proyectos">
                    <GrProjects className="w-26" />
                </Link></button>
                <button><Link to="/SobreMi">
                    <SiAboutdotme className="w-26" />
                </Link></button>
                <button>
                    <Link to="/Home">
                        <div className="avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://avatars.githubusercontent.com/u/129445798?v=4" />
                            </div>
                        </div>
                    </Link>
                </button>
            </div>
        </div >
    )
}

export default MobileBar