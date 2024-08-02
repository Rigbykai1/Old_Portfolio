import ProjectCard from './ProjectCard'
import ghUrl from '../../utils/ghrul'

const Proyectos = () => {
    const cardsInfo = {
        Card1: {
            id: 'NotesApp',
            bgImage1: ghUrl("/src/Sources/NotesApp/Muckup1.jpg"),
            bgImage2: ghUrl("/src/Sources/NotesApp/Muckup3.jpg"),
            title: 'Notes App',
            description: 'App de notas creada con React y mongo DB',
            link: '/NotesApp',
            ButtonText: 'Ver proyecto'
        },
        Card2: {
            id: 'CryptWord',
            bgImage1: ghUrl("/src/Sources/CryptWord/VisualShot.jpg"),
            bgImage2: ghUrl("/src/Sources/CryptWord/CmdShot.jpg"),
            title: 'CryptWord',
            description: 'Script para encriptar contraseñas realizado con Python.',
            link: '/CryptWord',
            ButtonText: 'Ver proyecto'
        },
        Card3: {
            id: 'ImageCompresor',
            bgImage1: ghUrl("/src/Sources/ImageCompresor/CLIShot.jpg"),
            bgImage2: ghUrl("/src/Sources/ImageCompresor/Comparison.jpg"),
            title: 'Image Compresor',
            description: 'Script para comprimir imágenes en formato PNG y JPEG.',
            link: '/ImageCompresor',
            ButtonText: 'Ver proyecto'
        },
        Card4: {
            id: 'PasswordGen',
            bgImage1: ghUrl("/src/Sources/PasswordGen/shot1.jpg"),
            bgImage2: ghUrl("/src/Sources/PasswordGen/shot2.jpg"),
            title: 'Password Gen',
            description: 'Script para crear contraseñas utilizando librerìas preinstaladas de Python.',
            link: '/PasswordGen',
            ButtonText: 'Ver proyecto'
        },
    }

    return (
        <div className='flex flex-col'>
            <h1 className='text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 to-emerald-800 py-3 animate-fade-down animate-once animate-duration-200 animate-delay-100 animate-normal'>Mis proyecto</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-3 pt-3'>
                {Object.values(cardsInfo).map((cardInfo, index) => (
                    <ProjectCard
                        key={cardInfo.id}
                        id={cardInfo.id}
                        bgImage1={cardInfo.bgImage1}
                        bgImage2={cardInfo.bgImage2}
                        title={cardInfo.title}
                        description={cardInfo.description}
                        link={cardInfo.link}
                        ButtonText={cardInfo.ButtonText}
                        index={index}
                    />
                ))}
            </div>
        </div>
    )
}

export default Proyectos