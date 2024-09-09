import React from "react";
import Specialities from "@/json/specialities";
import Title from "@/components/Title";

const page = () => {
  return (
    <section>
      <Title title={"Specialities"}></Title>

      <div className="flex justify-center  ">
        <div className="grid justify-center py-4  ">
          {Specialities.card1.map((speciality, index) => (
            <ul className="" key={speciality.id}>
              <li
                className={` text-lg text-center text-wrap px-10  ${
                  index % 2 === 0
                    ? "bg-sky-200 border-sky-900 border-dotted  border-b-2 border-r-2"
                    : "bg-white"
                }`}
              >
                {speciality.description}
              </li>
            </ul>
          ))}
        </div>
        <div className="grid justify-center py-4 ">
          {Specialities.card2.map((speciality, index) => (
            <ul className="" key={speciality.id}>
              <li
                className={` text-lg text-center text-wrap  ${
                  index % 2 === 0
                    ? "bg-white "
                    : "bg-sky-200 border-sky-700 border-dotted border-b-2 border-l-2"
                }`}
              >
                {speciality.description}
              </li>
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;
