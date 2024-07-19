import React, { useState } from 'react';
import { NavBar } from '../../components/Navbar/NavBar'
import { TaskCard } from '../../components/TaskCard/TaskCard'
import '../taskCardGrid.css'

export const Portafolio = () => {
  const [filterOption, setFilterOption] = useState('');

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
      importancia: 'media',
      año: '6to'
    },
    {
      id: 2,
      titulo: 'Adopción de mascotas',
      descripcion: 'Creación de backend de un sistema de adopción de mascotas.',
      imagenUrl: 'https://media.discordapp.net/attachments/1263302863581483128/1263303402721509396/laboratorio2-adopcion-mascotas.png?ex=6699be7a&is=66986cfa&hm=b1af94a2ac8b6b334f7a78bd1a5c2e8d5db83d570fc1fd171eac66a462f61fd2&=&format=webp&quality=lossless&width=1155&height=662',
      habilidades: 'Más habilidad en manejo de NodeJs, Express y MongoDB.',
      link: 'https://github.com/dabad-2021374/AdopcionMascotas.git',
      importancia: 'baja',
      año: '6to'
    },
    {
      id: 3,
      titulo: 'COPEREX',
      descripcion: 'Creación de Backend para la gestión de una empresa llamada COPEREX.',
      imagenUrl: 'https://media.discordapp.net/attachments/1263302863581483128/1263303402989813852/laboratorio3-gestor-empresas.png?ex=6699be7a&is=66986cfa&hm=f38b9ddf39a2d23421ed629fddb00dd3049c50be383b77b5c504e60a16185e37&=&format=webp&quality=lossless&width=1163&height=662',
      habilidades: 'Más habilidad en manejo de NodeJs, Express y MongoDB.',
      link: 'https://github.com/dabad-2021374/GestorDeEmpresas.git',
      importancia: 'media',
      año: '6to'
    },
    {
      id: 4,
      titulo: "Ventas online",
      descripcion: 'Entrega de proyecto bimestral "Ventas online" terminado.',
      imagenUrl: 'https://media.discordapp.net/attachments/1263302863581483128/1263303404915265559/proyecto-final-terminado.png?ex=6699be7a&is=66986cfa&hm=4acb306cd5411ba739c8a449914a5d1c605db243532c9e856e3e7fd9f4266a6a&=&format=webp&quality=lossless&width=1156&height=662',
      habilidades: 'Más habilidad en manejo de NodeJs, Express y MongoDB.',
      link: 'https://github.com/dabad-2021374/Proyecto-final-registro-de-ventas/tree/proyectoTerminado',
      importancia: 'media',
      año: '6to'
    },
    {
      id: 5,
      titulo: 'Biblioteca',
      descripcion: 'PMA donde se entrego backend para una aplicación para gestionar una biblioteca',
      imagenUrl: 'https://media.discordapp.net/attachments/1263302863581483128/1263303403795382343/PMA-proyecto-biblioteca.png?ex=6699be7a&is=66986cfa&hm=0df993778336c27fa144495470d21b0e81816e0503289379e5b340f66d41672e&=&format=webp&quality=lossless&width=1156&height=662',
      habilidades: 'Más habilidad en manejo de NodeJs, Express y MongoDB.',
      link: 'https://github.com/dabad-2021374/PMA-Biblioteca.git',
      importancia: 'baja',
      año: '6to'
    }, {
      id: 6,
      titulo: 'Agenda contactos',
      descripcion: 'Agenda web de contactos hecha con Javascript, HTML y CSS.',
      imagenUrl: 'https://media.discordapp.net/attachments/1263302863581483128/1263303401710682122/agenda-web.png?ex=6699be7a&is=66986cfa&hm=8aeb1e1174a92f44bc3cf316ff2a4137885d514806fa6fb5c0e436dbdd6c9294&=&format=webp&quality=lossless&width=1325&height=662',
      habilidades: 'Más habilidad en manejo de funciones en Javascript',
      link: 'https://github.com/dabad-2021374/Agenda-web.git',
      importancia: 'alta',
      año: '6to'
    },
    {
      id: 7,
      titulo: 'Control académico',
      descripcion: 'Backend en nodeJs sobre una aplicación de control académico',
      imagenUrl: 'https://media.discordapp.net/attachments/1263302863581483128/1263303401991569490/control-academico.png?ex=6699be7a&is=66986cfa&hm=b91f321b221950e4fbe525a52de0a27af9fa1d6771b9fb379704c0dd6ece64c2&=&format=webp&quality=lossless&width=1081&height=662',
      habilidades: 'Se desarrollaron las habilidades en tecnologías como: NodeJs, MongoDB, ExpressJs, ',
      link: 'https://github.com/dabad-2021374/Control-Academico.git',
      importancia: 'baja',
      año: '6to'
    },
    {
      id: 8,
      titulo: 'Gestor de opiniones',
      descripcion: 'Backend en nodeJs sobre una aplicación de gestor de opiniones.',
      imagenUrl: 'https://media.discordapp.net/attachments/1263302863581483128/1263303402407071895/gestor_de_opiniones.png?ex=6699be7a&is=66986cfa&hm=a008c0511aa7dd3545eff9325ae18666952acef991f3a7b0335c1a08be3f593d&=&format=webp&quality=lossless&width=1155&height=662',
      habilidades: 'Se desarrollaron las habilidades en tecnologías como: NodeJs, MongoDB, ExpressJs, ',
      link: 'https://github.com/dabad-2021374/PSGestorDeOpiniones.git',
      importancia: 'baja',
      año: '6to'
    },
    {
      id: 9,
      titulo: 'Agenda tareas',
      imagenUrl: 'https://media.discordapp.net/attachments/1263302863581483128/1263303404550094980/proyecto-almacenadora.png?ex=6699be7a&is=66986cfa&hm=60ece3c367e1000ec2d89eaa623750aa4cfd55da98023b87dcea0783e7224b9b&=&format=webp&quality=lossless&width=1320&height=662',
      descripcion: 'Desarrollo Backend y Frontend de aplicación web "Almacenadora"',
      habilidades: 'Más conocimiento en la librería React.',
      link: 'https://github.com/Grupo-7-IN6AM/AlmacenadoraIN6AM-G7-React',
      importancia: 'alta',
      año: '6to'
    },
    {
      id: 10,
      titulo: 'Tonys Kinal',
      imagenUrl: 'https://media.discordapp.net/attachments/1263302863581483128/1263303438356320329/TonysKinal.png?ex=6699be82&is=66986d02&hm=27b3ef9fa8f098073a31da3d079899069ba4409317f0ab1a28f381898517653d&=&format=webp&quality=lossless&width=1177&height=662',
      descripcion: 'Proyecto en JavaEE para la gestión de cafetería del coelegio',
      habilidades: 'Más conocimiento en JavaEE.',
      link: 'https://github.com/dabad-2021374/TonysKinal.git',
      importancia: 'alta',
      año: '5to'
    },
    {
      id: 11,
      titulo: 'ServD',
      imagenUrl: 'https://media.discordapp.net/attachments/1263302863581483128/1263674648768548958/ccfb005a-44e4-4226-81cc-4881eeb308a5.png?ex=669b183a&is=6699c6ba&hm=117de5bc6619ff4caa47626f3aca803811c82cfd98f77f5ad5610617bbb96d7f&=&format=webp&quality=lossless&width=1231&height=662',
      descripcion: 'Proyecto en JavaSS para la gestión de cafetería del colegio',
      habilidades: 'Más conocimiento en JavaSE',
      link: 'https://github.com/dabad-2021374/ServD-2023.git',
      importancia: 'alta',
      año: '5to'
    },
    {
      id: 12,
      titulo: 'Calculadora',
      imagenUrl: 'https://media.discordapp.net/attachments/1263302863581483128/1263361358653554768/image.png?ex=6699f474&is=6698a2f4&hm=f2430ea62c1b834304be06aa3df5f097339e0b973c94ab97b03788b109be9b60&=&format=webp&quality=lossless&width=522&height=662',
      descripcion: 'Calculadora realizada en JavaEE',
      habilidades: 'Más conocimiento en JavaEE y JavaFx',
      link: 'https://github.com/dabad-2021374/Calculadora-JavaEE.git',
      importancia: 'media',
      año: '5to'
    },
    {
      id: 13,
      titulo: 'Veterinaria',
      imagenUrl: 'https://media.discordapp.net/attachments/1263302863581483128/1263740230033215499/image.png?ex=669b554d&is=669a03cd&hm=3dd580dd986360e779a0534d3af75f1881b43ef2850c53ad3d12a97f5d06d879&=&format=webp&quality=lossless&width=871&height=662',
      descripcion: 'Administracion de veterinaria con JavaSwing',
      habilidades: 'Más conocimiento en JavaSwing',
      link: 'https://github.com/dabad-2021374/Veterinaria-JavaSwing-2022.git',
      importancia: 'media',
      año: '4to'
    }
  ];

  const handleFilterChange = (e) => {
    setFilterOption(e.target.value);
  };

  const filteredProyects = tareasB1.filter((tarea) => {
    if (filterOption === '') {
      return true;
    }
    const [importancia, año] = filterOption.split('-');
    return (importancia ? tarea.importancia === importancia : true) &&
           (año ? tarea.año === año : true);
  });

  return (
    <div className='scroll'>
      <NavBar />
      <br />
      <h1 className='text-contact-main-primary'>
        Portafolio de<span className="highlight"> proyectos</span>
      </h1>
      <br />
      <div className="sort-container">
        <select id="sort" className="sort-select" value={filterOption} onChange={handleFilterChange}>
          <option value="">Todos:</option>
          <option value="alta-">Importancia: Alta</option>
          <option value="media-">Importancia: Media</option>
          <option value="baja-">Importancia: Baja</option>
          <option value="-6to">6to grado</option>
          <option value="-5to">5to grado</option>
          <option value="-4to">4to grado</option>
        </select>
      </div>
      <div className='task-grid'>
        {filteredProyects.map((tarea) => data(
          tarea.id,
          tarea.titulo,
          tarea.descripcion,
          tarea.imagenUrl,
          tarea.habilidades,
          tarea.link,
          tarea.clase))}
      </div>
    </div>
  );
};
