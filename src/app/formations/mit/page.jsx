"use client";

import React from "react";
import mit from "@/assets/logo/MIT.gif";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { FaBookOpenReader } from "react-icons/fa6";

const Formations = () => {
  return (
    <Card className="w-full overflow-y-auto custom-scrollbar">
      <CardHeader className="flex justify-center items-center gap-2 text-3xl font-bold bg-membres-header mx-4 mt-2 border-primary border-b-4">
        <FaBookOpenReader className="w-11 h-11 text-white" />
        <div className="text-white">
          MASTER INFORMATIQUE ET TELECOMMUNICATIONS
        </div>
      </CardHeader>
      <CardContent className="flex justify-between p-4">
        <Image
          src={mit}
          alt="alt"
          width={1500}
          height={1000}
          className="h-full w-full"
        />
      </CardContent>
    </Card>
  );
};

export default Formations;
