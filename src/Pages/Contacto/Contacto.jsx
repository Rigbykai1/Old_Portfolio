import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";

const Contacto = () => {
    return (
        <>
            <div className="flex flex-col items-center">
                <div className="text-center">
                    <h1 className="text-5xl lg:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-700 to-rose-300 py-3 animate-fade-down animate-once animate-duration-200 animate-delay-200 animate-normal">Contáctame!</h1>
                    <p className="py-6 sm:text-2xl font-thin animate-fade animate-once animate-duration-200 animate-delay-200 animate-normal text-white">Estoy emocionado por iniciar nuevos proyectos!</p>
                </div>
                <Link to="https://wa.me/message/AG6SGZGHP3L7D1">
                    <FaWhatsapp className="size-20 md:size-48 bg-black/50 rounded-xl p-4 hover:bg-green-400/30 hover:scale-110 text-white" />
                </Link>
            </div>
        </>
    )
}

export default Contacto