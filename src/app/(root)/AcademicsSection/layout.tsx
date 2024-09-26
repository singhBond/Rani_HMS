import Title from "@/components/Title";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Assuming Academics has a specific structure for departments
  // const page: React.FC = () => {
  return (
    <section className="section">
      {/* Main Departments Cards */}
      <Title title={"Academics"} />

      <div className="flex flex-col items-start my-8 p-8 font-serif text-lg ">
        {/* Dynamic Tabs Section */}
        <div className="w-full max-w-4xl px-4 sm:px-8">
          <Tabs defaultValue="AcademicsSection " className="w-full ">
            <div className="flex w-full">
              {/* Tabs List - 20% Width */}
              <div className="w-[30%] border-r border-sky-500 pr-4">
                {/* <TabsList className="grid grid-flow-row space-y-2 mb-4 h-full">
                    {Academics.map((about) => (
                      <TabsTrigger
                        key={about.id} 
                        value={about.id}
                        className="w-full text-left py-2 border-b  border-transparent hover:border-sky-500 focus:border-sky-500"
                      >
                        {about.title}
                      </TabsTrigger>
                    ))}
                  </TabsList> */}
                <TabsList className="grid grid-flow-row space-y-8 mb-4 h-full">
                  <TabsTrigger value="">
                    <Link href={"/AcademicsSection"}>Introduction</Link>
                  </TabsTrigger>
                  <TabsTrigger value="">
                    <Link href={"/AcademicsSection/Courses"}>Courses</Link>
                  </TabsTrigger>
                  <TabsTrigger value="">
                    <Link href={"/AcademicsSection/Training"}>Training</Link>
                  </TabsTrigger>
                  <TabsTrigger value="">
                    <Link href={"/AcademicsSection/StudentEnrollmentList"}>
                      StudentEnrollmentList
                    </Link>
                  </TabsTrigger>
                  <TabsTrigger value="">
                    <Link href={"/AcademicsSection/Awards"}>Awards</Link>
                  </TabsTrigger>
                  <TabsTrigger value="">
                    <Link href={"/AcademicsSection/OrientationsLectures"}>
                      OrientationsLectures
                    </Link>
                  </TabsTrigger>
                  <TabsTrigger value="">
                    <Link href={"/AcademicsSection/TeachingSchedule"}>
                      TeachingSchedule
                    </Link>
                  </TabsTrigger>
                  <TabsTrigger value="">
                    <Link href={"/AcademicsSection/Notices"}>Notices</Link>
                  </TabsTrigger>
                  <TabsTrigger value="">
                    <Link href={"/AcademicsSection/Faculty"}>Faculty</Link>
                  </TabsTrigger>
                  <TabsTrigger value="">
                    <Link href={"/AcademicsSection/MinutesOfMeeting"}>
                      MinutesOfMeeting
                    </Link>
                  </TabsTrigger>
                </TabsList>
              </div>

              {/* Tabs Content - 80% Width */}
              <div className="w-[100%] pl-4">
                {/* {Academics.map((about) => (
                    <TabsContent key={about.id} value={about.id} className="  lg:w-[900px]">
                      <strong className="grid text-center text-xl text-sky-700  border-b-4 rounded-b-md border-sky-200">{about.title}</strong>
                      <span className="text-gray-700 bg-sky-200">{about.description}</span>
                    </TabsContent>
                  ))} */}
                <TabsContent defaultValue={"Introduction"} value="" className="  lg:w-[1000px]">
                  {children}
                </TabsContent>
              </div>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
