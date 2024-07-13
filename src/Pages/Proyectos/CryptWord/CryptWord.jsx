import ProyectoPage from "../ProyectoTemplate/ProyectoPage";
import { FaPython } from "react-icons/fa";
const CryptWord = () => {
    const funcionalidades = {
        funcionalidad1: {
            titulo: 'Cifrado seguro',
            descripcion: 'Emplea el algoritmo AES con un vector de inicialización (IV) para proteger la información.'
        },
        funcionalidad2: {
            titulo: 'Interfaz de Línea de Comandos',
            descripcion: 'Interactúa fácilmente ingresando tu contraseña y un PIN para el cifrado.'
        },
        funcionalidad3: {
            titulo: 'Portapapeles Temporizado',
            descripcion: 'Las contraseñas se copian al portapapeles y se borran automáticamente después de unos segundos, aumentando la seguridad.'
        },
        funcionalidad4: {
            titulo: 'Verificación del PIN',
            descripcion: 'Se solicita al usuario confirmar su PIN para evitar errores durante el cifrado.'
        },
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
                funcionalidades={funcionalidades}
                proyectoInfo={proyectoInfo}
                tecnologias={tecnologias}
            />
        </>
    )
}

export default CryptWord