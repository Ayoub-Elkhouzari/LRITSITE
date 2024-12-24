"use client";
import bgisivc from "@/assets/logo/isivc.jpg"; 
import bgisivc2 from "@/assets/logo/isivc_V2.jpg"; 
import Morocco_gaming from "@/assets/logo/Morocco_gaming.jpg"; 
import ciquante from "@/assets/logo/50.jpg"; 
import urac2 from "@/assets/logo/URAC2.jpg"; 
import urac3 from "@/assets/logo/URAC3.jpg"; 
import React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { HiOutlinePresentationChartBar } from "react-icons/hi";

const Conferences = () => {

  const conferencesIN = [
    {
      id: 1,
      date: "27-30 Novembre 2018",
      location: "Rabat - Maroc",
      title: "The 9th International Symposium on Signal, Image, Video and Communications (ISIVC)",
      image: "", // Placez cette image dans le dossier `public`
    },
    {
      id: 2,
      date: "18-20 Mai 2022",
      location: "El Jadida - Maroc",
      title: "The 11th International Symposium on Signal, Image, Video and Communications (ISIVC)",
      image: bgisivc, // Utilisez directement l'import
    },
    {
      id: 3,
      date: "21-23 Mai 2024",
      location: "Marrakech - Maroc",
      title: "The 13th International Symposium on Signal, Image, Video and Communications (ISIVC)",
      image: bgisivc2, // Placez cette image dans le dossier `public`
    },
    {
      id: 4,
      date: "09-11 Novembre 2016",
      location: "Rabat - Maroc",
      title: "4th	International	Workshop	on	Advanced	Information	Systems	for	Enterprises",
      image: bgisivc2, // Placez cette image dans le dossier `public`
    },
    {
      id: 4,
      date: "13-15 Octobre 2011",
      location: "CasaBlanca - Maroc",
      title: "4th Workshop	on	Information	Technologies	and	Communication",
      image: "", // Placez cette image dans le dossier `public`
    },
    {
      id: 5,
      date: "30 Septembre 2010",
      location: "Rabat - Maroc",
      title: "5th	International	Symposium	on	Image/Video	Communications	over	fixed	and	mobile	networks",
      image: "", // Placez cette image dans le dossier `public`
    },
    {
      id: 5,
      date: "24-25 Decembre 2009",
      location: "Agadir - Maroc",
      title: "WorkShop	sur	les	Technologies	de	l'Information	et	de	la Communication",
      image: "", // Placez cette image dans le dossier `public`
    },
    {
      id: 6,
      date: "27-30 Octobre 2008",
      location: "Rabat - Maroc",
      title: "9th	African	Conference	on	Research	in	Computer Science	and	Applied	Mathematics",
      image: "", // Placez cette image dans le dossier `public`
    },
    {
      id: 7,
      date: "09-11 Juillet 2008",
      location: "Espagne",
      title: "4th	International	Symposium	on	Image/Video	Communications	over	fixed	and	mobile	networks",
      image: "", // Placez cette image dans le dossier `public`
    },
    {
      id: 8,
      date: "13-15 Septembre 2006",
      location: "Tunisie - Maroc",
      title: "3rd	International	Symposium	On	Image/Video	Communications	over	fixed	and	mobile	networks",
      image: "", // Placez cette image dans le dossier `public`
    },
    {
      id: 8,
      date: "13-15 Mars 2006",
      location: "Marrakech - Maroc",
      title: "IEEE-EURASIP	Second	International	Symposium	on Communications,	Control	and	Signal	Processing",
      image: "", // Placez cette image dans le dossier `public`
    },
  ];
  const conferencesNa = [
    {
      id: 3,
      date: "24-26 Mai 2024",
      location: "Rabat - Maroc",
      title: " Morocco gaming  ",
      image: Morocco_gaming, 
    },
    {
      id: 4,
      date: "16 Mai 2022",
      location: "Rabat - Maroc",
      title: " Cinquantenaire	LRIT	:	du	laboratoire	LEESA	au	LRIT	un demi	siècle	de	recherche,	formation	et	innovation	au	sein	de	l’UM5  ",
      image:ciquante , 
    },
    {
      id: 5,
      date: "27-29 Avril 2012",
      location: "Marrakech - Maroc",
      title: "1ere	édition	des	Journées	URAC	du	LRIT",
      image:"", 
    },
    {
      id: 6,
      date: "31 Mai 2013",
      location: "Rabat - Maroc",
      title: "2eme	édition	des	Journées	URAC	du	LRIT",
      image:urac2 , 
    },
    {
      id: 7,
      date: "28 Novembre 2015",
      location: "Rabat - Maroc",
      title: "3eme	édition	des	Journées	URAC	du	LRIT",
      image:urac3 , 
    },
    {
      id: 8,
      date: "11 Février 2017",
      location: "Rabat - Maroc",
      title: "Cérémonie	Hommage	au	Professeur	Driss	Aboutajedine",
      image:"" , 
    },
    {
      id: 9,
      date: "12 Juin 2023",
      location: "Rabat - Maroc",
      title: "Founders	Hub	:	chaque	idée	est	une	opportunité	d’innovation	:	Jennane	Ilias",
      image:"" , 
    },
    {
      id: 10,
      date: "16 Mai 2023",
      location: "Rabat - Maroc",
      title: "Seminar	of	Professeur	Pr.	Amal	El	Fallah	Seghrouchni intitled:	“	Approche	systémique	de	l’intelligence	artificielle",
      image:"" , 
    },
    {
      id: 11,
      date: "17 Avril 2018",
      location: "Rabat - Maroc",
      title: "SIGMA	signal	image",
      image:"" , 
    },
    {
      id: 12,
      date: "16-18 Juillet 2009",
      location: "Rabat - Maroc",
      title: " 1ere édition	des	Journées	Doctorales	en Technologies	de	l'Information	et	de	la	Communication",
      image:"" , 
    },
    {
      id: 13,
      date: "15-17 Juillet 2010",
      location: "Fes - Maroc",
      title: " 2eme édition	des	Journées	Doctorales	en Technologies	de	l'Information	et	de	la	Communication",
      image:"" , 
    },
    {
      id: 14,
      date: "07-09 Juillet 2011",
      location: "Tanger - Maroc",
      title: " 3eme édition	des	Journées	Doctorales	en Technologies	de	l'Information	et	de	la	Communication",
      image:"" , 
    },
  ];

  return (
    <Card className="w-full overflow-y-auto custom-scrollbar">
      <CardHeader className="flex justify-center items-center gap-2 text-3xl font-bold bg-conference-header mx-0 my-0 mt-0 border-primary border-b-4">
        <HiOutlinePresentationChartBar className="h-11 w-11 text-white" />
        <div className="text-white">Conférences</div>
      </CardHeader>
      <h4 className="text-center py-8 font-bold text-3xl text-blue-950">Conférences internationnales</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  px-6">
        {conferencesIN.map((conf) => (
          <div
            key={conf.id}
            className="relative h-[500px] rounded-lg overflow-hidden shadow-lg bg-white flex flex-col items-center justify-center"
          >
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
      <h4 className="text-center py-8 font-bold text-3xl text-blue-950">Conférences nationnales</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-8 px-6">
        {conferencesNa.map((conf) => (
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

export default Conferences;
