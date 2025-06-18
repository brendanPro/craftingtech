import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { FaQuoteLeft } from "react-icons/fa";

interface Testimony {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
}

const testimonials: Testimony[] = [
  {
    id: 1,
    name: "Michaël Bitard",
    role: "Freelance developer",
    company: "Freelance",
    content: `J'ai travaillé avec Brendan pendant presque 2 ans, nous avons énormément pair-programmé.
    C'est un développeur hors pair (pun intented), il a à coeur d'apporter le plus de valeur possible aux logiciels qu'il construit.
    Il est efficace, plein d'entrain, toujours prêt à apprendre ainsi qu'à partager ses connaissances !
    J'ai adoré travaillé avec lui, j'espère que l'on pourra se recroiser !!`
  },
  {
    id: 2,
    name: "Josquin Farge",
    role: "VP Product",
    company: "Believe",
    content: `
        J'ai recruté Brendan début 2022 et il a occupé pendant trois ans un rôle clé au sein de notre équipe.
        Brendan s'est toujours montré moteur et pleinement impliqué dans nos projets. Très proche de son binôme Produit et des équipes métiers, il a su développer une excellente compréhension des besoins, ce qui a fortement contribué à la réussite de ses missions.
        S'il a travaillé efficacement en squad, ses qualités nous ont également permis de lui confier des sujets complexes à porter en quasi-autonomie, notamment le développement d'une application métier destinée à industrialiser des processus complexes.
        Je recommande vivement Brendan pour ses compétences techniques, sa capacité d'adaptation et son professionnalisme. Je reste disponible pour échanger si besoin d'un retour plus détaillé.
      `
  },
  {
    id: 3,
    name: "Hervé Tran",
    role: "Lead Software Engineer",
    company: "Freelance - Believe",
    content: `J’ai eu la chance de travailler 4 ans avec Brendan et je ne peux que saluer sa polyvalence et sa capacité à s’adapter à n’importe quel contexte technique. Développeur full stack complet, il maîtrise aussi bien le front que le back, et n’hésite jamais à sortir de sa zone de confort pour explorer de nouvelles compétences. 
      En effet, Brendan est un des seuls développeurs de l'équipe à avoir été intéressé par les sujets DevOps, il s'est notamment investi sur la migration de nos applications de AWS vers GCP.
      C’est quelqu’un sur qui on peut compter, autant pour livrer du code propre et efficace que pour apporter une vision globale sur l’architecture des projets. 
      Je recommande vivement Brendan à toute équipe cherchant un développeur à la fois curieux, fiable et techniquement solide.`
  },
  {
    id: 4,
    name: "Brice Delourmel",
    role: "Senior Product Manager",
    company: "Believe",
    content: `J'ai eu l'occasion de travailler 3 ans avec Brendan au sein de la Tribe "Audience Development" sur 2 Produits structurant pour nos équipes Marketing.
    J'ai apprécié sa manière de travailler, sa détermination et sa rigueur lorsqu'il s'agit d'imaginer, de concevoir, de développer ou même de débugger nos différents produits.
    Brendan a une approche critique très constructive et est vraiment un développeur sur qui on peut compter.`
  },
  {
    id: 5,
    name: "Thomas Mery",
    role: "Front-end developer - Typescript | React",
    company: "Freelance - Believe",
    content: `
    J’ai eu l’occasion de collaborer avec Brendan au sein de l’équipe Marketing Product chez Believe pendant trois ans. Nous avons travaillé ensemble sur plusieurs projets, notamment sur une application de soumission de titres aux plateformes de streaming.
    Ce projet a permis d’apprécier sa capacité à trouver des solutions et à collaborer efficacement dans un environnement technique legacy exigeant.
    Brendan a toujours fait preuve d’une excellente écoute des besoins et des problématiques frontend, rendant notre travail ensemble fluide, productif et très agréable. Sa bienveillance et sa capacité à partager ses connaissances, y compris sur des sujets backend que je maîtrisais moins, ont grandement enrichi notre collaboration.
    Autonome, fiable et toujours prêt à faire avancer les projets de manière constructive, Brendan a été un collaborateur précieux.
    Je le recommande sans hésitation.
    `
  },
  {
    id: 6,
    name: "Arnaud Tarroux",
    role: "Freelance Développeur web - NodeJS | NestJS | React",
    company: "Freelance - Believe",
    content: `
    J’ai eu le plaisir de travailler en binôme avec Brendan sur de nombreux projets au sein de Believe. En tant que développeur backend, il a toujours fait preuve d’un grand professionnalisme et d’une capacité à résoudre efficacement les problèmes complexes.
    Ce qui m’a particulièrement marqué, c’est sa curiosité et sa volonté constante d’élargir ses compétences, notamment dans le domaine du DevOps/Infra. Il n’a pas hésité à s’investir sur des sujets liés à l'infra, au déploiement et à l’observabilité, apportant une réelle valeur ajoutée à notre équipe.
    Notre travail ensemble a été un réel plaisir autant sur le plan pro qu'humain: il sait collaborer, écouter, partager ses connaissances et avancer ensemble vers des solutions robustes et bien pensées. Je le recommande sans hésitation pour toute équipe cherchant un développeur backend engagé et ouvert aux enjeux de l’infrastructure moderne.
    `
  }
];

export default function ExperienceSection(props: {id:string, index: number}) {
  const {id, index} = props;

  return (
    <>
      <motion.section
        key={id}
        id={id}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        className="min-h-(--section-height) flex flex-col p-10 justify-center items-center"
      >
        <h2 className="text-3xl font-bold mb-12">Expériences & Témoignages</h2>
        
        <div className="w-full max-w-4xl px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimony) => (
                <CarouselItem key={testimony.id} className="h-full">
                  <div className="p-8 h-full flex flex-col bg-gray-700 rounded-lg shadow-xl aspect-5/3">
                    <div className="flex-grow">
                      <FaQuoteLeft className="text-3xl text-blue-400 mb-4" />
                      <p className="text-gray-300 text-lg">{testimony.content}</p>
                    </div>
                    <div className="mt-6 flex items-center justify-end">
                      <div className="text-right">
                        <h3 className="font-semibold text-white">{testimony.name}</h3>
                        <p className="text-gray-400">{testimony.role}</p>
                        <p className="text-blue-400">{testimony.company}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-gray-700 hover:bg-gray-600 border-none text-white" />
            <CarouselNext className="bg-gray-700 hover:bg-gray-600 border-none text-white" />
          </Carousel>
        </div>
      </motion.section>
    </>
  );
}