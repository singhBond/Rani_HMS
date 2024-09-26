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
    title: "Enrollment List (2024)",
  },
  {
    id: 2,
    title: "Enrollment List (2023)",
  },
  {
    id: 3,
    title: "Enrollment List (2023)",
  },
  {
    id: 4,
    title: "Enrollment List (2023)",
  },
  {
    id: 5,
    title: "Enrollment List (2023)",
  },
  
  
];
const page = () => {
  return (
    <section className="section">
      <h1 className="grid text-center text-xl text-sky-700  border-b-4 rounded-b-md border-sky-200">
        Student Enrollment List
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

                    <TableHead>Title</TableHead>
                    <TableHead>File</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {Career.map((index) => (
                    <TableRow key={index.id}>
                      <TableCell>{index.id}.</TableCell>
                      <TableCell>{index.title}.</TableCell>
                      <TableCell>
                        <Link
                          href={index.title}
                          className="text-blue-500 underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          PDF
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
