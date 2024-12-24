"use client";

import React from "react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ChartNoAxesCombined, Search } from "lucide-react";
import axes from "@/data/axes.json";
import { Chart1 } from "@/components/charts/barchart1";
import { Chart2 } from "@/components/charts/barchart2";
import { Chart3 } from "@/components/charts/barchart3";
import { Chart4 } from "@/components/charts/barchart4";
import { Chart5 } from "@/components/charts/barchart5";
import { Chart6 } from "@/components/charts/barchart6";
import { Chart7 } from "@/components/charts/barchart7";
import { Chart8 } from "@/components/charts/barchart8";
const Recherche = () => {
  const PDF_FILE_URL = "";
  const downloadFileAtURL = (url) => {
    const aTag = document.createElement("a");
    aTage.href = url;
  };

  return (
    <Card className="w-full overflow-y-auto custom-scrollbar">
      <CardHeader className="flex justify-center items-center gap-2 text-3xl font-bold bg-formation-header mx-0 my-0 mt-0">
        <ChartNoAxesCombined className="h-11 w-11 text-white" />

        <div className="text-white">Statistiques</div>
      </CardHeader>

      <CardContent className="grid-cols-8 justify-center items-center p-4">
        <Card className="justify-start items-center w-full overflow-y-auto custom-scrollbar rounded-lg">
          <CardHeader className="flex justify-center items-center gap-2 text-3xl font-bold mx-0 my-0 mt-0 text-secondary-foreground border-b-4 border-secondary-foreground hover:text-primary cursor-pointer">
            Répartition Globale des Publications par Catégorie (2006-2024)
          </CardHeader>
          <Chart1 />
        </Card>
        <Card className="justify-start items-center w-full overflow-y-auto custom-scrollbar rounded-lg">
          <CardHeader className="flex justify-center items-center gap-2 text-3xl font-bold mx-0 my-0 mt-0 text-secondary-foreground border-b-4 border-secondary-foreground hover:text-primary cursor-pointer">
            Évolution Annuelle des Publications dans des Journaux
            Scientifiques (2006-2024)
          </CardHeader>
          <Chart2 />
        </Card>
        <Card className="justify-start items-center w-full overflow-y-auto custom-scrollbar rounded-lg">
          <CardHeader className="flex justify-center items-center gap-2 text-3xl font-bold mx-0 my-0 mt-0 text-secondary-foreground border-b-4 border-secondary-foreground hover:text-primary cursor-pointer">
            Évolution du Nombre d&apos;Articles Présentés en Conférences (2006-2024)
          </CardHeader>{" "}
          <Chart3 />
        </Card>
        <Card className="justify-start items-center w-full overflow-y-auto custom-scrollbar rounded-lg">
          <CardHeader className="flex justify-center items-center gap-2 text-3xl font-bold mx-0 my-0 mt-0 text-secondary-foreground border-b-4 border-secondary-foreground hover:text-primary cursor-pointer">
          Contribution aux Séries de Livres Académiques par Année (2006-2024)
          </CardHeader>{" "}
          <Chart4 />
        </Card>
        <Card className="justify-start items-center w-full overflow-y-auto custom-scrollbar mt-4 rounded-lg">
          <CardHeader className="flex justify-center items-center gap-2 text-3xl font-bold mx-0 my-0 mt-0 text-secondary-foreground border-b-4 border-secondary-foreground">
          Chronologie des Articles Publiés (2006-2024)
          </CardHeader>
          <Chart5 />
        </Card>
        <Card className="justify-start items-center w-full overflow-y-auto custom-scrollbar mt-4 rounded-lg">
          <CardHeader className="flex justify-center items-center gap-2 text-3xl font-bold mx-0 my-0 mt-0 text-secondary-foreground border-b-4 border-secondary-foreground hover:text-primary cursor-pointer">
            Nombre de Thèses Soutenues Chaque Année (2006-2024){" "}
          </CardHeader>{" "}
          <Chart6 />
        </Card>
        <Card className="justify-start items-center w-full overflow-y-auto custom-scrollbar mt-4 rounded-lg">
          <CardHeader className="flex justify-center items-center gap-2 text-3xl font-bold mx-0 my-0 mt-0 text-secondary-foreground border-b-4 border-secondary-foreground hover:text-primary cursor-pointer">
            Nombre de Doctorants Inscrits au Fil des Années (2006-2024)
          </CardHeader>{" "}
          <Chart7 />
        </Card>
        <Card className="justify-start items-center w-full overflow-y-auto custom-scrollbar mt-4 rounded-lg">
          <CardHeader className="flex justify-center items-center gap-2 text-3xl font-bold mx-0 my-0 mt-0 text-secondary-foreground border-b-4 border-secondary-foreground hover:text-primary cursor-pointer">
            Analyse Comparative des Types de Publications
            Scientifiques (2006-2024){" "}
          </CardHeader>{" "}
          <Chart8 />
        </Card>
      </CardContent>
    </Card>
  );
};

export default Recherche;
