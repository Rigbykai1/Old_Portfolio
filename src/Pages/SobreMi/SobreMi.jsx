import React from 'react'
import TimeLineItem from './TimeLineItem'

const SobreMi = () => {
    return (
        <>
            <h1 className='text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-emerald-800 to-emerald-300 py-3'>Mi trayectoria</h1>
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical py-3">
                <TimeLineItem
                    position="start"
                    date="2016"
                    title="Mis inicios"
                    content="
                En este año me introduje por completo en el mundo de la programación por mi padre,
                inicié con cursos de HTML, CSS y JS en SoloLearn, una app para móviles, aprendí las
                bases de la programación web gracias a esos cursos."
                />
                <TimeLineItem
                    position="end"
                    date="2017"
                    title="Cursos de programación"
                    content="
                        Este año decidí inscribirme a tres cursos del campo, uno de programación web donde reforcé lo que sabía de HTML y CSS,
                        en este curso no se le dio mucho énfasis al lenguaje CSS, ya que era un curso básico de mi colegio.
                        Además de eso llevé curso de software de aplicación y bases de datos Access."

                />

                <TimeLineItem
                    position="start"
                    date="2018 - 2021"
                    title="Autodidacta"
                    content="En este año si bien no me dediqué mucho a la programación, concluí mis estudios de secundaria, 
                    acto seguido concursé y aprobé el examen de admisión permitiendome ingresar a la Universidad Nacional para estudiar ingeniería en sistemas."
                />
                <TimeLineItem
                    position="end"
                    date="2022"
                    title="Ingeniería en sistemas"
                    content="En este año llevé un curso de fundamentos de programación con lo cuál tuve que aprender C++, 
                    si bien no profundizamos mucho en el lenguaje me permitió aprender sobre arreglos, matrices, objetos, clases, 
                    entre otras cosas que son necesarias en distintos lenguajes de programación. 
                    A partir de este año mew introduje por completo en el mundo de la programación."
                />  <TimeLineItem
                    position="start"
                    date="2023"
                    title="Desestor"
                    content="Aquí fue cuando me fue mal en matemáticas, por lo que tuve que suspender la carrera, con lo cuál me dediqué a aprender tecnologías. 
                    Entre estas a la que más le dedique horas de estudio y práctica fue React, aprendí las bases de Python también. 
                    Con estos conocimientos me adentré al desarrollo web, realizando distintas aplicaciones, 
                    imcompletas, pero que me ayudaron a entender conceptos que se abarcan a la hora de programar una aplicación web."
                />
            </ul>
        </>
    )
}

export default SobreMi