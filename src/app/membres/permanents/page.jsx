"use client";

import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { FaUser, FaUsers } from "react-icons/fa6";
import Link from "next/link";
<<<<<<< HEAD
import members from "@/data/membres_permanents.json";
=======
import members from "@/data/membres_permanents.json"; 
>>>>>>> 539ce03bd883e6b2cf343da50fff2d676f5687aa

const MembresPermanents = () => {
  return (
    <Card className="w-full overflow-y-auto custom-scrollbar bg-[#e9ecef]">
      <CardHeader className="flex justify-center items-center gap-2 text-3xl font-bold bg-membre-header mx-0 my-0 mb-6">
        <FaUsers className="h-11 w-11 text-white" />
        <div className="text-white">MEMBRES PERMANENTS</div>
      </CardHeader>

      <CardContent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-6 pb-6">
        {members.map((member, index) => (
          <Card
            key={index}
            className="flex justify-start items-center gap-4 w-full p-4 rounded"
          >
            <FaUser className="h-8 w-8" />
            <div>
              <Link
<<<<<<< HEAD
                href=""
=======
                href={member.Scopus}
>>>>>>> 539ce03bd883e6b2cf343da50fff2d676f5687aa
                className="uppercase text-xl font-bold hover:text-blue-900"
              >
                {member.Nom}
              </Link>
              <h2>{member.Etablissment}</h2>
            </div>
          </Card>
        ))}
      </CardContent>
    </Card>
  );
};
export default MembresPermanents;
