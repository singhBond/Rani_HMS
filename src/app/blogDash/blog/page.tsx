"use client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import React from "react";
import { Toggle } from "@/components/ui/toggle";
import Link from "next/link";
import {
  ArrowRight,
  CircleUserRound,
  Heart,
  MessageCircle,
} from "lucide-react";
import blogData from "@/json/BlogData";
import SignUp from "@/components/SignUp";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";



// Sample JSON Data

const BlogPage = () => {
  return (
    <section className=" ">
      <nav className="bg-primary  flex w-full h-full justify-end  ">
        {/* <Login /> */}
        <Dialog>
          <DialogTrigger asChild>
            <Link href={""} className=" px-2 text-lg text-white  hover:underline ">
              {" "}
              User
            </Link>
          </DialogTrigger>
          <DialogContent className="  justify-center items-center sm:max-w-[425px] ">
            <div>
              <SignUp />
            </div>
          </DialogContent>
        </Dialog>
        <CircleUserRound color="white" />
      </nav>

      <div className="grid  ">
        {/* Hero Section with Image and Overlay */}
        <div className="relative">
          <img
            src="/sliderImage/buildingcopy1.png"
            alt="IMGr"
            className="w-full h-96 object-fill"
          />
          <div className=" grid grid-flow-row absolute inset-0 text-center items-center justify-center bg-black bg-opacity-40 ">
            <h1 className="text-4xl sm:text-4xl font-bold text-white space-y-8">
              
              <p className="font-serif text-4xl">RANI  HOSPITAL  BLOGS</p>
            </h1>
          
          </div>
        </div>

        {/* Blog Grid Section */}
        <div className=" mx-auto py-12 px-4 justify-center ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12 ">
            {blogData.map((blog) => (
              <Card
                key={blog.id}
                className=" sm:min-h-96 sm:max-w-80  grid grid-flow-row justify-center...transition duration-500 transform hover:-translate-y-2 motion-reduce:transition-none motion-reduce:hover:transform-none  border-none shadow-none hover:shadow-2xl hover:shadow-slate-500 "
              >
                <img
                  src={blog.featureImage}
                  alt={blog.title}
                  className="rounded-lg "
                />
                <Toggle className="bg-sky-600 max-w-32 text-white place-self-end -mt-10 rounded-b-none rounded-r-none ">
                  {blog.date}
                </Toggle>
                <div className="grid grid-flow-row p-6 gap-y-4 ">
                  <h1 className="text-lg font-semibold">{blog.title}</h1>
                  <p className="text-xs font-extralight pb-4 border-b-2">
                    {blog.minidescription}
                  </p>
                  <div className="grid grid-flow-col justify-between">
                    <div className="grid grid-flow-col justify-start gap-2">
                      <Link href="">
                        <Heart size={16} color="#1a1a1a" strokeWidth={1} />
                      </Link>
                      <Link href="">
                        <MessageCircle
                          size={16}
                          color="#141414"
                          strokeWidth={1}
                        />
                      </Link>
                    </div>

                    <Link href={`/blogDash/blog/${blog.id}`}>
                      <Button variant={"hms"}>Read More</Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
