import Title from '@/components/Title'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import Link from 'next/link'
import React from 'react'


const Workshop =[
{
    id:1,
    title:"title1",
    date:"12/08/24",
    link:"https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/basic-link-1.pdf",
},
];
const page = () => {
  return (
    <section className='section'>
        <Title title={"Conferences & Workshops"}/>
        <div>
        <Card className="w-full">
      <CardHeader className="flex flex-row items-center">
        <CardTitle>Workshops</CardTitle>
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
              {Workshop.map((conference) => (
                <TableRow key={conference.id}>
                  <TableCell>{conference.id}</TableCell>
                  <TableCell>{conference.title}</TableCell>
                  <TableCell>{conference.date}</TableCell>
                  {/* <TableCell>{event.link}</TableCell> */}
                  <TableCell>
                    <Link
                      href={conference.link}
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
  )
}

export default page
