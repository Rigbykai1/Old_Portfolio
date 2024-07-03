import { FaDownload, FaGithub, FaYoutube } from "react-icons/fa";

const ProyectoPage = (props) => {
    const { proyectoInfo, funcionalidades, tecnologias } = props;
    return (
        <>
            <h1 className='text-5xl font-bold text-center p-3'>Datos del proyecto</h1>
            <h3 className='text-3xl font-bold text-center p-4 text-white'>{proyectoInfo.titulo}</h3>
            <div className='grid grid-cols-1 xl:grid-cols-2 gap-3 justify-items-center'>
                <div className="flex flex-row">
                    <div className="py-1 space-y-1 flex flex-col justify-around px-1">
                        <a className="btn btn-outline btn-success" href={proyectoInfo.sourceLink}><FaDownload /></a>
                        <a className="btn btn-outline btn-neutral" href={proyectoInfo.gitHubLink}><FaGithub /></a>
                        <a className="btn btn-outline btn-error" href={proyectoInfo.youtubeLink}><FaYoutube /></a>
                    </div>
                    <figure>
                        <img src={proyectoInfo.imageUrl} className="size-full rounded-xl shadow-xl" />
                    </figure>
                </div>
                <div className="bg-black/20 rounded-lg p-3">
                    <h1 className="text-2xl font-bold text-start text-white">Descripción</h1>
                    <p className="text-lg font-thin">
                        {proyectoInfo.primerParrafo}
                    </p><br />
                    <p className="text-lg font-thin">
                        {proyectoInfo.segundoParrafo}
                    </p>
                </div>
                <div className="bg-black/70 rounded-lg p-3">
                    <h1 className="text-2xl font-bold text-center text-white">Funcionalidades</h1>
                    {Object.values(funcionalidades).map((funcionalidad, index) => (
                        <div key={index}>
                            <h1 className="text-md font-bold text-start">{funcionalidad.titulo}</h1>
                            <p className="font-thin">{funcionalidad.descripcion}</p>
                        </div>
                    ))}
                </div>
                <div className="bg-black/70 rounded-lg p-3 space-y-3">
                    <h1 className="text-2xl font-bold text-center text-white">Tecnologías</h1>
                    {Object.values(tecnologias).map((tecnologia, index) => (
                        <div key={index} className={`flex items-center space-x-6 ${tecnologia.color} hover:scale-105`}>
                            {tecnologia.icono}
                            <a className="cursor-pointer" href={tecnologia.href}>
                                <h1 className={'text-md font-thin text-start'}>{tecnologia.titulo}</h1>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ProyectoPage