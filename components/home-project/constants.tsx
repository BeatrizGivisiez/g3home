export interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
  gallery: string[];
  location: string;
  year: number;
  constructionSystem: "Madeira" | "Aço";
  type?: string;
  area: string;
  purpose: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Ohana Pinho Nórdico",
    image: "/modern-luxury-house-with-wood-elements.jpg",
    description:
      "Casa de madeira adapta-se ao Gerês, oferecendo conforto durável e ligação harmoniosa com a paisagem.",
    gallery: [
      "/modern-luxury-house-with-wood-elements.jpg",
      "/placeholder.svg",
      "/placeholder.svg",
    ],
    location: "Gerês, Portugal",
    year: 2023,
    constructionSystem: "Madeira",
    area: "75 m²",
    purpose: "Alojamento empresarial",
  },
  {
    id: 2,
    title: "Habitação Unifamiliar V5",
    image: "/elegant-commercial-space-gold-accents.jpg",
    description:
      "Habitação V5 em madeira alia eficiência térmica, conforto e integração com construção rápida e durável.",
    gallery: [
      "/elegant-commercial-space-gold-accents.jpg",
      "/placeholder.svg",
      "/placeholder.svg",
    ],
    location: "Caminha",
    year: 2025,
    constructionSystem: "Madeira",
    area: "138 m²",
    purpose: "Habitação permanente",
  },
  {
    id: 3,
    title: "Casa Valença",
    image: "/contemporary-villa-architecture-luxury.jpg",
    description:
      "Casa em madeira privilegia conforto, durabilidade e integração, com vãos e materiais definidos pela orientação e localização.",
    gallery: [
      "/contemporary-villa-architecture-luxury.jpg",
      "/placeholder.svg",
      "/placeholder.svg",
    ],
    location: "Valença",
    year: 2022,
    constructionSystem: "Madeira",
    area: "85 m²",
    purpose: "Habitação permanente",
  },
  {
    id: 4,
    title: "Camping Pod",
    image: "/contemporary-villa-architecture-luxury.jpg",
    description:
      "Armazém de madeira apoia atividades rurais, dispensa licenciamento e garante arrumação, durabilidade e execução rápida.",
    gallery: [
      "/contemporary-villa-architecture-luxury.jpg",
      "/placeholder.svg",
      "/placeholder.svg",
    ],
    location: "Marco Canaveses",
    year: 2021,
    constructionSystem: "Madeira",
    area: "10 m²",
    purpose: "Apoio agrícola",
  },
  {
    id: 5,
    title: "Casa da Árvore",
    image: "/contemporary-villa-architecture-luxury.jpg",
    description:
      "Casa da árvore em madeira oferece espaço seguro e durável, integrada no terreno sem afetar árvores.",
    gallery: [
      "/contemporary-villa-architecture-luxury.jpg",
      "/placeholder.svg",
      "/placeholder.svg",
    ],
    location: "Norte",
    year: 2021,
    constructionSystem: "Madeira",
    type: "Pinho nórdico certificado",
    area: "30 m²",
    purpose: "Projeto Didático",
  },
  {
    id: 6,
    title: "Casa Paços de Gaiolo",
    image: "/contemporary-villa-architecture-luxury.jpg",
    description:
      "Aço combina rapidez de construção, durabilidade e design moderno, adaptando-se ao terreno e clima locais.",
    gallery: [
      "/contemporary-villa-architecture-luxury.jpg",
      "/placeholder.svg",
      "/placeholder.svg",
    ],
    location: "Paços de Gaiolo",
    year: 2024,
    constructionSystem: "Aço",
    area: "120 m²",
    purpose: "Habitação permanente",
  },
];
