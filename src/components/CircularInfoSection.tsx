"use client";

import Image from "next/image";
import {
  FaRecycle,
  FaLeaf,
  FaSeedling,
  FaArrowCircleUp,
} from "react-icons/fa";

interface CircularInfoProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
};

const circularData = [
  {
    title: "Redução de Resíduos",
    description:
      "Minimizar a geração de lixo desde o design do produto até seu descarte, promovendo processos mais eficientes.",
    icon: <FaRecycle className="text-green-700 text-4xl mb-4" />,
    image: "https://cdn-icons-png.flaticon.com/512/2907/2907238.png",
  },
  {
    title: "Reutilização Criativa",
    description:
      "Dar novos usos a materiais e objetos que seriam descartados, prolongando sua vida útil e gerando economia.",
    icon: <FaLeaf className="text-green-700 text-4xl mb-4" />,
    image: "https://cdn-icons-png.flaticon.com/512/706/706797.png",
  },
  {
    title: "Reciclagem",
    description:
      "Transformar resíduos em novos produtos, reduzindo o consumo de matérias-primas virgens e impactos ambientais.",
    icon: <FaArrowCircleUp className="text-green-700 text-4xl mb-4" />,
    image: "https://cdn-icons-png.flaticon.com/512/860/860848.png",
  },
  {
    title: "Produção Sustentável",
    description:
      "Projetar produtos duráveis, reparáveis e recicláveis para reduzir o impacto ambiental e prolongar ciclos de uso.",
    icon: <FaSeedling className="text-green-700 text-4xl mb-4" />,
    image: "https://cdn-icons-png.flaticon.com/512/5283/5283858.png",
  },
  {
    title: "Economia Compartilhada",
    description:
      "Promover o uso coletivo de produtos e serviços, diminuindo a necessidade de produzir novos itens constantemente.",
    icon: <FaRecycle className="text-green-700 text-4xl mb-4" />,
    image: "https://cdn-icons-png.flaticon.com/512/9028/9028669.png",
  },
  {
    title: "Energia Limpa",
    description:
      "Usar fontes renováveis como solar e eólica para alimentar a produção industrial e reduzir emissões de carbono.",
    icon: <FaLeaf className="text-green-700 text-4xl mb-4" />,
    image: "https://cdn-icons-png.flaticon.com/512/2840/2840064.png",
  },
  {
    title: "Design Circular",
    description:
      "Criar produtos pensando desde o início em sua desmontagem, reciclagem e reintegração nos ciclos produtivos.",
    icon: <FaRecycle className="text-green-700 text-4xl mb-4" />,
    image: "https://cdn-icons-png.flaticon.com/512/1039/1039325.png",
  },
  {
    title: "Manutenção e Reparo",
    description:
      "Prolongar a vida útil dos produtos através de serviços de manutenção, reduzindo a necessidade de descarte.",
    icon: <FaArrowCircleUp className="text-green-700 text-4xl mb-4" />,
    image: "https://cdn-icons-png.flaticon.com/512/1132/1132009.png",
  },
  {
    title: "Upcycling",
    description:
      "Transformar resíduos ou produtos antigos em itens de maior valor ou qualidade, criando soluções inovadoras.",
    icon: <FaSeedling className="text-green-700 text-4xl mb-4" />,
    image: "https://cdn-icons-png.flaticon.com/512/819/819859.png",
  },
  {
    title: "Consumo Consciente",
    description:
      "Estimular escolhas responsáveis, priorizando produtos duráveis, éticos e com baixo impacto ambiental.",
    icon: <FaLeaf className="text-green-700 text-4xl mb-4" />,
    image: "https://cdn-icons-png.flaticon.com/512/766/766554.png",
  },
];

export default function CircularInfoSection({ className }: CircularInfoProps) {
  return (
    <div className={className}>
      <section className="flex-1 bg-green-50 flex flex-col justify-center items-center text-center p-28  px-4">
        <h1 className="text-5xl font-extrabold text-green-800 mb-4">
          Economia Circular
        </h1>
        <p className="text-lg text-green-700 max-w-2xl mb-8">
          Uma abordagem sustentável para reduzir desperdícios, prolongar ciclos
          de vida dos produtos e construir um planeta mais equilibrado.
        </p>
        <Image
          src="https://cdn-icons-png.flaticon.com/128/3937/3937245.png"
          alt="Economia Circular"
          className="w-40 h-40"
          width={160}
          height={160}
        />
      </section>

      <section id="about" className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-green-800 mb-6">
            O que é Economia Circular?
          </h2>
          <p className="text-gray-700 text-lg mb-8">
            A Economia Circular é um modelo econômico baseado na redução do
            desperdício, no reaproveitamento de recursos e na sustentabilidade
            ambiental. Ao invés do modelo linear tradicional — extrair, produzir,
            descartar — a economia circular busca manter produtos e materiais em
            uso pelo maior tempo possível.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
              <FaRecycle className="text-green-700 text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Redução de Resíduos</h3>
              <p className="text-gray-600">
                Diminuir a geração de lixo através do design inteligente de
                produtos.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
              <FaLeaf className="text-green-700 text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Sustentabilidade</h3>
              <p className="text-gray-600">
                Proteger o meio ambiente e conservar recursos naturais.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
              <FaRecycle className="text-green-700 text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Economia Sustentável</h3>
              <p className="text-gray-600">
                Criar novas oportunidades de negócios e empregos verdes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-6 pb-30 bg-white px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-green-800 mb-6">
            Princípios da Economia Circular
          </h2>
          <p className="text-gray-700 mb-10">
            Entenda como a Economia Circular transforma a maneira como produzimos e consumimos.
          </p>

          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-10">
            {circularData.map((item, idx) => (
              <div
                key={idx}
                className="bg-green-50 p-6 rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1"
                data-aos="fade-up"
              >
                <h3 className="text-xl font-semibold text-green-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                <Image
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 mx-auto"
                  width={160}
                  height={160}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
