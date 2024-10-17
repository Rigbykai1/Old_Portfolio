import ghUrl from '../../utils/ghrul'
import ProductCard from '../../Components/Cards/ProductCard'
import { Link } from 'react-router-dom'

const Proyectos = () => {
    const projectsInfo = {
        Card1: {
            bgImage1: ghUrl("/src/Sources/NotesApp/Muckup1.jpg"),
            bgImage2: ghUrl("/src/Sources/NotesApp/Muckup3.jpg"),
            title: 'Notes App',
            description: 'App de notas creada con React y mongo DB',
            link: '/NotesApp',
            ButtonText: 'Ver proyecto'
        },
        Card2: {
            bgImage1: ghUrl("/src/Sources/CryptWord/VisualShot.jpg"),
            bgImage2: ghUrl("/src/Sources/CryptWord/CmdShot.jpg"),
            title: 'CryptWord',
            description: 'Script para encriptar contraseñas realizado con Python.',
            link: '/CryptWord',
            ButtonText: 'Ver proyecto'
        },
        Card3: {
            bgImage1: ghUrl("/src/Sources/ImageCompresor/CLIShot.jpg"),
            bgImage2: ghUrl("/src/Sources/ImageCompresor/Comparison.jpg"),
            title: 'Image Compresor',
            description: 'Script para comprimir imágenes en formato PNG y JPEG.',
            link: '/ImageCompresor',
            ButtonText: 'Ver proyecto'
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
                        productInfo={projectInfo}
                        index={index}
                        images={[projectInfo.bgImage1, projectInfo.bgImage2]}
                        actions={actions(projectInfo.link, projectInfo.ButtonText)}
                    />
                ))}
            </div>
        </div>
    )
}

export default Proyectos