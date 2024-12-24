"use client";

import React from "react";
import { GiGraduateCap } from "react-icons/gi";
import { Card, CardHeader } from "@/components/ui/card";
import theses from "@/data/theses.json";

const ThesesSoutenues = () => {
  return (
    <Card className="w-full overflow-y-auto custom-scrollbar">
      <CardHeader className="flex justify-center items-center gap-2 text-3xl font-bold bg-theses-header mx-0 my-0 mt-0">
        <GiGraduateCap className="h-11 w-11 text-white" />
        <div className="text-white">Thèses Soutenues</div>
      </CardHeader>
      <div className="p-8 overflow-auto rounded-lg shadow hidden md:block">
        <table className="w-full">
          <thead className="bg-gray-50 border-b-2 border-gray-200 text-blue-950">
            <tr>
              <th className="w-16 p-3 text-sm font-semibold tracking-wide text-left">Nom</th>
              <th className="w-96 p-3 text-sm font-semibold tracking-wide text-left">Intitulé de la thèse</th>
              <th className="w-10 p-3 text-sm font-semibold tracking-wide text-center">Année</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {theses.map((thesis, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-blue-200"}>
                <td className="max-w-28 p-3 text-sm text-gray-700 break-words whitespace-normal ">{thesis.nom}</td>
                <td className="p-3 text-sm text-gray-700">{thesis.intitule}</td>
                <td className="text-center p-3 text-sm text-gray-700">{thesis.annee}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default ThesesSoutenues;
