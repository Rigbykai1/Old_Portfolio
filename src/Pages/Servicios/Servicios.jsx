import React from 'react'
import ServiciosCard from './ServiciosCard'

const Servicios = () => {

    const servicios = {
        servicio1: {
            titulo: 'Creación de software personalizado',
            descripcion: 'Se realiza software personalizado, para uso personal, etc.',
            imagen: 'https://www.studio29webdesign.com/wp-content/uploads/2019/07/custom-app-development-1024x683.jpg',
        },
        servicio2: {
            titulo: 'Automatización de procesos con Python',
            descripcion: 'Realización de software para tareas repetitivas con Python, deja de hacer esas tediosas tareas tan repetitivas.',
            imagen: 'https://i.blogs.es/7e83a8/programar-tareas-en-windows-10/1366_2000.jpg',

        },
        servicio3: {
            titulo: 'Mantenimiento preventivo',
            descripcion: 'Servicio de mantenimiento preventido a equipos con sistemas operativos, Linux, Windows y Android.',
            imagen: 'https://www.caracteristicasdel.com/wp-content/uploads/2021/06/Caracteristicas-del-Mantenimiento-Preventivo.....png',

        }, servicio4: {
            titulo: 'Presupuesto y montaje de ordenadores',
            descripcion: 'Evita el tedioso proceso de buscar componentes compatibles con la motherboard, y el de que te cobren de más por computadoras pre-armadas, mejor presupuesta la tuya y obten un mejor resultado.',
            imagen: 'https://i.pinimg.com/originals/84/b4/2e/84b42e14c1ad235ad481dc46e8ed6201.jpg',

        }
    }

    return (
        <div className='flex flex-wrap justify-center gap-3'>
            <h1 className='text-rose-500 text-6xl font-bold w-full text-center pb-10'>Servicios</h1>
            {Object.values(servicios).map((servicio, index) => (
                <ServiciosCard servicio={servicio} key={index} />
            ))}

        </div>
    )
}

export default Servicios