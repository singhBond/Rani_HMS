
"use client";
import React from "react";
import Link from "next/link";
import { ArrowUpRight, Badge } from "lucide-react";
import { useEffect, useRef } from "react";

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

const AutoScrollCard = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollArea = scrollRef.current;
    if (!scrollArea) return;

    const scrollSpeed = 2; // Adjust this value for faster or slower scrolling
    let scrollDirection = 1; // 1 for down, -1 for up

    const scrollInterval = setInterval(() => {
      if (scrollArea.scrollTop + scrollArea.clientHeight >= scrollArea.scrollHeight) {
        scrollDirection = -1; // Scroll up when reaching the bottom
      } else if (scrollArea.scrollTop === 0) {
        scrollDirection = 1; // Scroll down when reaching the top
      }
      scrollArea.scrollTop += scrollDirection * scrollSpeed;
    }, 50); // Adjust this interval to control the scroll speed

    return () => clearInterval(scrollInterval); // Cleanup on component unmount
  }, []);

  return (
    <Card className="w-96">
      <CardHeader className="flex flex-row items-center">
        <CardTitle>What's New</CardTitle>
      </CardHeader>
      <ScrollArea ref={scrollRef} className="h-48">
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>News Link</TableHead>
                <TableHead className="">PDF file</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Whatsnew.map((news) => (
                <TableRow key={news.id}>
                  <TableCell>
                    <Link
                      href="#"
                      className="font-medium hover:text-sky-700"
                    >
                      {news.newslink}
                    </Link>
                  </TableCell>

                  <TableCell className="">.pdf</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </ScrollArea>
    </Card>
  );
};
export default AutoScrollCard;