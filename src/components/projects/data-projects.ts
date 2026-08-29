import type { ImageMetadata } from "astro";
import baselinelabImage from "@/assets/images/projects/baselinelab.webp";
import baselinelabDetailImage from "@/assets/images/projects/baselinelab-detail.webp";
import temariosImage from "@/assets/images/projects/temarios.webp";
import temariosDetailImage from "@/assets/images/projects/temarios-detail.webp";
import flipifriendsImage from "@/assets/images/projects/flipi-friends.webp";
import flipifriendsDetailImage from "@/assets/images/projects/flipifriends-detail.webp";

export interface Project {
  title: string;
  description: string;
  link: string;
  tags: string[];
  image: ImageMetadata;
  detailImage: ImageMetadata;
  category: string;
  highlight: string;
  accent: string;
  accentAlt: string;
}

export const projects: Project[] = [
  {
    title: "BaselineLab",
    description:
      "Plataforma en desarrollo con playgrounds y generadores de CSS y HTML, orientada a acelerar pruebas visuales, creación de código y productividad frontend.",
    link: "https://baselinelab.dev",
    tags: ["Astro", "TypeScript", "Web Components", "CSS", "HTML"],
    image: baselinelabImage,
    detailImage: baselinelabDetailImage,
    category: "Laboratorio frontend",
    highlight: "68 labs interactivos",
    accent: "#ff8a00",
    accentAlt: "#00d9c8",
  },
  {
    title: "TemariOS",
    description:
      "Aplicación para los alumnos del bootcamp de SocraTech donde centralizo guías, recursos, ejercicios, maquetaciones y quizzes para mejorar el seguimiento práctico del aprendizaje.",
    link: "https://temariosapp.vercel.app/",
    tags: ["React 19", "TypeScript", "Supabase", "CSS"],
    image: temariosImage,
    detailImage: temariosDetailImage,
    category: "Plataforma educativa",
    highlight: "Guías, ejercicios y quizzes",
    accent: "#20c7b5",
    accentAlt: "#4b8cff",
  },
  {
    title: "FlipiFriends",
    description:
      "Proyecto infantil para seleccionar series y películas animadas y jugar a buscar parejas de cartas, centrado en lógica de interacción, estado y experiencia de usuario.",
    link: "https://flipi-friends.vercel.app",
    tags: ["React 19", "JavaScript", "CSS"],
    image: flipifriendsImage,
    detailImage: flipifriendsDetailImage,
    category: "Juego interactivo",
    highlight: "7 niveles de juego",
    accent: "#43b9f5",
    accentAlt: "#ffc84a",
  },
];
