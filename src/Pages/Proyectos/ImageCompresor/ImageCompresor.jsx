import React from 'react'
import ProyectoPage from '../ProyectoTemplate/ProyectoPage'
import { FaPython } from 'react-icons/fa'

const ImageCompresor = () => {
    const funcionalidades = {
        funcionalidad1: {
            titulo: 'Compresión de Imágenes en Formato JPEG y PNG',
            descripcion: 'Utiliza la biblioteca PIL para abrir imágenes en diversos formatos y comprimirlas en JPEG o PNG, seleccionando automáticamente el formato más adecuado basado en la extensión del archivo de entrada.'
        },
        funcionalidad2: {
            titulo: 'Conversión de Formato',
            descripcion: 'Si la imagen de entrada tiene un canal alfa (transparencia), la aplicación convierte la imagen a formato RGB antes de guardarla como JPEG, garantizando la compatibilidad del formato.'
        },
        funcionalidad3: {
            titulo: 'Compresión por Lotes',
            descripcion: 'Permite comprimir todas las imágenes dentro de un directorio especificado, guardando las imágenes comprimidas en un directorio de salida definido por el usuario.'
        },
        funcionalidad4: {
            titulo: 'Ajuste de Calidad',
            descripcion: 'El usuario puede seleccionar el nivel de calidad de compresión (de 0 a 100) para JPEG, permitiendo un control fino sobre el equilibrio entre calidad de imagen y tamaño del archivo.'
        },
        funcionalidad5: {
            titulo: 'Creación Automática de Directorios',
            descripcion: 'Si el directorio de salida no existe, la aplicación lo crea automáticamente, asegurando que las imágenes comprimidas se guarden sin problemas.'
        },
    }
    const proyectoInfo = {
        titulo: 'Image compresor',
        imageUrl: 'https://raw.githubusercontent.com/Rigbykai1/Portfolio/master/src/Sources/ImageCompresor/CLIShot.jpg',
        sourceLink: 'https://github.com/Rigbykai1/Portfolio/blob/3beb2fbd6629e8f27f4fa3bfc1a013ab768b81be/src/Sources/Downloads/ImageCompresor.zip',
        gitHubLink: 'https://github.com/Rigbykai1/ImageCompresor',
        youtubeLink: 'https://youtu.be/EH5Q1F9WCQQ',
        primerParrafo: 'Esta aplicación de compresión de imágenes es ideal para aquellos que necesitan gestionar grandes cantidades de imágenes, como fotógrafos, diseñadores web y desarrolladores. Permite comprimir imágenes en formato PNG o JPEG, reduciendo su tamaño sin comprometer significativamente la calidad visual. Gracias a la flexibilidad de Python y la poderosa biblioteca PIL, la aplicación ofrece una solución rápida y eficiente para optimizar imágenes.',
        segundoParrafo: 'Durante el desarrollo de este proyecto, se adquirieron conocimientos valiosos sobre manipulación de imágenes en Python, manejo de archivos y optimización de almacenamiento. Este proyecto es un excelente ejemplo de cómo las bibliotecas de Python pueden facilitar la creación de herramientas prácticas y efectivas para el manejo de datos multimedia.',
    }
    const tecnologias = {
        tecnologia1: { titulo: 'Python', icono: <FaPython className="size-8" />, color: "hover:text-yellow-400", href: "https://www.python.org/" },
    }
    return (
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
    )
}

export default ImageCompresor