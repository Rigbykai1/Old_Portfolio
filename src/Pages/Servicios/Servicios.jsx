import React from 'react'
import ghUrl from '../../utils/ghrul'
import ProductCard from '../../Components/Cards/ProductCard'
import ServiciosActions from './ServiciosActions'


const Servicios = () => {

    const servicios = {
        servicio1: {
            title: 'Creación de software personalizado',
            description: 'Se realiza software personalizado, para uso personal, etc.',
            image: ghUrl('/src/Sources/Services/CreaciondeApps.jpeg'),
        },
        servicio2: {
            title: 'Automatización de procesos con Python',
            description: 'Realización de software para tareas repetitivas con Python, deja de hacer esas tediosas tareas tan repetitivas.',
            image: ghUrl('/src/Sources/Services/AutomatizacionPython1.jpeg'),

        },
        servicio3: {
            title: 'Mantenimiento preventivo',
            description: 'Servicio de mantenimiento preventido a equipos de sobremesa.',
            image: ghUrl('/src/Sources/Services/MantenimientoPreventivo.jpeg'),

        }, servicio4: {
            title: 'Presupuesto y montaje de ordenadores',
            description: 'Evita el tedioso proceso de buscar componentes compatibles con la motherboard, y el de que te cobren de más por computadoras pre-armadas, mejor presupuesta la tuya y obten un mejor resultado.',
            image: ghUrl('/src/Sources/Services/PcMasterRace.jpeg'),

        }, servicio5: {
            title: 'Administador de red',
            description: 'Si necesitas establecer reglas de uso para el internet, aumentar la seguridad a nivel inalámbrico y mantener a raya el famoso QR, puedes contactarme.',
            image: ghUrl('/src/Sources/Services/QRrober.jpeg'),
        },
        servicio6: {
            title: 'Soporte remoto ',
            description: 'Configuración, optimización y más, todo a un clic de distancia. Te ofrezco un soporte técnico seguro y efectivo. ¡Disfruta de tus dispositivos sin preocupaciones!"',
            image: ghUrl('/src/Sources/Services/SoporteRemoto.jpeg'),
        },
    }
    return (
        <div className='flex flex-col'>
            <h1 className='text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-red-300 to-rose-800 py-3 animate-fade-down animate-once animate-duration-200 animate-delay-100 animate-normal'>Servicios</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-3 pt-3'>
                {Object.values(servicios).map((servicio, index) => (
                    <ProductCard
                        key={index}
                        productInfo={servicio}
                        index={index}
                        images={[servicio.image]}
                        actions={<ServiciosActions />}
                    />
                ))}
            </div>
        </div>
    )
}

export default Servicios