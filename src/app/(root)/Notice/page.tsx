"use client";
import React from "react";
import Link from "next/link";
import { ArrowUpRight, Badge } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";
import Whatsnew from "@/json/whatsNew";
import Title from "@/components/Title";
const page = () => {
  return (
//     <section className="px-4 py-4  grid justify-self-center">
//       {/* NOTICE SECTION */}

//       <Title title={"Notice"} />
//       <div className=" grid grid-cols-2 gap-4 mx-auto items-center ">
        
//         <Card className="w-96">
//           <CardHeader className="flex flex-row items-center">
//             <CardTitle>What's New</CardTitle>
//           </CardHeader>
//           <ScrollArea className="h-48">
//             <CardContent>
//               <Table>
//                 <TableHeader>
//                   <TableRow>
//                     <TableHead>News Link</TableHead>
                    
//                   </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                   {Whatsnew.map((news) => (
//                     <TableRow key={news.id}>
//                       <TableCell>
//                         <Link
//                           href={news.newslink}
//                           className="font-medium hover:text-sky-700"
//                           target="_blank" 
//                         >
//                           News
//                         </Link>
//                       </TableCell>

                     
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </CardContent>
//           </ScrollArea>
//         </Card>

//         <Card className="w-full md:w-96">
//   <CardHeader className="flex flex-row items-center">
//     <CardTitle>Forms</CardTitle>
//   </CardHeader>
//   {/* Scrollable content */}
//   <ScrollArea className="h-48 overflow-auto">
//     <CardContent>
//       <Table>
//         <TableHeader>
//           <TableRow>
//             <TableHead>New</TableHead>
//             <TableHead>PDF file</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {Whatsnew.map((news) => (
//             <TableRow key={news.id}>
//               <TableCell>
//                 {/* <Link href="#" className="font-medium hover:text-sky-700">
//                   {news.newslink}
//                 </Link> */}
//                  form
//               </TableCell>
//               <TableCell> <a href={news.newslink} className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
//              PDF
//           </a></TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </CardContent>
//   </ScrollArea>
// </Card>

//       </div>
//     </section>
<section className="px-4 py-4">
  {/* NOTICE SECTION */}
  <Title title="Notice" />
  
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center w-1/2 mx-auto">
    
    {/* What's New Card */}
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center">
        <CardTitle>What's New</CardTitle>
      </CardHeader>
      <ScrollArea className="h-48">
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>News Link</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Whatsnew.map((news) => (
                <TableRow key={news.id}>
                  <TableCell>
                    <Link
                      href={news.newslink}
                      className="font-medium hover:text-sky-700"
                      target="_blank"
                    >
                      News
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </ScrollArea>
    </Card>

    {/* Forms Card */}
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center">
        <CardTitle>Forms</CardTitle>
      </CardHeader>
      <ScrollArea className="h-48 overflow-auto">
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>New</TableHead>
                <TableHead>PDF file</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Whatsnew.map((news) => (
                <TableRow key={news.id}>
                  <TableCell>Form</TableCell>
                  <TableCell>
                    <a
                      href={news.newslink}
                      className="text-blue-500 underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      PDF
                    </a>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </ScrollArea>
    </Card>

  </div>
</section>

  );
};

export default page;
