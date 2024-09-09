"use client";
import * as React from "react";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function GalleryAuto() {
  const galleryimage = [
    {
      id: 1,
      image: "/sliderImage/2.png",
    },
    {
      id: 2,
      image: "/sliderImage/5.png",
    },
    {
      id: 3,
      image: "/sliderImage/accreditations1.png",
    },
    {
      id: 4,
      image: "/sliderImage/award.png",
    },
    {
      id: 5,
      image: "/sliderImage/buildingcopy1.png",
    },
    {
      id: 6,
      image: "/sliderImage/slidedoctor.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = galleryimage.length;
  const autoplayInterval = 3000; // Autoplay interval in milliseconds (3 seconds)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
    }, autoplayInterval);
    return () => clearInterval(interval); // Clean up the interval on unmount
  }, [totalItems]);

  const goToNext = () => {
    setCurrentIndex((currentIndex + 1) % totalItems);
  };

  const goToPrevious = () => {
    setCurrentIndex((currentIndex - 1 + totalItems) % totalItems);
  };

  return (
    <section className="grid justify-center">
      <Carousel className="sm:w-96  lg:w-[1400px] max-w-full  shadow-inner shadow-sky-700 bg-sky-100 ">
        <CarouselContent
          className=" flex transition-transform ease-in-out duration-1000"
          style={{ transform: `translateX(-${currentIndex * 25}%)` }}
        >
          {galleryimage.map((index) => (
            <CarouselItem
              key={index.id}
              className=" md:basis-1/3 lg:basis-1/4  "
            >
              <div className="p-1">
                <Card className="h-64 w-64 sm:28  ">
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    {/* <span className="text-2xl font-semibold">{index.image + 1}</span> */}
                    <img src={index.image} className="object-fill" alt="img"  />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious onClick={goToPrevious} />
        <CarouselNext onClick={goToNext} />
      </Carousel>
    </section>
  );
}
