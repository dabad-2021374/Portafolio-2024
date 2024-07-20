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
      titulo: 'Mi Voto',
      imagenUrl: 'https://i.ibb.co/qyFLjyW/Dise-o-sin-t-tulo-5.png',
      descripcion: 'Proyecto propuesta para ExpoKinal para sistema de votaciones electorales en Guatemala.',
      habilidades: 'Javascript - NodeJs - Express - React - MongoDB',
      link: 'https://github.com/dabad-2021374/Mi-voto.git',
      importancia: 'alta',
      año: '6to'
    },
    {
      id: 2,
      titulo: 'Zaru Traveling',
      imagenUrl: 'https://i.ibb.co/3hPpq4X/Dise-o-sin-t-tulo-4.png',
      descripcion: 'Proyecto para brindar servicios de hotelería',
      habilidades: 'Javascript - NodeJs - Express - React - MongoDB',
      link: 'https://github.com/dabad-2021374/ServD-2023.git',
      importancia: 'alta',
      año: '6to'
    },
    {
      id: 3,
      titulo: 'Tonys Kinal',
      imagenUrl: 'https://i.ibb.co/qksN4nv/Tonys-Kinal.png',
      descripcion: 'Proyecto en JavaEE para la gestión de cafetería del colegio',
      habilidades: 'JavaEE - JavaFx - MySQL - IReport',
      link: 'https://github.com/dabad-2021374/TonysKinal.git',
      importancia: 'alta',
      año: '5to'
    },
    {
      id: 4,
      titulo: 'ServD',
      imagenUrl: 'https://i.ibb.co/K7xVhtt/ccfb005a-44e4-4226-81cc-4881eeb308a5.png',
      descripcion: 'Proyecto en JavaSE para la gestión de una empresa de servicios',
      habilidades: 'JavaSE - JPA - Hibernate - Bootstrap - Maven',
      link: 'https://github.com/dabad-2021374/ServD-2023.git',
      importancia: 'alta',
      año: '5to'
    },
    {
      id: 5,
      titulo: 'Agenda tareas',
      imagenUrl: 'https://i.ibb.co/VYVwcp0/proyecto-almacenadora.png',
      descripcion: 'Desarrollo Backend y Frontend de aplicación web "Almacenadora"',
      habilidades: 'Javascript - NodeJs - Express - React - MongoDB',
      link: 'https://github.com/Grupo-7-IN6AM/AlmacenadoraIN6AM-G7-React',
      importancia: 'alta',
      año: '6to'
    },
    {
      id: 6,
      titulo: 'Calculadora',
      imagenUrl: 'https://i.ibb.co/CmrStbb/image.png',
      descripcion: 'Calculadora realizada en JavaEE',
      habilidades: 'JavaEE - JavaFx',
      link: 'https://github.com/dabad-2021374/Calculadora-JavaEE.git',
      importancia: 'media',
      año: '5to'
    },
    {
      id: 7,
      titulo: 'Páginas HTML',
      descripcion: 'Creación de página web con 3 vistas "Gustos, biografía y propuesta de rediseño de Kinal academy".',
      imagenUrl: 'https://i.ibb.co/mz2j38f/paginas-web.png',
      habilidades: 'HTML - CSS',
      link: 'https://github.com/dabad-2021374/Paginas-web.git',
      importancia: 'media',
      año: '6to'
    },
    {
      id: 8,
      titulo: 'Agenda contactos',
      descripcion: 'Agenda web de contactos',
      imagenUrl: 'https://i.ibb.co/10TG3N8/agenda-web.png',
      habilidades: 'Javascript - HTML - CSS',
      link: 'https://github.com/dabad-2021374/Agenda-web.git',
      importancia: 'alta',
      año: '6to'
    },
    {
      id: 9,
      titulo: 'Veterinaria',
      imagenUrl: 'https://i.ibb.co/r7hGhTJ/Veterinaria-Swing.png',
      descripcion: 'Administracion de veterinaria con JavaSwing',
      habilidades: 'Java - JavaSwing',
      link: 'https://github.com/dabad-2021374/Veterinaria-JavaSwing-2022.git',
      importancia: 'media',
      año: '4to'
    },
    {
      id: 10,
      titulo: 'Ahorcado',
      imagenUrl: 'https://i.ibb.co/T2WhZ72/image.png',
      descripcion: 'Ahorcado en Javascript y html',
      habilidades: 'Javacript - HTML (Canvas) - CSS',
      link: 'https://github.com/dabad-2021374/Ahorcado-2023.git',
      importancia: 'media',
      año: '5to'
    },
    {
      id: 11,
      titulo: 'Biblioteca Java',
      imagenUrl: 'https://i.ibb.co/44Ln0Nb/image.png',
      descripcion: 'Gestión de biblioteca de una vista',
      habilidades: 'Java - JavaSwing - MySQL',
      link: 'https://github.com/dabad-2021374/Libreria-Java-2022.git',
      importancia: 'baja',
      año: '4to'
    },
    {
      id: 12,
      titulo: "Ventas online",
      descripcion: 'Backend un poco completo para una tienda online.',
      imagenUrl: 'https://i.ibb.co/5FBfDgj/proyecto-final-terminado.png',
      habilidades: 'Javacript - NodeJS - Express - CORS - MongoDB',
      link: 'https://github.com/dabad-2021374/Proyecto-final-registro-de-ventas/tree/proyectoTerminado',
      importancia: 'media',
      año: '6to'
    },
    {
      id: 13,
      titulo: 'COPEREX',
      descripcion: 'Creación de Backend para la gestión de una empresa llamada COPEREX.',
      imagenUrl: 'https://i.ibb.co/XYzPbnL/laboratorio3-gestor-empresas.png',
      habilidades: 'Javacript - NodeJS - Express - CORS - MongoDB',
      link: 'https://github.com/dabad-2021374/GestorDeEmpresas.git',
      importancia: 'media',
      año: '6to'
    },
    {
      id: 14,
      titulo: 'Adopción de mascotas',
      descripcion: 'Creación de backend de un sistema de adopción de mascotas.',
      imagenUrl: 'https://i.ibb.co/h7SCd0J/laboratorio2-adopcion-mascotas.png',
      habilidades: 'Javacript - NodeJS - Express - CORS - MongoDB',
      link: 'https://github.com/dabad-2021374/AdopcionMascotas.git',
      importancia: 'baja',
      año: '6to'
    },
    {
      id: 15,
      titulo: 'Biblioteca',
      descripcion: 'Backend para una aplicación para gestión de biblioteca.',
      imagenUrl: 'https://i.ibb.co/0mDj8Td/PMA-proyecto-biblioteca.png',
      habilidades: 'Javacript - NodeJS - Express - CORS - MongoDB',
      link: 'https://github.com/dabad-2021374/PMA-Biblioteca.git',
      importancia: 'baja',
      año: '6to'
    },
    {
      id: 16,
      titulo: 'Control académico',
      descripcion: 'Backend en nodeJs sobre una aplicación de control académico.',
      imagenUrl: 'https://i.ibb.co/94hYc22/control-academico.png',
      habilidades: 'Javacript - NodeJS - Express - CORS - MongoDB',
      link: 'https://github.com/dabad-2021374/Control-Academico.git',
      importancia: 'baja',
      año: '6to'
    },
    {
      id: 17,
      titulo: 'Gestor de opiniones',
      descripcion: 'Backend en nodeJs sobre una aplicación de gestor de opiniones.',
      imagenUrl: 'https://i.ibb.co/N1wPjXL/gestor-de-opiniones.png',
      habilidades: 'Javacript - NodeJS - Express - CORS - MongoDB',
      link: 'https://github.com/dabad-2021374/PSGestorDeOpiniones.git',
      importancia: 'baja',
      año: '6to'
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
      <div className="custom-select-container">
        <select className="form-select form-select-lg mb-3 custom-select" aria-label="Large select example" value={filterOption} onChange={handleFilterChange}>
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
