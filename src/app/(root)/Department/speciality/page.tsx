"use client";
import React from "react";
import Title from "@/components/Title";
import Specialities from "@/json/specialities";
import Link from "next/link";
import {AboutSpeciality} from "@/json/aboutSpeciality";
import "react-tabs/style/react-tabs.css";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const page = () => {
  return (
    <section>
      <Title title={"Speciality"} />
      <div>
        <div className="flex justify-center  ">
          <div className="grid justify-center py-6  text-xl  ">
            {Specialities.card1.map((speciality, index) => (
              <ul className="" key={speciality.id}>
                <li
                  className={` text-center text-wrap px-10  ${
                    index % 2 === 0
                      ? "bg-sky-200 border-sky-900 border-dotted  border-b-2 border-r-2"
                      : "bg-white"
                  }`}
                >
                  <Link className="hover:text-sky-500" href={"#"}>
                    {speciality.description}
                  </Link>
                </li>
              </ul>
            ))}
          </div>
          <div className="grid justify-center py-6 text-xl  ">
            {Specialities.card2.map((speciality, index) => (
              <ul className="" key={speciality.id}>
                <li
                  className={`  text-center text-wrap  ${
                    index % 2 === 0
                      ? "bg-white "
                      : "bg-sky-200 border-sky-700 border-dotted border-b-2 border-l-2"
                  }`}
                >
                  <Link className="hover:text-sky-500" href={"#"}>
                    {speciality.description}
                  </Link>
                </li>
              </ul>
            ))}
          </div>
        </div>

        {/* About Specialities Sheet */}

        <div className="flex flex-col items-center my-8 p-8 font-serif text-lg ">
          {/* Dynamic Tabs Section */}
          <div className="w-full max-w-4xl px-4 sm:px-8">
            <Tabs defaultValue="Paediatrics" className="w-full " >
              <div className="flex w-full">
                {/* Tabs List - 20% Width */}
                <div className="w-[20%] border-r border-sky-500 pr-4">
                  <TabsList className="flex flex-col space-y-2">
                    {AboutSpeciality.map((about) => (
                      <TabsTrigger
                        key={about.id}
                        value={about.id}
                        className="w-full text-left py-2 border-b  border-transparent hover:border-sky-500 focus:border-sky-500"
                      >
                        {about.title}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </div>

                {/* Tabs Content - 80% Width */}
                <div className="w-[80%] pl-4">
                  {AboutSpeciality.map((about) => (
                    <TabsContent key={about.id} value={about.id}>
                      <strong className="grid text-center text-xl text-sky-700 border-b-4 rounded-b-md border-sky-200">{about.title}</strong>
                      <span className="text-gray-700 bg-sky-200">{about.description}</span>
                    </TabsContent>
                  ))}
                </div>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
