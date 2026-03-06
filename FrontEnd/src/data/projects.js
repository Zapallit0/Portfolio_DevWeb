import Portafolio from '../assets/Proyects/FIRSTPORTAFOLIO.webp'
import Forever from '../assets/Proyects/ForeverLivingNoemi.webp'
import Game from '../assets/Proyects/THEBINDINGOFLUFFY.webp'
import Safety from '../assets/Proyects/SafetyAdvisors.webp'
import Lexor from '../assets/Proyects/LexorSmartContract.webp'
import BlackBird from '../assets/Proyects/BlackBird_Landing.webp'
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
    description: 'Pagina web para consultora de seguridad en Lima',
    techStack: ['JavaScript', 'React'],
    image: Safety,
    gallery: [Safety],
    link: "https://safetyadvisors.io/"
  },
  {
    id: 2,
    name: 'Forever Living',
    description: 'Página web para controlar stock de productos naturales',
    techStack: ['JavaScript', 'React', 'MongoDB'],
    image: Forever,
    gallery: [Forever],
    link: "https://forevernoemi.netlify.app/"
  },
  {
    id: 3,
    name: 'Portafolio #1',
    description: 'Primer portafolio con React.js',
    techStack: ['JavaScript', 'React'],
    image: Portafolio,
    gallery: [Portafolio],
    link: "https://jhersportfolio.netlify.app/"
  },
  {
    id: 4,
    name: 'Videojuego 2D',
    description: 'Videojuego 2D tipo roguelike',
    techStack: ['Java'],
    image: Game,
    gallery: [Game],
    link: "https://github.com/Zapallit0/TheBindingOfLuffy"
  },
  {
    id: 5,
    name: 'Lexor Smart Contracts',
    description: 'Dashboard para smart contracts',
    techStack: ['React', 'PostgreSQL', 'Node'],
    image: Lexor,
    gallery: [Lexor],
    link: "https://lexorsmartproject.netlify.app"
  },
  {
    id: 6,
    name: 'Black Bird',
    description: 'LandingPage de desarrollo de sistemas ',
    techStack: ['React', 'PostgreSQL', 'Node'],
    image: BlackBird,
    gallery: [BlackBird],
    link: "https://blackbird-jg.com/"
  },
  {
    id: 7,
    name: 'Osprey',
    description: 'Sistema de manejo de tarifas con alertas tempranas para las operadoras',
    techStack: ['React', 'PostgreSQL', 'Node','MongoDB','Redis','Tailwind'],
    image: Osprey,
    gallery: [Osprey],
    link: "https://blackbird-jg.com/"
  },
];
