"use client"; // Used to set this component as a client component

import React, { useState } from "react";
import { useRouter } from "next/navigation";

// Importing css files
import "@/app/globals.css";

// Importing light/dark mode toggle button
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Card, CardContent, CardHeader } from "@/components/ui/card";

import { FaUserDoctor } from "react-icons/fa6";
import { Newspaper, User } from "lucide-react";
import journaux from "@/data/scopus_publication_journaux.json";
import conferences from "@/data/scopus_publication_conference.json";
import other from "@/data/scopus_other.json";

export default function Home() {
  return (
    <Card className="w-full overflow-y-auto custom-scrollbar">
      <CardHeader className="flex justify-center items-center gap-2 text-3xl font-bold bg-formation-header mx-0 my-0 mt-0">
        <Newspaper className="h-11 w-11 text-white" />
        <div className="text-white">Publications</div>
      </CardHeader>

      <CardContent className="grid-cols-8 justify-center items-center p-4 w-full">
        <Tabs defaultValue="Publications Journaux" className="w-full mt-4">
          <TabsList className="w-full">
            <TabsTrigger value="Publications Journaux" className="w-full">
              Publications Journaux
            </TabsTrigger>
            <TabsTrigger value="Publications Conférence" className="w-full">
              Publications Conférence
            </TabsTrigger>
            <TabsTrigger value="Autres" className="w-full">
              Autres
            </TabsTrigger>
          </TabsList>
          <TabsContent value="Publications Journaux" className="w-full">
            <Card>
              <CardContent className="grid grid-cols-1 gap-4 p-4">
                {/* Header Row */}
                <Card className="grid grid-cols-4 w-full text-white">
                  <div className="h-24 flex items-center bg-secondary justify-center text-2xl font-bold border-b-[6px] border-secondary-foreground">
                    Authors
                  </div>
                  <div className="h-24 flex items-center bg-secondary justify-center text-2xl font-bold border-b-[6px] border-secondary-foreground">
                    Title
                  </div>
                  <div className="h-24 flex items-center bg-secondary justify-center text-2xl font-bold border-b-[6px] border-secondary-foreground">
                    Year
                  </div>
                  <div className="h-24 flex items-center bg-secondary justify-center text-2xl font-bold border-b-[6px] border-secondary-foreground">
                    Source Title
                  </div>
                </Card>

                {/* Data Rows */}
                {journaux.map((journal) => (
                  <Card
                    key={journal.id}
                    className="grid grid-cols-4 w-full bg-transparent text-secondary-foreground"
                  >
                    <div className="h-24 flex items-center justify-center text-justify font-bold p-4 cursor-pointer hover:text-primary">
                      {journal.Authors}
                    </div>
                    <div className="h-24 flex items-center justify-center text-justify font-bold p-4 cursor-pointer hover:text-primary">
                      {journal.Title}
                    </div>
                    <div className="h-24 flex items-center justify-center text-justify font-bold p-4 cursor-pointer hover:text-primary">
                      {journal.Year}
                    </div>
                    <div className="h-24 flex items-center justify-center text-justify font-bold p-4 cursor-pointer hover:text-primary">
                      {journal["Source title"]}
                    </div>
                  </Card>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="Publications Conférence" className="w-full">
            <Card>
              <CardContent className="grid grid-cols-1 gap-4 p-4">
                {/* Header Row */}
                <Card className="grid grid-cols-4 w-full text-white">
                  <div className="h-24 flex items-center bg-secondary justify-center text-2xl font-bold border-b-[6px] border-secondary-foreground">
                    Authors
                  </div>
                  <div className="h-24 flex items-center bg-secondary justify-center text-2xl font-bold border-b-[6px] border-secondary-foreground">
                    Title
                  </div>
                  <div className="h-24 flex items-center bg-secondary justify-center text-2xl font-bold border-b-[6px] border-secondary-foreground">
                    Year
                  </div>
                  <div className="h-24 flex items-center bg-secondary justify-center text-2xl font-bold border-b-[6px] border-secondary-foreground">
                    Source Title
                  </div>
                </Card>

                {/* Data Rows */}
                {conferences.map((conference) => (
                  <Card
                    key={conference.id}
                    className="grid grid-cols-4 w-full bg-transparent text-secondary-foreground"
                  >
                    <div className="h-24 flex items-center justify-center text-justify font-bold p-4 cursor-pointer hover:text-primary">
                      {conference.Authors}
                    </div>
                    <div className="h-24 flex items-center justify-center text-justify font-bold p-4 cursor-pointer hover:text-primary">
                      {conference.Title}
                    </div>
                    <div className="h-24 flex items-center justify-center text-justify font-bold p-4 cursor-pointer hover:text-primary">
                      {conference.Year}
                    </div>
                    <div className="h-24 flex items-center justify-center text-justify font-bold p-4 cursor-pointer hover:text-primary">
                      {conference["Source title"]}
                    </div>
                  </Card>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="Autres" className="w-full">
            <Card>
              <CardContent className="grid grid-cols-1 gap-4 p-4">
                {/* Header Row */}
                <Card className="grid grid-cols-5 w-full text-white">
                  <div className="h-24 flex items-center bg-secondary justify-center text-2xl font-bold border-b-[6px] border-secondary-foreground">
                    Authors
                  </div>
                  <div className="h-24 flex items-center bg-secondary justify-center text-2xl font-bold border-b-[6px] border-secondary-foreground">
                    Title
                  </div>
                  <div className="h-24 flex items-center bg-secondary justify-center text-2xl font-bold border-b-[6px] border-secondary-foreground">
                    Year
                  </div>
                  <div className="h-24 flex items-center bg-secondary justify-center text-2xl font-bold border-b-[6px] border-secondary-foreground">
                    Source Title
                  </div>
                  <div className="h-24 flex items-center bg-secondary justify-center text-2xl font-bold border-b-[6px] border-secondary-foreground">
                    Document Type
                  </div>
                </Card>

                {/* Data Rows */}
                {other.map((other) => (
                  <Card
                    key={other.id}
                    className="grid grid-cols-5 w-full bg-transparent text-secondary-foreground"
                  >
                    <div className="h-24 flex items-center justify-center text-justify font-bold p-4 cursor-pointer hover:text-primary">
                      {other.Authors}
                    </div>
                    <div className="h-24 flex items-center justify-center text-justify font-bold p-4 cursor-pointer hover:text-primary">
                      {other.Title}
                    </div>
                    <div className="h-24 flex items-center justify-center text-justify font-bold p-4 cursor-pointer hover:text-primary">
                      {other.Year}
                    </div>
                    <div className="h-24 flex items-center justify-center text-justify font-bold p-4 cursor-pointer hover:text-primary">
                      {other["Source title"]}
                    </div>
                    <div className="h-24 flex items-center justify-center text-justify font-bold p-4 cursor-pointer hover:text-primary">
                      {other["Document Type"]}
                    </div>
                  </Card>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
