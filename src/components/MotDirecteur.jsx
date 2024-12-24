"use client";
import { History } from "lucide-react";
import React from "react";

const MotDirecteur = () => {
  return (
    <div className="flex items-center justify-center w-full h-full py-2">
      {/* Container */}
      <div className="flex items-center bg-blue-950 opacity-90 rounded-lg shadow-lg overflow-hidden w-full p-4 m-4">
        <div className="w-full p-4">
          <p className="text-white leading-relaxed text-justify text-xl">
            Bienvenue au Laboratoire de Recherche en Informatique et
            Télécommunications (<b>LRIT</b>), une structure d&apos;excellence reconnue
            pour son expertise en recherche, formation et innovation
            technologique.
          </p>
          {/* <p className="flex justify-start items-center gap-2 text-white text-start my-4 font-bold">
          <History /><span className="text-xl">Historique</span></p> */}
          <p className="text-white leading-relaxed text-justify">
            <b>F</b>ondé en 1972 sous le nom de Laboratoire d&apos;Électronique et
            d&apos;Études des Systèmes Automatiques (LEESA), le laboratoire a
            progressivement évolué pour devenir le LRIT, reflet de son
            engagement constant envers l’informatique et les télécommunications.
            Depuis sa création, le LRIT a su s’adapter aux transformations
            technologiques et sociétales, jouant un rôle de précurseur dans ces
            domaines.
          </p>
          <p className="text-white leading-relaxed text-justify mt-2">
            <b>D</b>ès ses débuts, le laboratoire s’organisait autour de plusieurs
            groupes thématiques, tels que l’automatique, le traitement des
            images et les signaux multimédias. En 2001, le LRIT a renforcé son
            impact en participant activement à la création du Pôle de
            Compétences STIC, consolidant ainsi sa position en tant qu’acteur
            clé des technologies de l’information et de la communication. Cette
            évolution témoigne de notre capacité à fédérer des compétences et à
            entreprendre des projets ambitieux.
          </p>
          <p className="text-white leading-relaxed text-justify mt-4">
            Le <b>LRIT</b> se distingue par la richesse et la diversité de ses axes de
            recherche, qui incluent :
          </p>
          <p className="">
            <ul className="mb-1 grid justify-start items-start gap-2 ml-5 mt-3 text-start">
              <li className="text-white">
                <b>• I</b>ntelligence artificielle et ses applications
              </li>
              <li className="text-white">• IoT, cloud computing et sécurité</li>
              <li className="text-white">
                <b>• T</b>ransports intelligents et smart cities
              </li>
              <li className="text-white">
                <b>• I</b>ndexation et recherche d’informations dans des bases de
                données multimédias
              </li>
              <li className="text-white">
                <b>• S</b>ystèmes biométriques et traitement d’objets 3D
              </li>
              <li className="text-white"><b>• B</b>ig Data et fouille de données</li>
              <li className="text-white">
                <b>• T</b>ransmission et codage robustes de contenus multimédias
              </li>
              <li className="text-white">
                <b>• Q</b>ualité de service dans les réseaux sans fil
              </li>
              <li className="text-white">
                <b>• I</b>ntégration matérielle et systèmes embarqués temps réels
              </li>
              <li className="text-white">
                <b>• T</b>héorie des graphes et extraction de connaissances.
              </li>
            </ul>
          </p>
          <p className="text-white leading-relaxed text-justify mt-4">
            <b>C</b>es thématiques, associées à des partenariats stratégiques avec des
            institutions académiques et industrielles de renom, permettent au
            LRIT de réaliser des projets innovants et impactants, tant à
            l’échelle nationale qu’internationale.
          </p>
          <p className="text-white leading-relaxed text-justify mt-2">
            <b>N</b>otre laboratoire joue un rôle essentiel dans la formation, grâce à
            des cursus de master et de doctorat qui offrent aux étudiants un
            cadre stimulant et des opportunités uniques. Près de 90 % de nos
            diplômés poursuivent leurs études doctorales au LRIT ou dans
            d&apos;autres institutions prestigieuses. Nos doctorants bénéficient
            de conditions de travail optimales, soutenues par des programmes de
            bourses, des co-encadrements internationaux et des projets
            collaboratifs. Cette stratégie nous permet de former une génération
            de chercheurs de haut niveau, préparés à affronter les enjeux
            scientifiques de demain.
          </p>
          <p className="text-white leading-relaxed text-justify mt-2">
            <b>C</b>ette stratégie nous permet de former une génération de chercheurs
            de haut niveau, prêts à relever les défis scientifiques de demain.
          </p>
          <p className="text-white leading-relaxed text-justify mt-2">
            <b>C</b>haque année, le LRIT publie environ 40 articles dans des revues
            scientifiques de renom et présente plus de 50 travaux dans des
            conférences internationales prestigieuses. Ces performances
            reflètent l’engagement de nos équipes à produire des recherches de
            qualité et à contribuer activement à l’avancée des connaissances.
          </p>
          <p className="text-white leading-relaxed text-justify mt-2">
            Au <b>LRIT</b>, notre vision est claire : innover, former et collaborer
            pour façonner un avenir meilleur. Soutenus par nos chercheurs,
            étudiants et partenaires, nous continuons à faire du LRIT un
            catalyseur d’idées nouvelles et un acteur incontournable de la
            recherche scientifique et technologique.
          </p>
          <p className="text-white leading-relaxed text-center mt-2 font-bold">
            &quot;Ensemble, construisons un avenir d&apos;excellence et de progrès.&quot;
          </p>

          <div className="mt-6">
            <h3 className="text-white font-bold text-lg">Pr. Khalid Minaoui</h3>
            <p className="text-white">Directeur de LRIT</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MotDirecteur;
