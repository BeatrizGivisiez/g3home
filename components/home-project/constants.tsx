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
    title: "Habitação Unifamiliar V5",
    image: "/caminha/caminha_1.webp",
    description:
      "Habitação V5 em madeira alia eficiência térmica, conforto e integração com construção rápida e durável.",
    gallery: [
      "/caminha/caminha_1.webp",
      "/caminha/caminha_2.webp",
      "/caminha/caminha_3.webp",
      "/caminha/caminha_4.webp",
      "/caminha/caminha_5.webp",
      "/caminha/caminha_6.webp",
      "/caminha/caminha_7.webp",
      "/caminha/caminha_8.webp",
      "/caminha/caminha_9.webp",
      "/caminha/caminha_10.webp",
      "/caminha/caminha_11.webp",
    ],
    location: "Caminha",
    year: 2025,
    constructionSystem: "Madeira",
    area: "138 m²",
    purpose: "Habitação permanente",
  },
  {
    id: 2,
    title: "Casa Paços de Gaiolo",
    image: "/gaiolo/gaiolo1.webp",
    description:
      "Aço combina rapidez de construção, durabilidade e design moderno, adaptando-se ao terreno e clima locais.",
    gallery: [
      "/gaiolo/gaiolo1.webp",
      "/gaiolo/gaiolo2.webp",
      "/gaiolo/gaiolo3.webp",
      "/gaiolo/gaiolo4.webp",
      "/gaiolo/gaiolo5.webp",
      "/gaiolo/gaiolo6.webp",
    ],
    location: "Paços de Gaiolo",
    year: 2024,
    constructionSystem: "Aço",
    area: "120 m²",
    purpose: "Habitação permanente",
  },
  {
    id: 3,
    title: "Ohana Pinho Nórdico",
    image: "/geres/Geres_1.webp",
    description:
      "Casa de madeira adapta-se ao Gerês, oferecendo conforto durável e ligação harmoniosa com a paisagem.",
    gallery: [
      "/geres/Geres_1.webp",
      "/geres/Geres_2.webp",
      "/geres/Geres_3.webp",
      "/geres/Geres_4.webp",
      "/geres/Geres_5.webp",
      "/geres/Geres_6.webp",
      "/geres/Geres_7.webp",
    ],
    location: "Gerês, Portugal",
    year: 2023,
    constructionSystem: "Madeira",
    area: "75 m²",
    purpose: "Alojamento permanente",
  },
  {
    id: 4,
    title: "Casa Valença",
    image: "/valenca/valenca1.webp",
    description:
      "Casa em madeira privilegia conforto, durabilidade e integração, com vãos e materiais definidos pela orientação e localização.",
    gallery: [
      "/valenca/valenca1.webp",
      "/valenca/valenca2.webp",
      "/valenca/valenca3.webp",
      "/valenca/valenca4.webp",
      "/valenca/valenca5.webp",
      "/valenca/valenca6.webp",
      "/valenca/valenca7.webp",
    ],
    location: "Valença",
    year: 2022,
    constructionSystem: "Madeira",
    area: "85 m²",
    purpose: "Habitação permanente",
  },
  {
    id: 5,
    title: "Camping Pod",
    image: "/camping-pod/camping-pod1.webp",
    description:
      "Armazém de madeira apoia atividades rurais, dispensa licenciamento e garante arrumação, durabilidade e execução rápida.",
    gallery: [
      "/camping-pod/camping-pod1.webp",
      "/camping-pod/camping-pod2.webp",
      "/camping-pod/camping-pod3.webp",
      "/camping-pod/camping-pod4.webp",
      "/camping-pod/camping-pod5.webp",
      "/camping-pod/camping-pod7.webp",
    ],
    location: "Marco Canaveses",
    year: 2021,
    constructionSystem: "Madeira",
    area: "10 m²",
    purpose: "Apoio agrícola",
  },
  {
    id: 6,
    title: "Casa da Árvore",
    image: "/casa-arvore/casa_de_arvore_1.webp",
    description:
      "Casa da árvore em madeira oferece espaço seguro e durável, integrada no terreno sem afetar árvores.",
    gallery: [
      "/casa-arvore/casa_de_arvore_1.webp",
      "/casa-arvore/casa_de_arvore_2.webp",
      "/casa-arvore/casa_de_arvore_3.webp",
      "/casa-arvore/casa_de_arvore_4.webp",
    ],
    location: "Norte",
    year: 2021,
    constructionSystem: "Madeira",
    type: "Pinho nórdico certificado",
    area: "30 m²",
    purpose: "Casa da Árvore – Projeto Didático",
  },
];
