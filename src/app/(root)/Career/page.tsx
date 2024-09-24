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
    department: "Cardiology",
    title: "title1",
    publish: "12/08/24",
    closing: "28/09/24",
  },
];
const page = () => {
  return (
    <section className="section">
      <Title title={"Careers"} />
      <div>
        <Card className="w-full">
          <CardHeader className="flex flex-row items-center">
            <CardTitle>Career News</CardTitle>
          </CardHeader>
          <ScrollArea className="h-48 overflow-auto">
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Sl no.</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Published</TableHead>
                    <TableHead>Closing</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {Career.map((index) => (
                    <TableRow key={index.id}>
                      <TableCell>{index.id}</TableCell>
                      <TableCell>{index.department}</TableCell>

                      <TableCell>
                        <Link
                          href={index.title}
                          className="text-blue-500 underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          PDF file
                        </Link>
                      </TableCell>
                      <TableCell>{index.publish}</TableCell>
                      <TableCell>{index.closing}</TableCell>
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
