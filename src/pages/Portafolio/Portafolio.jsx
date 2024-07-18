import React from 'react'
import { NavBar } from '../../components/Navbar/NavBar'

import { TaskCard } from '../../components/TaskCard/TaskCard'
import '../taskCardGrid.css'

export const Portafolio = () => {

  const data = (id, titulo, descripcion, imagenUrl, habilidades, link, clase) => (
    <TaskCard
      key={id}
      titulo={titulo}
      descripcion={descripcion}
      imagenUrl={imagenUrl}
      habilidades={habilidades}
      link={link}
    />
  );

  const tareasB1 = [
    {
      id: 1,
      titulo: 'Páginas HTML',
      descripcion: 'Creación de página web con 3 vistas "Gustos, biografía y propuesta de rediseño de Kinal academy".',
      imagenUrl: 'https://media.discordapp.net/attachments/1263302863581483128/1263303403413573633/paginas-web.png?ex=6699be7a&is=66986cfa&hm=42187204588320a84bcd0d7a9616cf047cd6755e162590b26b22fc943892f685&=&format=webp&quality=lossless&width=1316&height=662',
      habilidades: 'Más habilidad en manejo de HTML Y CSS.',
      link: 'https://github.com/dabad-2021374/Paginas-web.git',
      clase: 'taller'
    },
    {
      id: 2,
      titulo: 'Adopción de mascotas',
      descripcion: 'Creación de backend de un sistema de adopción de mascotas.',
      imagenUrl: 'https://media.discordapp.net/attachments/1263302863581483128/1263303402721509396/laboratorio2-adopcion-mascotas.png?ex=6699be7a&is=66986cfa&hm=b1af94a2ac8b6b334f7a78bd1a5c2e8d5db83d570fc1fd171eac66a462f61fd2&=&format=webp&quality=lossless&width=1155&height=662',
      habilidades: 'Más habilidad en manejo de NodeJs, Express y MongoDB.',
      link: 'https://github.com/dabad-2021374/AdopcionMascotas.git'
    },
    {
      id: 3,
      titulo: 'COPEREX',
      descripcion: 'Creación de Backend para la gestión de una empresa llamada COPEREX.',
      imagenUrl: 'https://media.discordapp.net/attachments/1263302863581483128/1263303402989813852/laboratorio3-gestor-empresas.png?ex=6699be7a&is=66986cfa&hm=f38b9ddf39a2d23421ed629fddb00dd3049c50be383b77b5c504e60a16185e37&=&format=webp&quality=lossless&width=1163&height=662',
      habilidades: 'Más habilidad en manejo de NodeJs, Express y MongoDB.',
      link: 'https://github.com/dabad-2021374/GestorDeEmpresas.git'
    },
    {
      id: 4,
      titulo: 'Proyecto Final Bim. I',
      descripcion: 'Entrega de proyecto bimestral "Ventas online" terminado.',
      imagenUrl: 'https://media.discordapp.net/attachments/1263302863581483128/1263303404915265559/proyecto-final-terminado.png?ex=6699be7a&is=66986cfa&hm=4acb306cd5411ba739c8a449914a5d1c605db243532c9e856e3e7fd9f4266a6a&=&format=webp&quality=lossless&width=1156&height=662',
      habilidades: 'Más habilidad en manejo de NodeJs, Express y MongoDB.',
      link: 'https://github.com/dabad-2021374/Proyecto-final-registro-de-ventas/tree/proyectoTerminado'
    },
    {
      id: 5,
      titulo: 'Biblioteca',
      descripcion: 'PMA donde se entrego backend para una aplicación para gestionar una biblioteca',
      imagenUrl: 'https://media.discordapp.net/attachments/1263302863581483128/1263303403795382343/PMA-proyecto-biblioteca.png?ex=6699be7a&is=66986cfa&hm=0df993778336c27fa144495470d21b0e81816e0503289379e5b340f66d41672e&=&format=webp&quality=lossless&width=1156&height=662',
      habilidades: 'Más habilidad en manejo de NodeJs, Express y MongoDB.',
      link: 'https://github.com/dabad-2021374/PMA-Biblioteca.git'
    },{
      id: 6,
      titulo: 'Agenda web',
      descripcion: 'Agenda web de contactos hecha con Javascript, HTML y CSS.',
      imagenUrl: 'https://media.discordapp.net/attachments/1263302863581483128/1263303401710682122/agenda-web.png?ex=6699be7a&is=66986cfa&hm=8aeb1e1174a92f44bc3cf316ff2a4137885d514806fa6fb5c0e436dbdd6c9294&=&format=webp&quality=lossless&width=1325&height=662',
      habilidades: 'Más habilidad en manejo de funciones en Javascript',
      link: 'https://github.com/dabad-2021374/Agenda-web.git'
    },
    {
      id: 7,
      titulo: 'Control académico',
      descripcion: 'Backend en nodeJs sobre una aplicación de control académico',
      imagenUrl: 'https://media.discordapp.net/attachments/1263302863581483128/1263303401991569490/control-academico.png?ex=6699be7a&is=66986cfa&hm=b91f321b221950e4fbe525a52de0a27af9fa1d6771b9fb379704c0dd6ece64c2&=&format=webp&quality=lossless&width=1081&height=662',
      habilidades: 'Se desarrollaron las habilidades en tecnologías como: NodeJs, MongoDB, ExpressJs, ',
      link: 'https://github.com/dabad-2021374/Control-Academico.git'
    },
    {
      id: 8,
      titulo: 'Gestor de opiniones',
      descripcion: 'Backend en nodeJs sobre una aplicación de gestor de opiniones.',
      imagenUrl: 'https://media.discordapp.net/attachments/1263302863581483128/1263303402407071895/gestor_de_opiniones.png?ex=6699be7a&is=66986cfa&hm=a008c0511aa7dd3545eff9325ae18666952acef991f3a7b0335c1a08be3f593d&=&format=webp&quality=lossless&width=1155&height=662',
      habilidades: 'Se desarrollaron las habilidades en tecnologías como: NodeJs, MongoDB, ExpressJs, ',
      link: 'https://github.com/dabad-2021374/PSGestorDeOpiniones.git'
    },
    {
      id: 9,
      titulo: 'Proyecto grupal',
      imagenUrl: 'https://media.discordapp.net/attachments/1263302863581483128/1263303404550094980/proyecto-almacenadora.png?ex=6699be7a&is=66986cfa&hm=60ece3c367e1000ec2d89eaa623750aa4cfd55da98023b87dcea0783e7224b9b&=&format=webp&quality=lossless&width=1320&height=662',
      descripcion: 'Desarrollo Backend y Frontend de aplicación web "Almacenadora"',
      habilidades: 'Más conocimiento en la librería React.',
      link: 'https://github.com/Grupo-7-IN6AM/AlmacenadoraIN6AM-G7-React',
    },
    {
      id: 10,
      titulo: 'Tonys Kinal',
      imagenUrl: 'https://media.discordapp.net/attachments/1263302863581483128/1263303438356320329/TonysKinal.png?ex=6699be82&is=66986d02&hm=27b3ef9fa8f098073a31da3d079899069ba4409317f0ab1a28f381898517653d&=&format=webp&quality=lossless&width=1177&height=662',
      descripcion: 'Proyecto en JavaEE para la gestión de cafetería del coelegio',
      habilidades: 'Más conocimiento en JavaEE.',
      link: 'https://github.com/dabad-2021374/TonysKinal.git',
    },
    {
      id: 11,
      titulo: 'ServD',
      imagenUrl: 'https://media.discordapp.net/attachments/1263302863581483128/1263303438356320329/TonysKinal.png?ex=6699be82&is=66986d02&hm=27b3ef9fa8f098073a31da3d079899069ba4409317f0ab1a28f381898517653d&=&format=webp&quality=lossless&width=1177&height=662',
      descripcion: 'Proyecto en JavaSS para la gestión de cafetería del colegio',
      habilidades: 'Más conocimiento en JavaSE',
      link: 'https://github.com/dabad-2021374/ServD.git',
    },
    {
      id: 12,
      titulo: 'Calculadora',
      imagenUrl: 'https://media.discordapp.net/attachments/1263302863581483128/1263361358653554768/image.png?ex=6699f474&is=6698a2f4&hm=f2430ea62c1b834304be06aa3df5f097339e0b973c94ab97b03788b109be9b60&=&format=webp&quality=lossless&width=522&height=662',
      descripcion: 'Calculadora realizada en JavaEE',
      habilidades: 'Más conocimiento en JavaEE y JavaFx',
      link: 'https://github.com/dabad-2021374/Calculadora-JavaEE.git',
    }
  ];

  return (
    <div className='scroll'>
      <NavBar />
      <br></br>
      <h2 className='color-text'>PORTAFOLIO</h2>
      <br></br>
      <h3 className='color-text'>6TO PERITO</h3>
      <div className='task-grid'>
        {tareasB1.map((tarea) => data(
          tarea.id,
          tarea.titulo, 
          tarea.descripcion, 
          tarea.imagenUrl, 
          tarea.habilidades, 
          tarea.link, 
          tarea.clase))}
      </div>
    </div>
  )
}
