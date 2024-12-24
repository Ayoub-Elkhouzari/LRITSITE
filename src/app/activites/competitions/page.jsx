"use client";

import innovationRobotic from "@/assets/logo/innovationRobotic.jpg"; 
import ihealth from "@/assets/logo/IHEalth.jpg"; 
import letChallenge from "@/assets/logo/letChallenge.jpg"; 
import React from "react";
import Image from "next/image";
import {Card, CardContent, CardHeader } from "@/components/ui/card";
import {FaTrophy} from "react-icons/fa";

const competitions = () => {

  const competitions = [
    {
      id: 1,
      date: "2024",
      location: "",
      title: "International eHealth Forum",
      image: ihealth,
    },
    {
      id: 2,
      date: "02 Juillet 2022",
      location: "Salé - Maroc",
      title: "Innovation & Robotics Competition and awards",
      image: innovationRobotic, 
    },
    {
      id: 3,
      date: "2022",
      location: "El Jadida - Maroc",
      title: "Let's Challenge Create",
      image: letChallenge,
    },
];

  return (
    <Card className="w-full overflow-y-auto custom-scrollbar">
      <CardHeader className="flex justify-center items-center gap-2 text-3xl font-bold bg-competition-header mx-0 my-0 mt-0 border-primary border-b-4">
        <FaTrophy className="h-11 w-11 text-white" />
        <div className="text-white">Compétitions</div>
      </CardHeader>
      <h4 className="text-center py-8 font-bold text-3xl text-blue-950">Compétitions</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  px-6 pb-6">
        {competitions.map((conf) => (
          <div
            key={conf.id}
            className="relative h-[500px] rounded-lg overflow-hidden shadow-lg bg-white flex flex-col items-center justify-center">
            {/* Image d'arrière-plan */}
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={conf.image} 
                alt={conf.title}
                fill
                quality={100}
              />
            </div>
            {/* Contenu */}
            <div className="w-full h-2/5 bg-blue-600 text-white p-4 flex flex-col justify-center">
              <p className="text-sm">{conf.date}</p>
              <p className="text-sm">{conf.location}</p>
              <h2 className="text-lg font-bold mt-2">{conf.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
export default competitions;