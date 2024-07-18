import React from 'react'

const ProyectoFunctionalities = (props) => {
    const { funcionalidades } = props;

    return (
        <div className="bg-black/70 rounded-lg p-3 w-full xl:max-w-md text-white">
            <h1 className="text-2xl font-bold text-center py-3">Funcionalidades</h1>
            {Object.values(funcionalidades).map((funcionalidad, index) => (
                <div key={index}>
                    <h1 className="text-md font-bold text-start">{funcionalidad.titulo}</h1>
                    <p className="font-thin">{funcionalidad.descripcion}</p>
                </div>
            ))}
        </div>
    )
}

export default ProyectoFunctionalities