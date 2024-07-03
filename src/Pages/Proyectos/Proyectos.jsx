import ProjectCard from './ProjectCard'

const Proyectos = () => {
    return (
        <div className='flex flex-col'>
            <h1 className='text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 to-emerald-800 py-3'>Mis proyecto</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-3 pt-3'>
                <ProjectCard
                    bgImage1="/src/Sources/NotesApp/Muckup1.jpg"
                    bgImage2="/src/Sources/NotesApp/Muckup3.jpg"
                    title="Notes App"
                    description="App de notas creada con react y mongo DB"
                    link="/NotesApp"
                    ButtonText={"Ver proyecto"}
                    id={"NotesApp"}
                />
                <ProjectCard
                    bgImage1="/src/Sources/CryptWord/VisualShot.jpg"
                    bgImage2="/src/Sources/CryptWord/CmdShot.jpg"
                    title="CryptWord"
                    description="Script para encriptar contraseñas realizado con Python."
                    link="/CryptWord"
                    ButtonText="Ver proyecto"
                    id={"CryptWord"}
                />
            </div>
        </div>
    )
}

export default Proyectos