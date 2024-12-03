import ProyectoPage from "../ProyectoTemplate/ProyectoPage";
import { FaPython } from "react-icons/fa";
const NotesApp = () => {
    const funcionalidades = {
        funcionalidad1: {
            titulo: 'Registro de Teclas en Tiempo Real',
            descripcion: 'El keylogger captura cada tecla presionada por el usuario y registra la información en tiempo real para su posterior análisis.'
        },
        funcionalidad2: {
            titulo: 'Canal Seguro De Envío De Datos',
            descripcion: 'Los datos capturados son almacenados en un archivo de zip, que posteriormente se envían por Telegram.'
        },
        funcionalidad3: {
            titulo: 'Ejecución en Segundo Plano',
            descripcion: 'El programa se ejecuta en segundo plano sin interrumpir las actividades del usuario, simulando cómo operan los keyloggers reales.'
        },
        funcionalidad4: {
            titulo: 'Envío de Registros por Telegram',
            descripcion: 'Incluye una funcionalidad para enviar los registros de teclas por un bot de Telegram.'
        },
    }


    const proyectoInfo = {
        titulo: 'Notas TailWind',
        imageUrl: 'https://raw.githubusercontent.com/Rigbykai1/Portfolio/master/src/Sources/LogMaster/shot1.jpg',
        sourceLink: 'https://github.com/Rigbykai1/Log_master',
        gitHubLink: 'https://github.com/Rigbykai1/Log_master',
        youtubeLink: 'https://www.youtube.com/watch?v=w_KCJRxQpFI',
        primerParrafo: 'Este proyecto, desarrollado en Python, fue creado como parte de mi aprendizaje en ciberseguridad y programación. Implementa un keylogger para demostrar cómo funcionan estas herramientas y cómo los atacantes pueden utilizarlas para capturar información confidencial.',
        segundoParrafo: 'Fue un excelente ejercicio para entender conceptos avanzados, como la captura de entradas del teclado, el registro de datos y su almacenamiento. Además, este proyecto reforzó mi compromiso con el uso responsable de la tecnología y la importancia de proteger la privacidad digital.',

    }
    const tecnologias = {
        tecnologia1: { titulo: 'Python', icono: <FaPython className="size-8" />, color: "hover:text-yellow-400", href: "https://python.org/" },
    }
    return (
        <>
            <ProyectoPage
                titulo={proyectoInfo.titulo}
                imageUrl={proyectoInfo.imageUrl}
                sourceLink={proyectoInfo.sourceLink}
                gitHubLink={proyectoInfo.gitHubLink}
                youtubeLink={proyectoInfo.youtubeLink}
                primerParrafo={proyectoInfo.primerParrafo}
                segundoParrafo={proyectoInfo.segundoParrafo}
                funcionalidades={funcionalidades}
                tecnologias={tecnologias}
            />
        </>
    )
}

export default NotesApp