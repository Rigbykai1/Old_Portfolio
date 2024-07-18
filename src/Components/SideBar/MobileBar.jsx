import { MdContactMail, MdHomeRepairService } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { Link } from "react-router-dom";

const MobileBar = () => {
    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white/10 py-2 backdrop-blur-lg z-10 md:hidden">
            <div className="flex justify-around text-white">
                <button><Link to="/Contacto">
                    <MdContactMail className="size-6" />
                </Link></button>
                <button><Link to="/Proyectos">
                    <GrProjects className="size-6" />
                </Link></button>
                <button><Link to="/Servicios">
                    <MdHomeRepairService className="size-6" />
                </Link></button>
                <button>
                    <Link to="/">
                        <div className="avatar">
                            <div className="size-10 rounded-full">
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