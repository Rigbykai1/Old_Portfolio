import { MdContactMail, MdHomeRepairService } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { Link } from "react-router-dom";

const MobileBar = () => {
    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white/10 py-5 backdrop-blur-lg z-10 md:hidden">
            <div className="flex justify-around text-white">
                <button><Link to="/Contacto" className="flex flex-col items-center">
                    <MdContactMail className="size-6" />
                    <span className="text-center">Contacto</span>
                </Link>
                </button>
                <button><Link to="/Proyectos" className="flex flex-col items-center">
                    <GrProjects className="size-6" />
                    <span className="text-center">Proyectos</span>
                </Link></button>
                <button><Link to="/Servicios" className="flex flex-col items-center">
                    <MdHomeRepairService className="size-6" />
                    <span className="text-center">Servicios</span>
                </Link></button>
                <button>
                    <Link to="/" className="flex flex-col items-center">
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