import React from 'react'

const ProyectoTecnologies = (props) => {
    const { tecnologias } = props;
    return (
        <div className="flex flex-col bg-black/70 rounded-lg px-8 py-12 space-y-3 h-full grow self-center place-items-center">
            <h1 className="text-2xl font-bold text-center text-white xl">Tecnologías</h1>
            {Object.values(tecnologias).map((tecnologia, index) => (
                <div key={index} className={`flex items-center space-x-2 ${tecnologia.color} hover:scale-105`}>
                    {tecnologia.icono}
                    <a className="cursor-pointer" href={tecnologia.href}>
                        <h1 className={'text-md font-thin text-start'}>{tecnologia.titulo}</h1>
                    </a>
                </div>
            ))}
        </div>
    )
}

export default ProyectoTecnologies