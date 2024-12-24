"use client";

import React from "react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Search } from "lucide-react";
import axes from "@/data/axes.json";

const Recherche = () => {
  const PDF_FILE_URL = "";
  const downloadFileAtURL = (url) => {
    const aTag = document.createElement("a");
    aTage.href = url;
  };

  return (
    <Card className="w-full overflow-y-auto custom-scrollbar">
      <CardHeader className="flex justify-center items-center gap-2 text-3xl font-bold bg-formation-header mx-0 my-0 mt-0">
        <Search className="h-11 w-11 text-white" />
        <div className="text-white">Axes de recherche</div>
      </CardHeader>

      <CardContent className="grid-cols-8 justify-center items-center p-4">
        <Card className="flex justify-center items-center w-full overflow-y-auto custom-scrollbar">
          <div className="w-52 h-24 p-4 text-4xl bg-secondary text-center font-bold mr-2 border-b-[6px] border-white  text-white" >#</div>
          <div className="w-full h-24 p-4 text-4xl bg-secondary text-center font-bold border-b-[6px] border-white text-white">Axe </div>
        </Card>
       {axes.map((axe) => (
          <Card
            key={axe.id}
            className="flex justify-center items-center w-full overflow-y-auto custom-scrollbar"
          >
            <div className="w-52 h-24 p-4 text-4xl bg-transparent text-center font-bold mr-2 text-secondary-foreground">
              {axe.id}
            </div>
            <div className="w-full h-24 p-4 text-4xl bg-transparent font-bold text-secondary-foreground">
              {axe["Axes de recherche"]}
            </div>
          </Card>
        ))}
      </CardContent>
    </Card>
  );
};

export default Recherche;
