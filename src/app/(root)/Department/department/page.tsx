import React from "react";
import Title from "@/components/Title";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import "react-tabs/style/react-tabs.css";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Department from "@/json/department";
import department from "@/json/department";

const departmentData = [
  {
    id: 1,
    image: "/department/NICU.png",
    title: "Paediatrics Intensive Care",
    description:
      "The speciality deals with serious, and critical illness in children which have assumed life threatening proportions. In no other branch of medicine is prompt rapid care so rewarding as in Pediatric. We have 25 beded paediatric ICU and 22 beded paediatric HDU. PICU has more than 10 ventilitors.",
  },
  {
    id: 2,
    image: "/department/OT1.png",
    title: "Neonatology",
    description:
      "Our hospital has pioneered and spearheaded the arrival and establishment of advanced Newborn Intensive Care in Jharkhand and whole of eastern India since 2004.NICU has latest facilities including >100 NICU beds, >25 ventilitors, 2 HFO ventilitors, nitric oxide system, therapeutic hypothermia and brain monitoring system(aEEG).",
  },
  {
    id: 3,
    image: "/department/PICU.png",
    title: "Paediatrics Surgery",
    description:
      "We have dedicated operation theater for neonatal and paediatric surgery. We do >100 surgeries for neonate and children every month. We do all complicated surgeries except cardiac surgeries.",
  },
];

const Page = () => {
  return (
    <section className="">
      {/* Main Departments Cards */}
      <Title title={"Our Departments"} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 ">
        {departmentData.map((dept) => (
          <Card
            key={dept.id}
            className="max-w-full transition duration-500 transform hover:-translate-y-2 hover:border-b-8 hover:border-b-sky-500"
          >
            <img
              src={dept.image}
              alt={dept.title}
              className="rounded-t-lg w-full h-48 object-cover"
            />

            <div className="p-4 space-y-4">
              <h1 className="text-lg font-semibold">{dept.title}</h1>
              <p className="text-sm text-gray-600">{dept.description}</p>

              <Link href="#">
                <Button className="mt-4">Read More</Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>

      {/* DEPARTMENTS TABS SECTION */}

      {/* <div className="w-full max-w-6xl px-4 sm:px-8 mx-auto mt-16">
        <Tabs defaultValue="Neonatology" className="w-full">
          <div className="flex flex-col lg:flex-row">
           
            <div className="lg:w-1/4 border-b lg:border-r lg:border-b-0 border-sky-500 lg:pr-4">
              <TabsList className="flex flex-col lg:space-y-4 space-y-2">
                {department.map((dept) => (
                  <TabsTrigger
                    key={dept.id}
                    value={dept.title}
                    className="bg-sky-500 text-white w-full text-left py-2 px-4 rounded-lg hover:bg-sky-600 focus:bg-sky-700 transition"
                  >
                    {dept.title}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

          
            <div className="lg:w-3/4 p-4">
              {department.map((dept) => (
                <TabsContent
                  key={dept.id}
                  value={dept.title}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {dept[dept.title].map((doctor) => (
                      <Card
                        key={doctor.id}
                        className="p-4 bg-white shadow-md rounded-lg border border-gray-200"
                      >
                        <h2 className="font-serif text-lg font-semibold">
                          {doctor.name}
                        </h2>
                        <p className="text-sm text-gray-500">
                          {doctor.designation}
                        </p>
                        <p className="text-sm text-gray-500">{doctor.shift}</p>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </div>
          </div>
        </Tabs>
      </div> */}

      {/* Department's Heads Cards */}
      <div className="w-full max-w-6xl px-4 sm:px-8 mx-auto mt-16 ">
        <Tabs defaultValue="Surgery" className="w-full py-56 "> 
          <div className="flex flex-col lg:flex-row">
            {/* Tabs List */}
            <div className="lg:w-1/4 border-b lg:border-r lg:border-b-0 border-sky-500 pr-0 lg:pr-4  lg:mb-0">
              <TabsList className=" flex lg:flex-col space-y-2 lg:space-y-4 ">
                {department.map((dept) => (
                  <TabsTrigger
                    key={dept.id}
                    value={dept.title}
                    className="bg-sky-500 text-white w-full text-left py-2 px-4 rounded-lg hover:bg-sky-600 focus:bg-sky-700 transition"
                  >
                    {dept.title}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {/* Tabs Content */}
            <div className="w-[80%] pl-4 ">
              {department.map((dept) => (
                <TabsContent key={dept.id} value={dept.title} className="">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
                    {dept[dept.title].map((doctor) => (
                      <Card key={doctor.id} className="p-4 space-y-2">
                        <h1 className="font-serif text-lg">{doctor.name}</h1>
                        <p className="text-sm text-gray-500">
                          {doctor.designation}
                        </p>
                        <p className="text-sm text-gray-500">{doctor.shift}</p>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </div>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Page;
