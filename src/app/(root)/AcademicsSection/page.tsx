import Title from "@/components/Title";
import React from "react";
import Marquee from "react-fast-marquee";

const page = () => {
  return (
    <section className="section">
      <div>
        <h1 className="grid text-center text-xl text-sky-700  border-b-4 rounded-b-md border-sky-200">
          Introduction
        </h1>
        <p>
           These activities encompass the undergraduate, postgraduate
          and doctoral programmes for medical, nursing and paramedical courses.
          These activities are conducted by the undergraduate, postgraduate and
          paramedical cells of Academic Section.
        </p>
        <p>
          The Department functions under the Administrative Control of
          Dean(Academic) supported by Associate Dean (Academic)and Registrar.
        </p>
        <Marquee>Note:Anti Ragging Duty Roaster 2024</Marquee>
      </div>
    </section>
  );
};

export default page;
