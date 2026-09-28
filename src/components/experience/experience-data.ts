import type { ImageMetadata } from 'astro';

import fundasLogo from '@/assets/images/logo-fundas-y-accesorios.webp';
import leonardoLogo from '@/assets/images/logo-ies-leonardo-da-vinci.webp';
import maestreLogo from '@/assets/images/logo-ies-maestre-de-calatrava.webp';
import socratechLogo from '@/assets/images/logo-socratech.webp';

export interface ProfessionalExperienceItem {
  date: string;
  title: string;
  organization: string;
  summary: string;
  description: string;
  logo: ImageMetadata;
  logoAlt: string;
  accent: string;
}

export interface EducationItem {
  date: string;
  title: string;
  organization: string;
  logo: ImageMetadata;
  logoAlt: string;
  accent: string;
}

export const professionalExperience: ProfessionalExperienceItem[] = [
  {
    date: 'Febrero 2023 - Junio 2026',
    title: 'Desarrollador web y docente técnico',
    organization: 'Escuela SocraTech',
    summary:
      'Aplicaciones educativas, evolución de TemariOS, acompañamiento de más de 20 proyectos e IA aplicada al flujo técnico.',
    description:
      'Desarrollé y mantuve aplicaciones web y herramientas internas orientadas al aprendizaje práctico. Diseñé e implementé interfaces frontend con foco en usabilidad, estructura y experiencia de usuario. Creé y evolucioné TemariOS como plataforma interna para centralizar contenidos, ejercicios, maquetaciones y guías, acompañé técnicamente más de 20 proyectos de frontend y backend e integré IA para agilizar análisis, refactorización, documentación y validación técnica.',
    logo: socratechLogo,
    logoAlt: 'Logo de Escuela SocraTech',
    accent: '#14b8a6',
  },
  {
    date: 'Agosto 2019 - Septiembre 2022',
    title: 'Autónomo',
    organization: 'Ecommerce propio',
    summary:
      'Diseño, desarrollo y evolución de un ecommerce propio, asumiendo la experiencia de usuario y la operativa completa del canal digital.',
    description:
      'Diseño y desarrollo desde cero de la web del ecommerce, definiendo estructura, interfaz y experiencia de usuario. Implementación de mejoras funcionales y evolución continua del canal digital según las necesidades del negocio. Gestión del entorno online del proyecto, combinando desarrollo web, actualización de contenidos y operativa digital, con responsabilidad directa sobre ejecución, priorización y toma de decisiones.',
    logo: fundasLogo,
    logoAlt: 'Logo de Fundas y Accesorios',
    accent: '#4b8cff',
  },
];

export const education: EducationItem[] = [
  {
    date: 'Octubre 2026 - En curso',
    title: 'FP Desarrollo de Aplicaciones Web (DAW)',
    organization: 'IES Maestre de Calatrava',
    logo: maestreLogo,
    logoAlt: 'Logo del IES Maestre de Calatrava',
    accent: '#bb243d',
  },
  {
    date: 'Septiembre 2022 - Febrero 2023',
    title: 'Bootcamp Full Stack Web Developer',
    organization: 'Escuela SocraTech',
    logo: socratechLogo,
    logoAlt: 'Logo de Escuela SocraTech',
    accent: '#14b8a6',
  },
  {
    date: '2010 - 2012',
    title: 'FP Sistemas Microinformáticos y Redes (SMR)',
    organization: 'IES Leonardo Da Vinci, Albacete',
    logo: leonardoLogo,
    logoAlt: 'Logo del IES Leonardo Da Vinci',
    accent: '#ff7a59',
  },
];
