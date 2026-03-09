import Portafolio from '../assets/Proyects/FIRSTPORTAFOLIO.webp'
import Portafolio2 from '../assets/Proyects/FIRSTPORTAFOLIO_2.webp'

import Forever from '../assets/Proyects/ForeverLivingNoemi.webp'

import Game from '../assets/Proyects/THEBINDINGOFLUFFY.webp'
import Game2 from '../assets/Proyects/THEBINDINGOFLUFFY_1.webp'
import Game3 from '../assets/Proyects/THEBINDINGOFLUFFY_2.webp'
import Game4 from '../assets/Proyects/THEBINDINGOFLUFFY_3.webp'

import Safety from '../assets/Proyects/SafetyAdvisors_1.webp'
import Safety2 from '../assets/Proyects/SafetyAdvisors_2.webp'
import Safety3 from '../assets/Proyects/SafetyAdvisors_3.webp'
import Safety4 from '../assets/Proyects/SafetyAdvisors_4.webp'

import Lexor from '../assets/Proyects/LexorSmartContract.webp'

import BlackBird from '../assets/Proyects/BlackBird_Landing.webp'
import BlackBird2 from '../assets/Proyects/BlackBird_Landing_2.webp'
import BlackBird3 from '../assets/Proyects/BlackBird_Landing_3.webp'

import Osprey from '../assets/Proyects/Osprey.webp'

import JavaScript from '../assets/Technologies/javascript.svg'
import ReactJS from '../assets/Technologies/react.svg'
import PostGreSQL from '../assets/Technologies/postgresql.svg'
import MongoDB from '../assets/Technologies/mongodb.svg'
import Node from '../assets/Technologies/node.svg'
import Java from '../assets/Technologies/java.svg'
import Redis from '../assets/Technologies/redis.svg'
import Tailwind from '../assets/Technologies/tailwind.svg'

export const techLogos = {
  'JavaScript': JavaScript,
  'React': ReactJS,
  'PostgreSQL': PostGreSQL,
  'MongoDB': MongoDB,
  'Node': Node,
  'Java': Java,
  'Redis':Redis,
  'Tailwind':Tailwind
};

export const projects = [
  {
    id: 1,
    name: 'Safety Web',
    description: 'Sitio web corporativo desarrollado para una consultora de seguridad y salud ocupacional en Lima. Incluye secciones informativas sobre sus servicios de asesoría, capacitaciones y auditorías, con diseño responsivo y navegación intuitiva.',
    techStack: ['JavaScript', 'React'],
    image: Safety,
    gallery: [Safety,Safety2,Safety3,Safety4],
    link: "https://safetyadvisors.io/"
  },
  {
    id: 2,
    name: 'Forever Living',
    description: 'Aplicación web para la gestión de inventario y catálogo de productos naturales Forever Living. Permite visualizar el stock disponible, consultar precios y gestionar pedidos de manera eficiente con una interfaz moderna conectada a MongoDB.',
    techStack: ['JavaScript', 'React', 'MongoDB'],
    image: Forever,
    gallery: [Forever],
    link: "https://forevernoemi.netlify.app/"
  },
  {
    id: 3,
    name: 'Portafolio #1',
    description: 'Mi primer portafolio personal construido con React.js. Presenta una colección de proyectos, habilidades técnicas e información de contacto y un diseño limpio.',
    techStack: ['JavaScript', 'React'],
    image: Portafolio,
    gallery: [Portafolio,Portafolio2],
    link: "https://jhersportfolio.netlify.app/"
  },
  {
    id: 4,
    name: 'Videojuego 2D',
    description: 'Videojuego 2D tipo roguelike inspirado en The Binding of Isaac, desarrollado en Java. Cuenta con generación procedural de mazmorras, múltiples enemigos con IA propia, sistema de ítems y mecánicas de combate en tiempo real.',
    techStack: ['Java'],
    image: Game,
    gallery: [Game,Game2,Game3,Game4],
    link: "https://github.com/Zapallit0/TheBindingOfLuffy"
  },
  {
    id: 5,
    name: 'Lexor Smart Contracts',
    description: 'Panel de administración para la gestión y monitoreo de contratos inteligentes. Ofrece visualización de datos en tiempo real, historial de transacciones y métricas clave, con un backend en Node.js y persistencia en PostgreSQL.',
    techStack: ['React', 'PostgreSQL', 'Node'],
    image: Lexor,
    gallery: [Lexor],
    link: "https://lexorsmartproject.netlify.app"
  },
  {
    id: 6,
    name: 'Black Bird',
    description: 'Landing page profesional para una empresa de desarrollo de software. Diseñada para captar clientes potenciales, presenta los servicios ofrecidos, casos de éxito y formulario de contacto con un diseño moderno y atractivo.',
    techStack: ['React', 'PostgreSQL', 'Node'],
    image: BlackBird,
    gallery: [BlackBird,BlackBird2,BlackBird3],
    link: "https://blackbird-jg.com/"
  },
  {
    id: 7,
    name: 'Osprey',
    description: 'Sistema integral de gestión y monitoreo de tarifas para operadoras de telecomunicaciones. Incluye alertas tempranas ante variaciones de precios, dashboards analíticos, caché con Redis para alto rendimiento y una arquitectura fullstack robusta.',
    techStack: ['React', 'PostgreSQL', 'Node','MongoDB','Redis','Tailwind'],
    image: Osprey,
    gallery: [Osprey],
    link: "https://blackbird-jg.com/"
  },
];
