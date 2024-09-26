import Title from "@/components/Title";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import Academics from "@/json/academics";

type Academic = {
    id: number;
    title: string;
    Introduction?: {
      id: number;
      name: string;
      designation: string;
      shift: string;
    }[];
    Courses?: { /* courses data structure */ };
    Training?: { /* training data structure */ };
    // Add more sections as needed
  };

// Assuming Academics has a specific structure for departments
const page: React.FC = () => {
  return (
    <section className="section">
      
      <Title title={"Academics"} />

     
        <div className="flex flex-col items-start my-8 p-8 font-serif text-lg ">
          {/* Dynamic Tabs Section */}
          <div className="w-full max-w-4xl px-4 sm:px-8">
            <Tabs defaultValue=" " className="w-full " >
              <div className="flex w-full">
                {/* Tabs List - 20% Width */}
                <div className="w-[30%] border-r border-sky-500 pr-4">
                  <TabsList className="grid grid-flow-row space-y-2 mb-4 h-full">
                    {Academics.map((about) => (
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
                  {Academics.map((about) => (
                    <TabsContent key={about.id} value={about.id} className="  lg:w-[900px]">
                      {/* <strong className="grid text-center text-xl text-sky-700  border-b-4 rounded-b-md border-sky-200">{about.title}</strong>
                      <span className="text-gray-700 bg-sky-200">{about.description}</span> */}
                      
                    </TabsContent>
                  ))}
                </div>
              </div>
            </Tabs>
          </div>
        </div>
    </section>
  );
};

export default page;
