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
      {/* Main Departments Cards */}
      <Title title={"Academics"} />

      {/* Department's Heads Cards */}
      {/* <div className="w-full max-w-6xl px-2 sm:px-4 mx-auto mt-8 ">
        <Tabs defaultValue="Surgery" className="w-full py-56">
          <div className="flex flex-col lg:flex-row">
          
            <div className="lg:w-1/4 border-b lg:border-r lg:border-b-0 border-sky-500 pr-0 lg:pr-4  lg:mb-0">
              <TabsList className=" flex lg:flex-col space-y-2 lg:space-y-4 ">
                {Academics.map((type) => (
                  <TabsTrigger
                    key={type.id}
                    value={type.title}
                    className="bg-sky-500 text-white w-full text-left py-2 px-4 rounded-lg hover:bg-sky-600 focus:bg-sky-700 transition"
                  >
                    {type.title}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

          
            <div className="w-[80%] pl-4 ">
              {Academics.map((type) => (
                <TabsContent key={type.id} value={type.title} className="p-10">
                  <div className="grid grid-cols-1  gap-6 ">
                   
                    {(type as any)[type.title]?.map((data: any) => (
                      <div key={data.id} className="p-4 space-y-2">
                        <h1 className="font-serif text-lg">{data.title}</h1>
                        <p className="text-sm text-gray-500">
                          {data.description}
                        </p>
                        <p className="text-sm text-gray-500">{data.shift}</p>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </div>
          </div>
        </Tabs>
      </div> */}
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
                    <TabsContent key={about.id} value={about.id} className="">
                      <strong className="grid text-center text-xl text-sky-700 border-b-4 rounded-b-md border-sky-200">{about.title}</strong>
                      <span className="text-gray-700 bg-sky-200">{about.description}</span>
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
