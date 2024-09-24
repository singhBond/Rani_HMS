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
const CurrentEvent =[
{
    id:1,
    title:"title",
    date:"01/08/24",
    link:"",
}
];

const page = () => {
  return (
    <section className="section">
      <Title title={"Events"} />
      <div>
        <Card className="w-full">
          <CardHeader className="flex flex-row items-center">
            <CardTitle>Events</CardTitle>
          </CardHeader>
          <ScrollArea className="h-48 overflow-auto">
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Sl no.</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead> Date</TableHead>
                    <TableHead> PDFs</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {CurrentEvent.map((index) => (
                    <TableRow key={index.id} >
                      <TableCell>{index.id}</TableCell>
                      <TableCell>{index.title}</TableCell>
                      <TableCell>{index.date}</TableCell>
                      
                      <TableCell className="">
                        <Link
                          href={index.link}
                          className="text-blue-500 underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          PDF file
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
