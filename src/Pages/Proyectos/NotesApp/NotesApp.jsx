import ProyectoPage from "../ProyectoPage";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb, SiExpress, SiReactrouter } from "react-icons/si";
const NotesApp = () => {
    const funcionalidades = {
        funcionalidad1: {
            titulo: 'Login en Desarrollo',
            descripcion: 'Actualmente, se está trabajando en una funcionalidad de login para mejorar la seguridad y personalización de la experiencia del usuario.'
        },
        funcionalidad2: {
            titulo: 'Agregar Notas con Marcador de Importancia',
            descripcion: 'Permite a los usuarios agregar notas con un marcador de importancia, facilitando la organización y priorización de la información.'
        },
        funcionalidad3: {
            titulo: 'Filtro de Notas',
            descripcion: 'Incluye un filtro que permite a los usuarios clasificar rápidamente las notas importantes y las que no lo son, optimizando la gestión de sus tareas.'
        },
        funcionalidad4: {
            titulo: 'Integración con MongoDB',
            descripcion: 'La aplicación está conectada a una base de datos MongoDB, asegurando un almacenamiento eficiente y seguro de las notas y otra información relevante.'
        },
    }

    const proyectoInfo = {
        titulo: 'Notas TailWind',
        imageUrl: '/src/Sources/NotesApp/Muckup1.jpg',
        sourceLink: '',
        gitHubLink: 'https://github.com/Rigbykai1/NotasTailWind',
        youtubeLink: '',
        primerParrafo: 'Esta aplicación, desarrollada en React como parte del curso Full Stack Open, ha sido adaptada con estilos de Tailwind y mejorada con funcionalidades adicionales no incluidas en el proyecto original.',
        segundoParrafo: 'Fue un excelente proyecto donde aprendí a manejar código con bases de datos, específicamente usando MongoDB. También adquirí conocimientos valiosos sobre cómo realizar peticiones a la base de datos, habilidades esenciales para resolver problemas y mejorar la vida cotidiana.',
    }
    const tecnologias = {
        tecnologia1: { titulo: 'React', icono: <FaReact className="size-8" />, color: "hover:text-blue-400", href: "https://react.dev/" },
        tecnologia2: { titulo: 'Tailwind CSS', icono: <RiTailwindCssFill className="size-8" />, color: "hover:text-cyan-400", href: "https://tailwindcss.com/" },
        tecnologia3: { titulo: 'MongoDB', icono: <SiMongodb className="size-8" />, color: "hover:text-green-400", href: "https://www.mongodb.com/" },
        tecnologia4: { titulo: 'Node.js', icono: <FaNodeJs className="size-8" />, color: "hover:text-green-700", href: "https://nodejs.org/en" },
        tecnologia5: { titulo: 'Express.js', icono: <SiExpress className="size-8" />, color: "hover:text-blue-700", href: "https://expressjs.com/" },
        tecnologia6: {
            titulo: 'React Router', icono: <SiReactrouter className="size-8" />, color: "hover:text-red-400", href: "https://reactrouter.com/en/main"
        },
    }
    return (
        <>
            <ProyectoPage
                funcionalidades={funcionalidades}
                proyectoInfo={proyectoInfo}
                tecnologias={tecnologias}
            />
        </>
    )
}

export default NotesApp