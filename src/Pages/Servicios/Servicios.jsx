import React from 'react'
import ServiciosCard from './ServiciosCard'
import ghUrl from '../../utils/ghrul'


const Servicios = () => {

    const servicios = {
        servicio1: {
            titulo: 'Creación de software personalizado',
            descripcion: 'Se realiza software personalizado, para uso personal, etc.',
            imagen: ghUrl('/src/Sources/Services/CreaciondeApps.jpeg'),
        },
        servicio2: {
            titulo: 'Automatización de procesos con Python',
            descripcion: 'Realización de software para tareas repetitivas con Python, deja de hacer esas tediosas tareas tan repetitivas.',
            imagen: ghUrl('/src/Sources/Services/AutomatizacionPython1.jpeg'),

        },
        servicio3: {
            titulo: 'Mantenimiento preventivo',
            descripcion: 'Servicio de mantenimiento preventido a equipos de sobremesa.',
            imagen: ghUrl('/src/Sources/Services/MantenimientoPreventivo.jpeg'),

        }, servicio4: {
            titulo: 'Presupuesto y montaje de ordenadores',
            descripcion: 'Evita el tedioso proceso de buscar componentes compatibles con la motherboard, y el de que te cobren de más por computadoras pre-armadas, mejor presupuesta la tuya y obten un mejor resultado.',
            imagen: ghUrl('/src/Sources/Services/PcMasterRace.jpeg'),

        }, servicio5: {
            titulo: 'Administador de red',
            descripcion: 'Si necesitas establecer reglas de uso para el internet, aumentar la seguridad a nivel inalámbrico y mantener a raya el famoso QR, puedes contactarme.',
            imagen: ghUrl('/src/Sources/Services/QRrober.jpeg'),
        },
        servicio6: {
            titulo: 'Soporte remoto ',
            descripcion: 'Configuración, optimización y más, todo a un clic de distancia. Te ofrezco un soporte técnico seguro y efectivo. ¡Disfruta de tus dispositivos sin preocupaciones!"',
            imagen: ghUrl('/src/Sources/Services/SoporteRemoto.jpeg'),
        },
    }
    return (
        <div className='flex flex-wrap justify-center gap-3'>
            <h1 className='text-rose-500 text-6xl font-bold w-full text-center pb-10'>Servicios</h1>
            {Object.values(servicios).map((servicio, index) => (
                <ServiciosCard servicio={servicio} key={index} index={index} />
            ))}
        </div>
    )
}

export default Servicios