import React from 'react'
import { FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const ServiciosCard = (props) => {
    const { servicio, index } = props
    return (
        <div className={`bg-black/50 max-w-sm px-3 py-4 rounded-lg h-full animate-fade animate-once animate-duration-1000 animate-delay-${index * 100} animate-normal`}>
            <h1 className='pt-2 pb-6 text-3xl font-bold text-rose-300'>{servicio.titulo}</h1>
            <figure>
                <img className='rounded-lg hover:scale-95' src={servicio.imagen} alt="Placeholder" />
            </figure>
            <h2 className='text-2xl font-bold py-3 text-white'>Descripcion</h2>
            <p className='text-white'>{servicio.descripcion}</p>
            <div className='divider' />
            <div className='flex flex-wrap gap-1 justify-center'>
                <Link className='btn btn-ghost hover:text-green-400' to="https://wa.me/message/AG6SGZGHP3L7D1"><FaWhatsapp className='size-10' /></Link>
                <Link className='btn btn-ghost hover:text-rose-400' to="https://www.instagram.com/alliancestech/"><FaInstagram className='size-10' /></Link>
                <Link className='btn btn-ghost hover:text-cyan-400' to="https://www.tiktok.com/@alliancestech?_t=8o78VMhaPTC&_r=1"><FaTiktok className='size-10' /></Link>
            </div>
        </div>
    )
}

export default ServiciosCard