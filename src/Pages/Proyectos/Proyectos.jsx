import ghUrl from '../../utils/ghrul'
import ProductCard from '../../Components/Cards/ProductCard'
import { Link } from 'react-router-dom'

const Proyectos = () => {
    const projectsInfo = {
        Card1: {
            Image1: ghUrl("/src/Sources/NotesApp/Muckup1.jpg"),
            Image2: ghUrl("/src/Sources/NotesApp/Muckup3.jpg"),
            title: 'Notes App',
            description: 'App de notas creada con React y mongo DB',
            link: '/NotesApp',
            action: 'Ver proyecto'
        },
        Card2: {
            Image1: ghUrl("/src/Sources/CryptWord/VisualShot.jpg"),
            Image2: ghUrl("/src/Sources/CryptWord/CmdShot.jpg"),
            title: 'CryptWord',
            description: 'Script para encriptar contraseñas realizado con Python.',
            link: '/CryptWord',
            action: 'Ver proyecto'
        },
        Card3: {
            Image1: ghUrl("/src/Sources/ImageCompresor/CLIShot.jpg"),
            Image2: ghUrl("/src/Sources/ImageCompresor/Comparison.jpg"),
            title: 'Image Compresor',
            description: 'Script para comprimir imágenes en formato PNG y JPEG.',
            link: '/ImageCompresor',
            action: 'Ver proyecto'
        },
        Card4: {
            Image1: ghUrl("/src/Sources/LogMaster/shot1.jpg"),
            Image2: ghUrl("/src/Sources/LogMaster/shot2.jpg"),
            title: 'Log Master',
            description: 'Script spyware para probar vulnerabilidad de Windows.',
            link: '/LogMaster',
            action: 'Ver proyecto'
        },
    }
    const actions = (href, text) => (<Link className="btn btn-success hover:scale-110" to={href}>{text}</Link>)

    return (
        <div className='flex flex-col'>
            <h1 className='text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 to-emerald-800 py-3 animate-fade-down animate-once animate-duration-200 animate-delay-100 animate-normal'>Mis proyecto</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-3 pt-3'>
                {Object.values(projectsInfo).map((projectInfo, index) => (
                    <ProductCard
                        key={index}
                        title={projectInfo.title}
                        description={projectInfo.description}
                        images={[projectInfo.Image1, projectInfo.Image2]}
                        index={index}
                        actions={actions(projectInfo.link, projectInfo.action)}
                    />
                ))}
            </div>
        </div>
    )
}

export default Proyectos