import { initScrollReveal } from "./scrollReveal.js";
import { hoverChangeExperience } from "./hoverChangeExperience.js";
import { typeWrite } from "./typeWrite.js";
import { hoverChangeDescription } from "./hoverChangeDescription.js";
import { menu } from "./menu.js";

menu();
initScrollReveal();
typeWrite(document.querySelector(".typewriter"));

hoverChangeExperience(
  ".digitalhouse",
  `Desde que comecei a atuar como programador freelancer há cinco meses, mergulhei em uma jornada empolgante de desenvolvimento. Durante esse período,
  tive a oportunidade de trabalhar em diversos projetos, aproveitando as linguagens com as quais tenho maior familiaridade para oferecer soluções criativas 
  e eficientes. Cada projeto foi uma oportunidade de aprendizado e crescimento, consolidando minha expertise e me desafiando a buscar constantemente novas maneiras
  de aprimorar minhas habilidades. Estou entusiasmado para continuar essa jornada, explorando novas tecnologias e entregando resultados excepcionais aos meus clientes.`,
  "Desenvolvedor Front-End",
  "Front-End",
  "Nov 2023 - presente "
);

hoverChangeExperience(
  ".zuplae",
  `
  Durante minha trajetória profissional, atuei com dedicação na área de suporte ao cliente, onde assumi a responsabilidade de receber
  chamados e entrar em contato direto com os clientes para fornecer assistência técnica em suas máquinas. 
  Esse papel me permitiu desenvolver habilidades de comunicação eficaz e capacidade de resolução de problemas em tempo real.`,
  "Estagiário De Suporte",
  "Estágio",
  "Maio 2023 - Novembro 2023 (6 meses)"
);

hoverChangeDescription(
  ".html",
  "HTML é uma linguagem de marcação, onde marcamos os elementos para definir quais informações a página vai exibir."
);
hoverChangeDescription(
  ".css",
  "CSS é uma linguagem de folha de estilo composta por “camadas”, criado com o propósito de estilizar as páginas."
);
hoverChangeDescription(
  ".js",
  "JavaScript é uma linguagem de programação que permite a você implementar elementos dinâmicos em páginas web."
);
hoverChangeDescription(
  ".sass",
  "Sass é um pré-processador CSS que adiciona alguns recursos que não estão disponíveis de forma nativa."
);
hoverChangeDescription(
  ".react",
  "React é uma biblioteca JavaScript com foco em criar interfaces de usuário de forma componetizada."
);

hoverChangeDescription(
  ".typescript",
  "TypeScript é um superset do JavaScript que incluir recursos que não estão presentes na linguagem de forma nativa, além de torná-la estática."
);

hoverChangeDescription(
  ".angular",
  "AngularJS é um framework de código aberto usado para construir aplicativos para web baseados em uma única página dinâmica."
);

hoverChangeDescription(
  ".vue",
  "Vue.js é um framework JavaScript de código-aberto, focado no desenvolvimento de interfaces de usuário e aplicativos de página única."
);