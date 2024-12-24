"use client";

import React from "react";
import lrt from "@/assets/logo/LRT.jpg";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { FaBookOpenReader, FaUser, FaUserClock } from "react-icons/fa6";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { GiGraduateCap } from "react-icons/gi";
import { User } from "lucide-react";
import { PiStudentBold } from "react-icons/pi";
// const names = [
//     "ABABSSI,SALMA",
//     "ADIM,KHADIJA",
//     "AFARTASS,SOUMIA",
//     "AGUILI,JILALI",
//     "AIT EL HAJ,Youssef",
//     "ASSADI,MOUAD",
//     "AZIACH,NOUHAILA",
//     "AZZI,MOHAMED-ALI",
//     "BAKKALI,REDA",
//     "BAZAY,Fatima ez-zahraa",
//     "BAZHAR,RACHID",
//     "BELINGA ANGE,Gabriel",
//     "BENALLA,AIMAN",
//     "BENDAHMANE,Nada",
//     "BENLAMKADEM,AYOUB",
//     "BERHAL,Bahia",
//     "BEZZAZI,Fadwa",
//     "BOUALAM,M'HAMED",
//     "BOUDMEN,Khadija",
//     "BOUJMIRAZ,SALMA",
//     "BOUKBIR,Halima",
//     "BOURBIA,Salima",
//     "BOUZAIDI TIALI,Amine",
//     "BOUZAIDI TIALI,IMANE",
//     "BOUZID,Hamza",
//     "BZZOU,MOUNIR",
//     "CHAJARI,ISSAM",
//     "CHEMAOU,DOHA",
//     "DAALI,NOUSSAIBA",
//     "ECHIGUER,KHALID",
//     "EDDAOUDI,Zahra",
//     "EL ANZOUL ,Nouhayla",
//     "EL BELGHITI,YOUNES",
//     "EL FAZNI,Hicham",
//     "EL GUAREH,IBTISSAM",
//     "EL HAMZI,Saida",
//     "EL HOUSNA,IMANE",
//     "EL IDRISSI,ZAKARIA",
//     "EL MOHAMADI,HOUDA",
//     "EL MOUTAOUAKKIL,ABDELHAK",
//     "EL OMARI,MOUAD",
//     "EL YOUSSOUFI,MARYAM",
//     "ELALAOUY ELMHAMDI,REDA",
//     "ELAZRI,OTHMANE",
//     "ERAFII,WALID",
//     "EZAHIDI,HOUDA",
//     "FADDANI,ZINEB",
//     "FAKIHI,ANAS",
//     "FRAIDI,AYOUB",
//     "GHRIB,ABDESSAMAD",
//     "GOUNINE,Yassine",
//     "HADDIOUI ,Yassine",
//     "HADRI,Habiba",
//     "HALAL,AMINE",
//     "HITRANE,CHAIMAE",
//     "HMAIDA,Sanaa",
//     "HSMMIUD,Ayoub",
//     "IATTA,Aicha",
//     "IBENIAICH,Mohammed",
//     "IDMOUDA,Habib",
//     "JAMAI,ABDELALI",
//     "JEBBAR,IMANE",
//     "KATIBA,IMAD",
//     "LAAZOUFI,Abdelouahed",
//     "LAFHEL,Majda",
//     "LAGHBISSI,SAFAA",
//     "LAKRAD,YOUSSEF",
//     "LAMAALLAOUI,FATIHA",
//     "LAOULIDI LAHKIM,Imad",
//     "LAZAAR,ZAKARIA",
//     "LAZAAR,AHMED",
//     "LICER,Marwa",
//     "MALIKI,WISSAL",
//     "MANFOUCHI,BOUCHRA",
//     "MASSOUAD,NOUHAILA",
//     "MAZIGHI,Abdellah",
//     "MELLIANI,ASMAE",
//     "MEZIANE,KARIMA",
//     "MOHIDDINE,MERYEM",
//     "MOKFI,CHAIMA",
//     "NAFI,SALAHEDDINE",
//     "NAHRI,DOHA",
//     "NAJI,Nidal",
//     "NKILA ,Bouchra",
//     "NZOBANTOU,EMMANUEL HEGIRE",
//     "ONQANI,YOUSSEF",
//     "ONTSIRA,LOICK GHISSE EXAUCE",
//     "OUNINISSE,NOUR-EDDINE",
//     "QADDOUR,Meryem",
//     "RACHID,IMANE",
//     "REGRAGUI,YOUSEF",
//     "REZQI,LALLA KHADIJA",
//     "Rhefrali,Najwa",
//     "SADIKI,Siham",
//     "SALHI,ABDERRAHMAN",
//     "SAOUIDI,ILYASS",
//     "SEBBANE ,Chifaa",
//     "SENANE,DOUHA",
//     "SENNOUNI,SARA",
//     "SIYAH,YOUSSEF",
//     "TCHAGAFO,Nazif",
//     "TOUMI,NAWAR",
//     "ZAGHLOUN,WAFAE",
//     "ZAHID ,Meryem",
//     "ZEGLAZI,ZAYD",
//     "ZRAIDI,Mourad",
//     "ZRIMEK,ZAKARIAE",
//   ];

//   function generateDivs(names) {
//     let result = "";
//     for (let i = 0; i < names.length; i += 4) {
//       const group = names.slice(i, i + 4);
//       result += `<div className=\"flex justify-center gap-3 mb-3\">`;
//       group.forEach((name) => {
//         const [lastName, firstName] = name.split(",");
//         result += `
//           <Card className=\"flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300\">
//             <PiStudentBold className=\"cursor-pointer h-8 w-8 hover:text-primary\" />
//             <div>
//               <Link href=\"#\" className=\"text-2xl font-bold hover:text-primary\">
//                 ${lastName} ${firstName}
//               </Link>
//             </div>
//           </Card>`;
//       });
//       result += `</div>`;
//     }
//     return result;
//   }

//   console.log(generateDivs(names));

const ThesesCompleted = () => {
  return (
    <Card className="w-full overflow-y-auto custom-scrollbar">
      <CardHeader className="flex bg-membres-header justify-center items-center gap-2 text-3xl font-bold  mx-4 mt-2 border-primary border-b-4">
        {/* <div className="flex justify-center items-center rounded-md gap-2 bg-[#e2e1e1] px-96 py-32 w-full h-full"> */}
          <PiStudentBold className="h-11 w-11 text-white" />
          <div className="text-white">Thèses soutenues</div>
        {/* </div> */}
      </CardHeader>
      <CardContent className=" p-4 w-full">
        <div className="flex justify-center gap-3 mb-3">
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                ABABSSI SALMA
              </Link>
            </div>
          </Card>
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                ADIM KHADIJA
              </Link>
            </div>
          </Card>
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                AFARTASS SOUMIA
              </Link>
            </div>
          </Card>
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                AGUILI JILALI
              </Link>
            </div>
          </Card>
        </div>
        <div className="flex justify-center gap-3 mb-3">
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                AIT EL HAJ Youssef
              </Link>
            </div>
          </Card>
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                ASSADI MOUAD
              </Link>
            </div>
          </Card>
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                AZIACH NOUHAILA
              </Link>
            </div>
          </Card>
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                AZZI MOHAMED-ALI
              </Link>
            </div>
          </Card>
        </div>
        <div className="flex justify-center gap-3 mb-3">
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                BAKKALI REDA
              </Link>
            </div>
          </Card>
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                BAZAY Fatima ez-zahraa
              </Link>
            </div>
          </Card>
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                BAZHAR RACHID
              </Link>
            </div>
          </Card>
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                BELINGA ANGE Gabriel
              </Link>
            </div>
          </Card>
        </div>
        <div className="flex justify-center gap-3 mb-3">
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                BENALLA AIMAN
              </Link>
            </div>
          </Card>
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                BENDAHMANE Nada
              </Link>
            </div>
          </Card>
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                BENLAMKADEM AYOUB
              </Link>
            </div>
          </Card>
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                BERHAL Bahia
              </Link>
            </div>
          </Card>
        </div>
        <div className="flex justify-center gap-3 mb-3">
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                BEZZAZI Fadwa
              </Link>
            </div>
          </Card>
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                BOUALAM M&apos;HAMED
              </Link>
            </div>
          </Card>
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                BOUDMEN Khadija
              </Link>
            </div>
          </Card>
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                BOUJMIRAZ SALMA
              </Link>
            </div>
          </Card>
        </div>
        <div className="flex justify-center gap-3 mb-3">
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                BOUKBIR Halima
              </Link>
            </div>
          </Card>
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                BOURBIA Salima
              </Link>
            </div>
          </Card>
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                BOUZAIDI TIALI Amine
              </Link>
            </div>
          </Card>
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                BOUZAIDI TIALI IMANE
              </Link>
            </div>
          </Card>
        </div>
        <div className="flex justify-center gap-3 mb-3">
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                BOUZID Hamza
              </Link>
            </div>
          </Card>
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                BZZOU MOUNIR
              </Link>
            </div>
          </Card>
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                CHAJARI ISSAM
              </Link>
            </div>
          </Card>
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                CHEMAOU DOHA
              </Link>
            </div>
          </Card>
        </div>
        <div className="flex justify-center gap-3 mb-3">
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                DAALI NOUSSAIBA
              </Link>
            </div>
          </Card>
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                ECHIGUER KHALID
              </Link>
            </div>
          </Card>
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                EDDAOUDI Zahra
              </Link>
            </div>
          </Card>
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                EL ANZOUL Nouhayla
              </Link>
            </div>
          </Card>
        </div>
        <div className="flex justify-center gap-3 mb-3">
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                EL BELGHITI YOUNES
              </Link>
            </div>
          </Card>
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                EL FAZNI Hicham
              </Link>
            </div>
          </Card>
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                EL GUAREH IBTISSAM
              </Link>
            </div>
          </Card>
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                EL HAMZI Saida
              </Link>
            </div>
          </Card>
        </div>
        <div className="flex justify-center gap-3 mb-3">
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                EL HOUSNA IMANE
              </Link>
            </div>
          </Card>
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                EL IDRISSI ZAKARIA
              </Link>
            </div>
          </Card>
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                EL MOHAMADI HOUDA
              </Link>
            </div>
          </Card>
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                EL MOUTAOUAKKIL ABDELHAK
              </Link>
            </div>
          </Card>
        </div>
        <div className="flex justify-center gap-3 mb-3">
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                EL OMARI MOUAD
              </Link>
            </div>
          </Card>
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                EL YOUSSOUFI MARYAM
              </Link>
            </div>
          </Card>
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                ELALAOUY ELMHAMDI REDA
              </Link>
            </div>
          </Card>
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                ELAZRI OTHMANE
              </Link>
            </div>
          </Card>
        </div>
        <div className="flex justify-center gap-3 mb-3">
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                ERAFII WALID
              </Link>
            </div>
          </Card>
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                EZAHIDI HOUDA
              </Link>
            </div>
          </Card>
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                FADDANI ZINEB
              </Link>
            </div>
          </Card>
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                FAKIHI ANAS
              </Link>
            </div>
          </Card>
        </div>
        <div className="flex justify-center gap-3 mb-3">
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                FRAIDI AYOUB
              </Link>
            </div>
          </Card>
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                GHRIB ABDESSAMAD
              </Link>
            </div>
          </Card>
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                GOUNINE Yassine
              </Link>
            </div>
          </Card>
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                HADDIOUI Yassine
              </Link>
            </div>
          </Card>
        </div>
        <div className="flex justify-center gap-3 mb-3">
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                HADRI Habiba
              </Link>
            </div>
          </Card>
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                HALAL AMINE
              </Link>
            </div>
          </Card>
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                HITRANE CHAIMAE
              </Link>
            </div>
          </Card>
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                HMAIDA Sanaa
              </Link>
            </div>
          </Card>
        </div>
        <div className="flex justify-center gap-3 mb-3">
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                HSMMIUD Ayoub
              </Link>
            </div>
          </Card>
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                IATTA Aicha
              </Link>
            </div>
          </Card>
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                IBENIAICH Mohammed
              </Link>
            </div>
          </Card>
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                IDMOUDA Habib
              </Link>
            </div>
          </Card>
        </div>
        <div className="flex justify-center gap-3 mb-3">
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                JAMAI ABDELALI
              </Link>
            </div>
          </Card>
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                JEBBAR IMANE
              </Link>
            </div>
          </Card>
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                KATIBA IMAD
              </Link>
            </div>
          </Card>
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                LAAZOUFI Abdelouahed
              </Link>
            </div>
          </Card>
        </div>
        <div className="flex justify-center gap-3 mb-3">
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                LAFHEL Majda
              </Link>
            </div>
          </Card>
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                LAGHBISSI SAFAA
              </Link>
            </div>
          </Card>
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                LAKRAD YOUSSEF
              </Link>
            </div>
          </Card>
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                LAMAALLAOUI FATIHA
              </Link>
            </div>
          </Card>
        </div>
        <div className="flex justify-center gap-3 mb-3">
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                LAOULIDI LAHKIM Imad
              </Link>
            </div>
          </Card>
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                LAZAAR ZAKARIA
              </Link>
            </div>
          </Card>
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                LAZAAR AHMED
              </Link>
            </div>
          </Card>
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                LICER Marwa
              </Link>
            </div>
          </Card>
        </div>
        <div className="flex justify-center gap-3 mb-3">
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                MALIKI WISSAL
              </Link>
            </div>
          </Card>
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                MANFOUCHI BOUCHRA
              </Link>
            </div>
          </Card>
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                MASSOUAD NOUHAILA
              </Link>
            </div>
          </Card>
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                MAZIGHI Abdellah
              </Link>
            </div>
          </Card>
        </div>
        <div className="flex justify-center gap-3 mb-3">
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                MELLIANI ASMAE
              </Link>
            </div>
          </Card>
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                MEZIANE KARIMA
              </Link>
            </div>
          </Card>
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                MOHIDDINE MERYEM
              </Link>
            </div>
          </Card>
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                MOKFI CHAIMA
              </Link>
            </div>
          </Card>
        </div>
        <div className="flex justify-center gap-3 mb-3">
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                NAFI SALAHEDDINE
              </Link>
            </div>
          </Card>
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                NAHRI DOHA
              </Link>
            </div>
          </Card>
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                NAJI Nidal
              </Link>
            </div>
          </Card>
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                NKILA Bouchra
              </Link>
            </div>
          </Card>
        </div>
        <div className="flex justify-center gap-3 mb-3">
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                NZOBANTOU EMMANUEL HEGIRE
              </Link>
            </div>
          </Card>
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                ONQANI YOUSSEF
              </Link>
            </div>
          </Card>
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                ONTSIRA LOICK GHISSE EXAUCE
              </Link>
            </div>
          </Card>
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                OUNINISSE NOUR-EDDINE
              </Link>
            </div>
          </Card>
        </div>
        <div className="flex justify-center gap-3 mb-3">
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                QADDOUR Meryem
              </Link>
            </div>
          </Card>
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                RACHID IMANE
              </Link>
            </div>
          </Card>
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                REGRAGUI YOUSEF
              </Link>
            </div>
          </Card>
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                REZQI LALLA KHADIJA
              </Link>
            </div>
          </Card>
        </div>
        <div className="flex justify-center gap-3 mb-3">
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                Rhefrali Najwa
              </Link>
            </div>
          </Card>
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                SADIKI Siham
              </Link>
            </div>
          </Card>
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                SALHI ABDERRAHMAN
              </Link>
            </div>
          </Card>
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                SAOUIDI ILYASS
              </Link>
            </div>
          </Card>
        </div>
        <div className="flex justify-center gap-3 mb-3">
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                SEBBANE Chifaa
              </Link>
            </div>
          </Card>
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                SENANE DOUHA
              </Link>
            </div>
          </Card>
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                SENNOUNI SARA
              </Link>
            </div>
          </Card>
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                SIYAH YOUSSEF
              </Link>
            </div>
          </Card>
        </div>
        <div className="flex justify-center gap-3 mb-3">
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                TCHAGAFO Nazif
              </Link>
            </div>
          </Card>
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                TOUMI NAWAR
              </Link>
            </div>
          </Card>
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                ZAGHLOUN WAFAE
              </Link>
            </div>
          </Card>
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                ZAHID Meryem
              </Link>
            </div>
          </Card>
        </div>
        <div className="flex justify-center gap-3 mb-3">
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                ZEGLAZI ZAYD
              </Link>
            </div>
          </Card>
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                ZRAIDI Mourad
              </Link>
            </div>
          </Card>
          <Card className="flex justify-start items-center gap-10 w-full h-24 p-4 rounded hover:border-primary hover:border-2 transition-all duration-300">
            <PiStudentBold className="cursor-pointer h-8 w-8 hover:text-primary" />
            <div>
              <Link href="#" className="text-2xl font-bold hover:text-primary">
                ZRIMEK ZAKARIAE
              </Link>
            </div>
          </Card>
        </div>
      </CardContent>
    </Card>
  );
};

export default ThesesCompleted;
