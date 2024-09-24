import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import Link from 'next/link'

const Recruitment =[
    {
        id:1,
        category:"Doctors",
        title:"Surgens",
        publish:"02/07/24",
        end:"28/08/24",
    },
];

const page = () => {
  return (
    <section className='section'>
        <div>
        <Card className="w-full">
          <CardHeader className="flex flex-row items-center">
            <CardTitle>Recruitments</CardTitle>
          </CardHeader>
          <ScrollArea className="h-48 overflow-auto">
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Sl no.</TableHead>
                    <TableHead> Category</TableHead>
                    <TableHead> Title</TableHead>
                    <TableHead>Publish Date</TableHead>
                    <TableHead>End Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {Recruitment.map((index) => (
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
                      <TableCell>{index.publish}</TableCell>
                      <TableCell>{index.end}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </ScrollArea>
        </Card>
        </div>
      
    </section>
  )
}

export default page
