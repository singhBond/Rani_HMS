import React from "react";
import Specialities from "@/json/specialities";

const page = () => {
  return (
    <div className="">
      <h2 className="text-sky-700 text-4xl mt-8 text-center ">Specialities</h2>
      <div className="flex justify-center  ">
      <div className="grid justify-center py-4  ">
        {Specialities.card1.map((speciality, index) => (
          <ul className="" key={speciality.id}>
            <li
              className={` text-lg text-center text-wrap px-10  ${
                index % 2 === 0 ? "bg-sky-200 border-sky-900 border-dotted  border-b-2 border-r-2" : "bg-white"
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
                index % 2 === 0 ? "bg-white " : "bg-sky-200 border-sky-700 border-dotted border-b-2 border-l-2"
              }`}
            >
              {speciality.description}
            </li>
          </ul>
        ))}
      </div>
      </div>
      
    </div>
  );
};

export default page;
