import Title from "@/components/Title";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import React from "react";

const Career = [
  {
    id: 1,
    title: "Orientation & Guest Lectures 2021",
  },
  {
    id: 2,
    title: "Orientation & Guest Lectures 2022",
  },
  {
    id: 3,
    title: "Orientation & Guest Lectures 2023",
  },
  
];
const page = () => {
  return (
    <section className="section">
      <h1 className="grid text-center text-xl text-sky-700  border-b-4 rounded-b-md border-sky-200">
       Orientation & Guest Lectures
      </h1>
      <div>
        <Card className="w-full">
          <CardHeader className="flex flex-row items-center">
            {/* <CardTitle>
              Rani Hospital offers various Trainings at different Designation
            </CardTitle> */}
          </CardHeader>
          <ScrollArea className="h-48 overflow-auto">
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Sl no.</TableHead>

                    <TableHead>Media Files</TableHead>
                    
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {Career.map((index) => (
                    <TableRow key={index.id}>
                      <TableCell>{index.id}.</TableCell>
                      
                      <TableCell>
                        <Link
                          href={index.title}
                          className="text-blue-500 underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >{index.title}.
                          
                        </Link>
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
