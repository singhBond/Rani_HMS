"use client";
import Image from "next/image";
import { MoreHorizontal } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const ScheduleData = [
  
    {
      id: 1,
      Title: "Introduction to Data Science",
      Subject: "Data Science",
      Semester: "Fall 2024",
      FacultyName: "Dr. John Smith",
      Venue: "Room 301",
      DateDay: "2024-10-02 (Wednesday)",
      Time: "10:00 AM - 12:00 PM",
      Batch: "A1",
    },
    {
      id: 2,
      Title: "Advanced Machine Learning",
      Subject: "Machine Learning",
      Semester: "Fall 2024",
      FacultyName: "Prof. Emily Davis",
      Venue: "Room 204",
      DateDay: "2024-10-04 (Friday)",
      Time: "2:00 PM - 4:00 PM",
      Batch: "B2",
    },
    {
      id: 3,
      Title: "Database Systems",
      Subject: "Computer Science",
      Semester: "Fall 2024",
      FacultyName: "Dr. Robert Lee",
      Venue: "Room 102",
      DateDay: "2024-10-06 (Monday)",
      Time: "9:00 AM - 11:00 AM",
      Batch: "A2",
    },
    {
      id: 4,
      Title: "Artificial Intelligence",
      Subject: "AI",
      Semester: "Fall 2024",
      FacultyName: "Prof. Sarah Connor",
      Venue: "Room 501",
      DateDay: "2024-10-03 (Thursday)",
      Time: "11:00 AM - 1:00 PM",
      Batch: "C1",
    },
    {
      id: 5,
      Title: "Cloud Computing",
      Subject: "Cloud Technology",
      Semester: "Fall 2024",
      FacultyName: "Dr. Michael Brown",
      Venue: "Room 401",
      DateDay: "2024-10-05 (Saturday)",
      Time: "3:00 PM - 5:00 PM",
      Batch: "B1",
    },
  
];

export default function page() {
  return (
    <section>
      <div>
        <h1 className="grid text-center text-xl text-sky-700  border-b-4 rounded-b-md border-sky-200">
          Courses
        </h1>

        <Card>
          <CardHeader>
            <CardTitle>Courses</CardTitle>
            {/* <CardDescription>
              Manage your products and view their sales performance.
            </CardDescription> */}
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Subject</TableHead>
                  <TableHead>Semester</TableHead>
                  <TableHead className="hidden md:table-cell">
                    Faculty Name
                  </TableHead>
                  <TableHead className="hidden md:table-cell">Venue</TableHead>
                  <TableHead className="hidden md:table-cell">
                    Date/Day
                  </TableHead>
                  <TableHead className="hidden md:table-cell">Time</TableHead>
                  <TableHead className="hidden md:table-cell">Batch</TableHead>

                  {/* <TableHead>
                    <span className="sr-only">Actions</span>
                  </TableHead> */}
                </TableRow>
              </TableHeader>
              <TableBody>
                {ScheduleData.map((data) => (
                <TableRow key={data.id}  >
                  <TableCell  className="hidden sm:table-cell">
                    {data.Title}
                  </TableCell>
                  <TableCell className="font-medium">
                    {data.Subject}
                  </TableCell>
                  <TableCell>
                    {data.Semester}
                  </TableCell>
                  <TableCell>{data.FacultyName}</TableCell>
                  <TableCell className="hidden md:table-cell">{data.Venue}</TableCell>
                  <TableCell className="hidden md:table-cell">
                   {data.DateDay}
                  </TableCell>
                  <TableCell>
                    {data.Time}
                  </TableCell>
                  <TableCell>
                    {data.Batch}
                  </TableCell>
                </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
