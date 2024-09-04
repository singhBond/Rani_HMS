"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Define your JSON data with image URLs, titles, and links
const carouselItems = [
  { id: 1, image: 'https://via.placeholder.com/600', title: 'Item 1', link: 'https://example.com/1' },
  { id: 2, image: 'https://via.placeholder.com/600', title: 'Item 2', link: 'https://example.com/2' },
  { id: 3, image: 'https://via.placeholder.com/600', title: 'Item 3', link: 'https://example.com/3' },
  { id: 4, image: 'https://via.placeholder.com/600', title: 'Item 4', link: 'https://example.com/4' },
  { id: 5, image: 'https://via.placeholder.com/600', title: 'Item 5', link: 'https://example.com/5' },
  { id: 6, image: 'https://via.placeholder.com/600', title: 'Item 6', link: 'https://example.com/6' },
  { id: 7, image: 'https://via.placeholder.com/600', title: 'Item 7', link: 'https://example.com/7' },
  // Add more items if needed
];

 function CarouselSpacing() {
  return (
    <Carousel className="w-full">
      <CarouselContent className="flex space-x-2">
        {carouselItems.map(({ id, image, title, link }) => (
          <CarouselItem key={id} className="w-1/6 flex-shrink-0">
            <a href={link} target="_blank" rel="noopener noreferrer">
              <div className="p-2">
                <Card className="w- h-full">
                  <CardContent className="flex flex-col items-center justify-center p-4">
                    <img src={image} alt={title} className="w-full h-48 object-cover mb-4" />
                    <span className="text-lg font-semibold text-center">{title}</span>
                  </CardContent>
                </Card>
              </div>
            </a>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2" />
      <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2" />
    </Carousel>
  );
}




export default CarouselSpacing


