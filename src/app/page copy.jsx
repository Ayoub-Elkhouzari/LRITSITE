"use client";

import React, { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MdComputer, MdOutlineSubtitles } from "react-icons/md";
import { GiTeacher } from "react-icons/gi";
import { PiStudent } from "react-icons/pi";
import MotDirecteur from "../components/MotDirecteur";

const Home = () => {
  useEffect(() => {
    document.title = "LRIT"; 
  }, []);

  return (
    <>
      <Head>
        <meta name="description" content="Site web de LRIT" />
      </Head>

      {/* Header Section */}
      <Card className="w-full overflow-y-auto custom-scrollbar">
        <CardHeader className="flex flex-col justify-center items-center gap-4 text-3xl font-bold bg-acceuil-header">
          <MdComputer className="h-11 w-11 text-white" />
          <div className="text-center text-white">
            Laboratoire de Recherche Informatique et Télécommunications <br />
            LRIT
          </div>
          <div className="mt-8">
            <a
              className="bg-white px-4 py-2 text-sm text-blue-950 rounded hover:bg-gray-200"
              href="#contact-form"
            >
              CONTACTEZ-NOUS
            </a>
          </div>
        </CardHeader>
      </Card>

      {/* Mot du Directeur */}
      <section className="text-center">
        <h4 className="text-center py-8 font-bold text-3xl text-blue-950">MOT DU DIRECTEUR</h4>
        <MotDirecteur/>
      </section>

      {/* LRIT en chiffres */}
      <section className="text-center ">
        <h4 className="text-center py-8 font-bold text-3xl text-blue-950">LRIT EN CHIFFRES</h4>
      </section>
      <section className="pb-2 bg-LRIT-header"> 
        <CardContent className="flex justify-center gap-10 mt-6 mx-5 py-20">
          <StatCard icon={PiStudent} label="168 Étudiants" />
          <StatCard icon={GiTeacher} label="140 Enseignants" />
          <StatCard icon={MdOutlineSubtitles} label="2 Filières" />
          <StatCard icon={PiStudent} label="168 Doctorants" />
        </CardContent>
      </section>

      {/* Contact Section */}
      <h4 className="text-center py-8 font-bold text-3xl text-blue-950">
          CONTACTEZ-NOUS
      </h4>
      <section id="contact-form" className="py-8 bg-blue-950 opacity-90 w-1/2 flex items-center justify-center mx-auto rounded-lg mb-8">
        
        <CardContent className="flex justify-center items-center mt-4">
          <div className="w-96 bg-transparent p-4">
            <Input type="text" placeholder="Entrez votre nom complet" />
            <Input
              type="tel"
              placeholder="Entrez votre numéro de téléphone"
              className="mt-4"
            />
            <Input
              type="email"
              placeholder="Entrez votre e-mail"
              className="mt-4"
            />
            <textarea
              placeholder="Entrez votre message"
              className="mt-4 w-full border rounded p-2"
              rows="2"
            ></textarea>
            <Button
              type="submit"
              className="mt-4 w-full bg-yellow-500 hover:bg-yellow-600 text-white"
            >
              Envoyer
            </Button>
          </div>
        </CardContent>
      </section>
    </>
  );
};

// Composant réutilisable pour les statistiques
const StatCard = ({ icon: Icon, label }) => (
  <Card className="w-full p-4 flex justify-center items-center gap-4 rounded-lg hover:shadow-lg transition-all bg-transparent">
    <Icon className="h-10 w-10 text-white mr-5" />
    <div className="w-1 bg-white rounded-full h-16"></div>
    <span className="text-2xl text-white font-medium">{label}</span>
  </Card>
);

export default Home;