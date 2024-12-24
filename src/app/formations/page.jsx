"use client";

import React from "react";
import lrt from "@/assets/logo/Licence_pic.png";
import mit from "@/assets/logo/Master_pic.png";
<<<<<<< HEAD

import Image from "next/image";
import { Card, CardHeader } from "@/components/ui/card";
import { MdSchool } from "react-icons/md";

const Formations = () => {
  return (
    <Card className="w-full overflow-y-auto custom-scrollbar">
      <CardHeader className="flex justify-center items-center gap-2 text-3xl font-bold bg-formation-header mx-0 my-0 mt-0">
        <MdSchool className="h-11 w-11 text-white" />
        <div className="text-white">Formation</div>
      </CardHeader>
      <section className="text-center">
        <h4 className="text-center py-8 font-bold text-3xl text-blue-950">
          FORMATION
        </h4>
      </section>

      <div className="flex justify-center items-center p-4">
        <div className="w-full h-96 max-w-2xl bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-blue-900 p-4 text-white w-1/2 rounded-tr rounded-tl">
            <h2 className="text-lg font-semibold">LICENCE PROFESSIONNELLE</h2>
            <h2 className="text-lg font-semibold">2001 - 2023</h2>
          </div>
          {/* Body */}
          <div className="flex flex-col lg:flex-row">
            {/* Image Section */}
            <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
              <Image
                src={lrt}
                alt="Licence"
                width={350}
                className="object-cover"
              />
            </div>
            {/* Text Section */}
            <div className="lg:w-1/2 lg:pl-4 mt-0">
              <h3 className="text-blue-900 font-medium text-lg mb-2">
                Réseaux et télécommunication
              </h3>
              <p className="text-sm text-gray-600 mb-6">
                <strong>Coordonnateur :</strong>{" "}
                <span className="text-gray-600 font-bold">
                  Pr. Khalid MINAOUI
                </span>
              </p>
              <p className="text-gray-600 text-sm justify-text-custom mr-2">
                Cette formation forme les étudiants en double compétence
                informatique et Télécommunications. Les deux premières semaines
                du S1 sont dédiées à une mise à niveau, suivies d’enseignements
                fondamentaux en STIC (S7-S8) et d’une spécialisation en
                recherche au S3.
              </p>

              {/* Button */}
              <a href="/MIT.pdf" download="MIT">
                <div class="flex items-center justify-center mt-10">
                  <button class="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded inline-flex items-center">
                    <svg
                      class="w-4 h-4 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="white"
                    >
                      <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                    </svg>
                    <span>Consulter</span>
                  </button>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center p-4">
        <div className="w-full h-96 max-w-2xl bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-blue-900 p-4 text-white w-1/2 rounded-tr rounded-tl">
            <h2 className="text-lg font-semibold">LICENCE</h2>
          </div>
          {/* Body */}
          <div className="flex flex-col lg:flex-row">
            {/* Image Section */}
            <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
              <Image
                src={lrt}
                alt="Licence"
                width={350}
                className="object-cover"
              />
            </div>
            {/* Text Section */}
            <div className="lg:w-1/2 lg:pl-4 mt-0">
              <h3 className="text-blue-900 font-medium text-lg mb-2">
                Réseaux et télécommunication
              </h3>
              <p className="text-sm text-gray-600 mb-6">
                <strong>Coordonnateur :</strong>{" "}
                <span className="text-gray-600 font-bold">
                  Pr. Khalid MINAOUI
                </span>
              </p>
              <p className="text-gray-600 text-sm justify-text-custom mr-2">
                Cette formation forme les étudiants en double compétence
                informatique et Télécommunications. Les deux premières semaines
                du S1 sont dédiées à une mise à niveau, suivies d’enseignements
                fondamentaux en STIC (S7-S8) et d’une spécialisation en
                recherche au S3.
              </p>

              {/* Button */}
              <a href="/MIT.pdf" download="MIT">
                <div class="flex items-center justify-center mt-10">
                  <button class="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded inline-flex items-center">
                    <svg
                      class="w-4 h-4 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="white"
                    >
                      <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                    </svg>
                    <span>Consulter</span>
                  </button>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center p-4">
        <div className="w-full h-96 max-w-2xl bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-blue-900 p-4 text-white w-1/2 rounded-tr rounded-tl">
            <h2 className="text-lg font-semibold">MASTER</h2>
          </div>
          {/* Body */}
          <div className="flex flex-col lg:flex-row">
            {/* Image Section */}
            <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
              <Image
                src={mit}
                alt="Licence"
                width={350}
                className="object-cover"
              />
            </div>
            {/* Text Section */}
            <div className="lg:w-1/2 lg:pl-4 mt-0">
              <h3 className="text-blue-900 font-medium text-lg mb-2">
                Informatique et Télécommunications
              </h3>
              <p className="text-sm text-gray-600 mb-6">
                <strong>Coordonnateur :</strong>{" "}
                <span className="text-gray-600 font-bold">
                  Pr. Khalid MINAOUI
                </span>
              </p>
              <p className="text-gray-600 text-sm justify-text-custom mr-2">
                Cette formation forme les étudiants en double compétence
                informatique et Télécommunications. Les deux premières semaines
                du S1 sont dédiées à une mise à niveau, suivies d’enseignements
                fondamentaux en STIC (S7-S8) et d’une spécialisation en
                recherche au S3.
              </p>

              {/* Button */}
              <div class="flex items-center justify-center mt-10">
                <button class="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded inline-flex items-center">
                  <svg
                    class="w-4 h-4 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="white"
                  >
                    <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                  </svg>
                  <span>Consulter</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
=======
//import mit_brochure from "@/assets/Document/MIT.pdf";

import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { MdSchool } from "react-icons/md";
import { MdFileDownload } from "react-icons/md";

const Formations = () => {

  const PDF_FILE_URL = ''
  const downloadFileAtURL = (url) => {
    const aTag = document.createElement('a')
    aTage.href = url 
  }  

  return (
    <Card className="w-full overflow-y-auto custom-scrollbar">
      <CardHeader className="flex justify-center items-center gap-2 text-3xl font-bold bg-formation-header mx-0 my-0 mt-0">
        <MdSchool className="h-11 w-11 text-white" />
        <div className="text-white">Formation</div>
      </CardHeader>
      <section className="text-center">
      <h4 className="text-center py-8 font-bold text-3xl text-blue-950">FORMATION</h4>
      </section>

    <div className="flex justify-center items-center p-4">
      <div className="w-full h-96 max-w-2xl bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-blue-900 p-4 text-white w-1/2 rounded-tr rounded-tl">
          <h2 className="text-lg font-semibold">LICENCE</h2>
        </div>
        {/* Body */}
        <div className="flex flex-col lg:flex-row">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
            <Image
              src= {lrt} 
              alt="Licence"
              width={350}
              className="object-cover"
            />
          </div>
          {/* Text Section */}
          <div className="lg:w-1/2 lg:pl-4 mt-0">
            <h3 className="text-blue-900 font-medium text-lg mb-2">
              Réseaux et télécommunication
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              <strong>Coordonnateur :</strong>{" "}
              <span className="text-gray-600 font-bold">Pr. Khalid MINAOUI</span>
            </p>
            <p className="text-gray-600 text-sm justify-text-custom mr-2">
              Ce Master forme les étudiants en double compétence informatique et
              Télécommunications. Les deux premières semaines du S1 sont dédiées
              à une mise à niveau, suivies d’enseignements fondamentaux en STIC
              (S7-S8) et d’une spécialisation en recherche au S3.
            </p>

            {/* Button */}
            <a href="/MIT.pdf" download = "MIT">
            <div class="flex items-center justify-center mt-10">
            <button 
            class="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded inline-flex items-center">
            <svg class="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white">
            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/>
            </svg>
            <span>Télécharger</span>
            </button>
          </div>
          </a>
        </div>
      </div>
    </div>
    </div>

    <div className="flex justify-center items-center p-4">
      <div className="w-full h-96 max-w-2xl bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-blue-900 p-4 text-white w-1/2 rounded-tr rounded-tl">
          <h2 className="text-lg font-semibold">MASTER</h2>
        </div>
        {/* Body */}
        <div className="flex flex-col lg:flex-row">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
            <Image
              src= {mit} 
              alt="Licence"
              width={350}
              className="object-cover"
            />
          </div>
          {/* Text Section */}
          <div className="lg:w-1/2 lg:pl-4 mt-0">
            <h3 className="text-blue-900 font-medium text-lg mb-2">
             Informatique et Télécommunications
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              <strong>Coordonnateur :</strong>{" "}
              <span className="text-gray-600 font-bold">Pr. Khalid MINAOUI</span>
            </p>
            <p className="text-gray-600 text-sm justify-text-custom mr-2">
              Ce Master forme les étudiants en double compétence informatique et
              Télécommunications. Les deux premières semaines du S1 sont dédiées
              à une mise à niveau, suivies d’enseignements fondamentaux en STIC
              (S7-S8) et d’une spécialisation en recherche au S3.
            </p>

            {/* Button */}
            <div class="flex items-center justify-center mt-10">
            <button class="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded inline-flex items-center">
            <svg class="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white">
            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/>
            </svg>
            <span>Télécharger</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
>>>>>>> 539ce03bd883e6b2cf343da50fff2d676f5687aa
      {/*
      <CardContent className="flex justify-between p-4">
        <Image src={lrt} alt="alt" width={1500} height={1000} className="h-full w-full"/>
      </CardContent>*/}
    </Card>
  );
};

export default Formations;
