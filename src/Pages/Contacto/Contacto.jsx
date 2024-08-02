import { FaInstagram, FaTiktok, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import ContactoLink from "./ContactoLink";
const Contacto = () => {
    const contactos = {
        whatsapp: {
            icon: <FaWhatsapp className="size-20 md:size-48 bg-black/50 rounded-xl p-4 hover:bg-green-400/30 hover:scale-110 text-white" />,
            link: "https://wa.me/message/AG6SGZGHP3L7D1",
        },
        instagram: {
            icon: <FaInstagram className="size-20 md:size-48 bg-black/50 rounded-xl p-4 hover:bg-gradient-to-tr hover:from-rose-500/30 hover:to-purple-500/30 hover:scale-110 text-white" />,
            link: "https://www.instagram.com/alliancestech/",
        },
        tiktok: {
            icon: <FaTiktok className="size-20 md:size-48 text-white bg-black/50 rounded-xl p-4 hover:bg-gradient-to-tr hover:from-red-500/30 hover:to-cyan-500/30 hover:scale-110" />,
            link: "https://www.tiktok.com/@alliancestech?",
        },
        youtube: {
            icon: <FaYoutube className="size-20 md:size-48 bg-black/50 rounded-xl p-4 hover:bg-red-700/30 hover:scale-110 text-white" />,
            link: "https://www.youtube.com/@Rigbykai1",
        },
        gmail: {
            icon: <SiGmail className="size-20 md:size-48 bg-black/50 rounded-xl p-4 hover:bg-red-600/30 hover:scale-110 text-white" />,
            link: "mailto:jona282_8@hotmail.com",
        },
    };
    return (
        <>
            <div className="flex flex-col items-center">
                <div className="text-center">
                    <h1 className="text-5xl lg:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-700 to-rose-300 py-3 animate-fade-down animate-once animate-duration-200 animate-delay-200 animate-normal">Contáctame!</h1>
                    <p className="py-6 sm:text-2xl font-thin animate-fade animate-once animate-duration-200 animate-delay-200 animate-normal text-white">Estoy emocionado por iniciar nuevos proyectos!</p>
                </div>
                <div className="flex flex-wrap gap-6 justify-center">
                    {
                        Object.values(contactos).map((contacto, index) => (
                            <ContactoLink key={index} contacto={contacto} index={index} />
                        ))
                    }
                </div>

            </div>
        </>
    )
}
export default Contacto