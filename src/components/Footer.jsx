"use client";

import Link from "next/link";
import { Card, CardContent, CardFooter } from "./ui/card";
import {
  Home,
  Book,
  Users,
  GraduationCap,
  Activity,
  Map,
  Phone,
  Mail,
  HomeIcon
} from "lucide-react"; // Importing Lucide icons

export default function Footer() {
  return (
    <Card
      className="w-full text-white z-10 bg-membres-header"
      style={{ height: "auto" }}
    >
      <CardContent className="flex flex-wrap justify-center  p-4 bg-footer-header">
        <Card className="w-full flex justify-center items-center text-white bg-transparent z-10 border-transparent">
          <Card className="flex justify-between items-start gap-10 w-full border-transparent text-white bg-transparent z-10">
            {/* Links */}
            <Card className="w-full border-transparent text-white bg-transparent z-10">
              <h1 className="text-xl font-bold mb-2 border-white"> Liens </h1>
              <div className="h-1 w-36 rounded-full bg-white mb-3"></div>
              <div className="flex-col justify-start">
              <ul className="mb-1 flex gap-2">
                  <HomeIcon />
                  <Link className="hover:font-bold" href="/">
                    Acceuil
                  </Link>
                </ul>
                <ul className="mb-1 flex gap-2">
                  <Book />
                  <Link className="hover:font-bold" href="/formations">
                    Formations
                  </Link>
                </ul>
                <ul className="mb-1 flex gap-2">
                  <Users />
                  <Link className="hover:font-bold" href="/membres">
                    Membres
                  </Link>
                </ul>
                <ol className="mb-1 flex gap-2">
                  <GraduationCap />
                  <Link className="hover:font-bold" href="/theses">
                    Thèses
                  </Link>
                </ol>
                <ul className="mb-1 flex gap-2">
                  <Activity />
                  <Link className="hover:font-bold" href="/activities">
                    Activities
                  </Link>
                </ul>
              </div>
            </Card>
            {/* <div className="h-60 w-60 rounded-full bg-white mb-3"></div> */}
            {/* ContactUs */}
            <Card className="w-full border-transparent text-white bg-transparent z-10">
              <h1 className="text-xl font-bold mb-2 border-white">
                {" "}
                Contactez-nous{" "}
              </h1>
              <div className="h-1 w-60 rounded-full bg-white mb-3"></div>
              <div className="flex-col justify-start">
                <ul className="mb-1 flex gap-2">
                  <Map />
                    4 Avenue Ibn Battouta B.P. 1014 RP, Rabat
                </ul>
                <ul className="mb-1 flex gap-2">
                  <Phone />
                   + 212 5 37 77 18 34
                </ul>
                <ul className="mb-1 flex gap-2">
                  <Mail />
                  decanat@fsr.ac.ma
                </ul>
              </div>
            </Card>
          </Card>
          {/* <Card className="w-full text-white bg-transparent z-10"> */}
          <iframe
            className="w-full flex justify-end"
            title="maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.3542784772527!2d-6.840819084782683!3d34.00796728460747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76c80825a1893%3A0xbf497c49ab56246a!2sFaculty%20of%20Sciences%20Rabat!5e0!3m2!1sen!2sma!4v1698084683736!5m2!1sen!2sma"
            width="50%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
          {/* </Card> */}
        </Card>
        <div className="w-full h-1 rounded-full bgwhite mt-3"></div>
        <p className="mt-2">Copyright 2024 All Rights Reserved By <strong>LRIT</strong></p>
      </CardContent>
    </Card>
  );
}
