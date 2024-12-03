import ProyectoPage from "../ProyectoTemplate/ProyectoPage";
import { FaPython } from "react-icons/fa";
const CryptWord = () => {
    const funcionalidades = {
        funcionalidad1: {
            titulo: 'Cifrado AES con Derivación de Clave PBKDF2',
            descripcion: 'Utiliza el algoritmo AES en modo CBC, derivando la clave mediante PBKDF2 para mayor seguridad, con una sal única y múltiples iteraciones.'
        },
        funcionalidad2: {
            titulo: 'Interfaz de Línea de Comandos Mejorada',
            descripcion: 'Interactúa mediante un menú de opciones que permite encriptar y desencriptar contraseñas con facilidad, ingresando una contraseña y un PIN de manera sencilla.'
        },
        funcionalidad3: {
            titulo: 'Integridad mediante HMAC',
            descripcion: 'Incorpora HMAC basado en SHA-256 para asegurar la integridad de los datos cifrados, verificando que no han sido modificados antes de ser desencriptados.'
        },
        funcionalidad4: {
            titulo: 'Verificación y Manejo de Errores Mejorado',
            descripcion: 'Se verifica la autenticidad de los datos cifrados y se maneja la validación del PIN de forma robusta, lanzando advertencias en caso de PIN incorrecto o datos alterados.'
        },
        funcionalidad5: {
            titulo: 'Generación de Sal y IV Aleatorios',
            descripcion: 'Cada vez que se encripta una contraseña, se generan de manera segura una sal y un IV aleatorios, lo que aumenta la resistencia contra ataques de diccionario y rainbow tables.'
        }

    }

    const proyectoInfo = {
        titulo: 'CryptWord',
        imageUrl: 'https://raw.githubusercontent.com/Rigbykai1/Portfolio/master/src/Sources/CryptWord/CmdShot.jpg',
        sourceLink: 'https://github.com/Rigbykai1/Portfolio/blob/3beb2fbd6629e8f27f4fa3bfc1a013ab768b81be/src/Sources/Downloads/CryptWord.zip',
        gitHubLink: 'https://github.com/Rigbykai1/CryptWord',
        youtubeLink: 'https://www.youtube.com/watch?v=mUpBkaswA4I',
        primerParrafo: 'Este proyecto es una aplicación sencilla que permite cifrar y descifrar contraseñas usando un PIN. Utiliza técnicas avanzadas de criptografía para asegurar que tus contraseñas permanezcan protegidas.',
        segundoParrafo: 'Este proyecto es ideal para aquellos interesados en aprender sobre criptografía y seguridad informática. Explora cómo proteger tus datos personales con técnicas de cifrado modernas.',
    }
    const tecnologias = {
        tecnologia1: { titulo: 'Python', icono: <FaPython className="size-8" />, color: "hover:text-yellow-400", href: "https://www.python.org/" },
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

export default CryptWord