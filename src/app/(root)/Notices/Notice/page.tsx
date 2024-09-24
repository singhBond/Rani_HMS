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
const Notice = [
  {
    id: 1,
    category: "miscellaneous",
    title: "title1",
    date: "05/08/24",
  },
];

const page = () => {
  return (
    <section className="section">
      <Title title={"Notice"} />
      <div>
        <Card className="w-full">
          <CardHeader className="flex flex-row items-center">
            <CardTitle>Notice</CardTitle>
          </CardHeader>
          <ScrollArea className="h-48 overflow-auto">
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Sl no.</TableHead>
                    <TableHead>Notice Category</TableHead>
                    <TableHead> Notice Title</TableHead>
                    <TableHead> Notice Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {Notice.map((index) => (
                    <TableRow key={index.id}>
                      <TableCell>{index.id}</TableCell>
                      <TableCell>{index.category}</TableCell>

                      <TableCell className="">
                        <Link
                          href={index.title}
                          className="text-blue-500 underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Title
                        </Link>
                      </TableCell>
                      <TableCell>{index.date}</TableCell>
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
