import ProyectoPage from "../ProyectoTemplate/ProyectoPage";
import { FaPython } from "react-icons/fa";

const PasswordGen = () => {
    const funcionalidades = {
        funcionalidad1: {
            titulo: 'Generación de Contraseña Segura',
            descripcion: 'Genera una contraseña segura combinando letras, números y caracteres especiales, asegurando una alta entropía.'
        },
        funcionalidad2: {
            titulo: 'Selección de Longitud de Contraseña',
            descripcion: 'Permite al usuario especificar la longitud deseada de la contraseña, ofreciendo flexibilidad según las necesidades de seguridad.'
        },
        funcionalidad3: {
            titulo: 'Validación de Entrada de Usuario',
            descripcion: 'Valida que la entrada del usuario para la longitud de la contraseña sea un número entero, manejando errores de entrada no numérica.'
        },
        funcionalidad4: {
            titulo: 'Copia Automática al Portapapeles',
            descripcion: 'Copia automáticamente la contraseña generada al portapapeles del sistema, facilitando su uso inmediato en otras aplicaciones.'
        },
        funcionalidad5: {
            titulo: 'Interfaz de Línea de Comandos',
            descripcion: 'Utiliza una interfaz de línea de comandos simple e interactiva para guiar al usuario a través del proceso de generación de la contraseña.'
        }
    }

    const proyectoInfo = {
        titulo: 'Password Gen',
        imageUrl: 'https://raw.githubusercontent.com/Rigbykai1/Portfolio/master/src/Sources/PasswordGen/shot1.jpg',
        sourceLink: 'https://raw.githubusercontent.com/Rigbykai1/Portfolio/master/src/Sources/Downloads/PasswordGen.zip',
        gitHubLink: 'https://github.com/Rigbykai1/PasswordGen',
        youtubeLink: '',
        primerParrafo: 'Quise realizar este script para crear contraseñas aleatorias con determinada longitud para la creación de mis contraseñas seguras.',
        segundoParrafo: 'Utilicé librerías que ya tiene intregradas Python para facilitar el desarrollo de la misma, se utilizó la librería Pyperclip que si es una librería fuera de Python, pero que cumple la función que necesitamos, que es copiar la contraseña al portapapeles una vez creada.',
    }
    const tecnologias = {
        tecnologia1: { titulo: 'Python', icono: <FaPython className="size-8" />, color: "hover:text-yellow-400", href: "https://react.dev/" },
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

export default PasswordGen