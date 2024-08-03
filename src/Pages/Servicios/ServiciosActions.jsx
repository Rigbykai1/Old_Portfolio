import { FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const ServiciosActions = () => {
    return (
        <>
            <Link className='btn btn-ghost hover:text-green-400' to="https://wa.me/message/AG6SGZGHP3L7D1"><FaWhatsapp className='size-10' /></Link>
            <Link className='btn btn-ghost hover:text-rose-400' to="https://www.instagram.com/alliancestech/"><FaInstagram className='size-10' /></Link>
            <Link className='btn btn-ghost hover:text-cyan-400' to="https://www.tiktok.com/@alliancestech?_t=8o78VMhaPTC&_r=1"><FaTiktok className='size-10' /></Link>
        </>
    )
}

export default ServiciosActions