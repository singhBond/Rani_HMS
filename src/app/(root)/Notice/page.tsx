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
    <section className="px-4 py-4 ">
      {/* NOTICE SECTION */}

      <Title title={"Notice"} />
      <div className=" grid grid-cols-2 gap-4 mx-auto items-center">
        <Card className="">
          <CardHeader className="flex flex-row items-center">
            <div className="grid gap-2">
              <CardTitle>What's New</CardTitle>
              {/* <CardDescription>
                Recent transactions from your store.
              </CardDescription> */}
            </div>
          </CardHeader>
          <ScrollArea className="h-48">
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>News Link</TableHead>
                    <TableHead className=" ">PDF file</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {Whatsnew.map((news) => (
                    <TableRow key={news.id}>
                      <Link href="#">
                        {" "}
                        <TableCell>
                          <div className="font-medium hover:text-sky-700">
                            {news.newslink}
                          </div>
                        </TableCell>
                      </Link>
                      <TableCell className="">.pdf</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </ScrollArea>
        </Card>

        <Card className="">
          <CardHeader className="flex flex-row items-center">
            <div className="grid gap-2">
              <CardTitle>What's New</CardTitle>
              {/* <CardDescription>
                Recent transactions from your store.
              </CardDescription> */}
            </div>
          </CardHeader>
          <ScrollArea className="h-48">
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>News Link</TableHead>
                    <TableHead className=" ">PDF file</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {Whatsnew.map((news) => (
                    <TableRow key={news.id}>
                      <Link href="#">
                        {" "}
                        <TableCell>
                          <div className="font-medium hover:text-sky-700">
                            {news.newslink}
                          </div>
                        </TableCell>
                      </Link>
                      <TableCell className="">.pdf</TableCell>
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
