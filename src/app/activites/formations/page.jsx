"use client";

import Latex from "@/assets/logo/Latex.png"; 
import FPGA from "@/assets/logo/FPGA.png"; 
import advanceJava from "@/assets/logo/advanceJava.png"; 
import java from "@/assets/logo/java.jpg"; 
import oracle from "@/assets/logo/Oracle.png"; 
import MachineLearning from "@/assets/logo/MachineLearning.png"; 

import React from "react";
import Image from "next/image";
import {Card, CardContent, CardHeader } from "@/components/ui/card";
import {HiOutlineBookOpen} from "react-icons/hi";

const formations = () => {

  const trainings = [
    {
      id: 1,
      date: "2024",
      prof: "",
      title: "Latex",
      image: Latex, 
    },
    {
      id: 2,
      date: "2024",
      prof: "",
      title: "Machine Learning",
      image: MachineLearning, 
    },
    {
      id: 3,
      date: "7-15 Juillet 2007",
      prof: "Mr.	Brahim	EL	BHIRI	\n MR.	Mahmoud	Bouraoui",
      title: "Systèmes	Configurables	FPGA",
      image: FPGA, 
    },
    {
      id: 4,
      date: "15 Avril 2007",
      prof: "Mr	Ben	yahia	Mohamed",
      title: "Langage	JAVA	Avancé",
      image: advanceJava, 
    },
    {
      id: 5,
      date: "02 Juillet 2006",
      prof: "Hassanna	Cheikh	Malaynine",
      title: "Oracle",
      image: oracle, 
    },
    {
      id: 6,
      date: "24	février	2006",
      prof: "Mr.	Atman	JBARI",
      title: "Langage	JAVA",
      image: java, 
    },
];

  return (
    <Card className="w-full overflow-y-auto custom-scrollbar">
      <CardHeader className="flex justify-center items-center gap-2 text-3xl font-bold bg-formation-header mx-0 my-0 mt-0 border-primary border-b-4">
        <HiOutlineBookOpen className="h-11 w-11 text-white" />
        <div className="text-white">Formations</div>
      </CardHeader>
      <h4 className="text-center py-8 font-bold text-3xl text-blue-950">Formations</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {trainings.map((training) => (
          <div
            key={training.id}
            className="flex flex-col items-center justify-center rounded-lg shadow-lg bg-white p-6"
          >
            {/* Logo circulaire */}
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-300 flex items-center justify-center mb-4">
              <Image
                src={training.image}
                alt={training.name}
                width={96}
                height={96}
                className="object-contain"
              />
            </div>

            <h3 className="text-lg font-bold text-gray-800">{training.title}</h3>
            <p className="text-sm text-gray-600 text-center mt-2">
              {training.prof}
            </p>
            <p className="text-sm text-gray-600 text-center mt-2">
              {training.date}
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
};
export default formations;