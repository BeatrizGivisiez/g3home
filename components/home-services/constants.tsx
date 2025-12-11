import {
  FileTextIcon,
  ScrollIcon,
  HammerIcon,
  TruckIcon,
  HouseIcon,
  StackIcon,
  ThermometerHotIcon,
  PaintBrushIcon,
  GridFourIcon,
  DropIcon,
} from "@phosphor-icons/react/dist/ssr";

export const timelineSteps = [
  {
    id: 1,
    number: "1º",
    title: "Desenvolver Projeto",
    description: "Fazemos alteração à sua medida",
    icon: FileTextIcon,
  },
  {
    id: 2,
    number: "2º",
    title: "Licenciamento",
    description: "",
    icon: ScrollIcon,
  },
  {
    id: 3,
    number: "3º",
    title: "Adjudicação",
    description: "Aproximadamente 1 mês e meio em fábrica",
    icon: HammerIcon,
  },
  {
    id: 4,
    number: "4º",
    title: "Transporte para o local",
    description: "",
    icon: TruckIcon,
  },
  {
    id: 5,
    number: "5º",
    title: "Construção da casa",
    description: "De 2 meses a 4 meses de acordo com o modelo escolhido",
    icon: HouseIcon,
  },
];

export const lsfWallLayers = [
  {
    id: 1,
    title: "Viga de Aço Leve",
    description:
      "Estrutura robusta e duradoura. Utilização de perfis de aço leve para uma estrutura eficaz.",
    icon: StackIcon,
  },
  {
    id: 2,
    title: "Isolamento Térmico",
    description:
      "Geralmente feito com lã mineral. Inserido entre os perfis para garantir eficiência energética.",
    icon: ThermometerHotIcon,
  },
  {
    id: 3,
    title: "Acabamento Interior",
    description:
      "Composto por placas de gesso cartonado. Proporciona uma superfície lisa e pronta para pintura.",
    icon: PaintBrushIcon,
  },
  {
    id: 4,
    title: "Revestimento com Painéis OSB",
    description:
      "Ambas as faces da parede são revestidas. Reforça a estrutura.",
    icon: GridFourIcon,
  },
  {
    id: 5,
    title: "Controlo de Humidade",
    description:
      "Inclusão de barreiras contra vapores. Contribui para assegurar um ambiente interno saudável e duradouro.",
    icon: DropIcon,
  },
];
