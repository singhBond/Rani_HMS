import React from "react";
import Specialities from "@/json/specialities";
import Title from "@/components/Title";

const page = () => {
  return (
    <section className="p-4 md:block hidden">
      {/* Title */}
      <Title title="Specialities" />

      {/* Specialities Grid */}
      <div className="flex flex-col lg:flex-row justify-center gap-8 py-6">
        {/* First Column of Specialities */}
        <div className="grid justify-center text-lg gap-4">
          {Specialities.card1.map((speciality, index) => (
            <ul key={speciality.id}>
              <li
                className={`px-6 py-4 text-center rounded-md transition duration-300 ${
                  index % 2 === 0
                    ? "bg-sky-200 border border-sky-900 border-dotted"
                    : "bg-white"
                }`}
              >
                {speciality.description}
              </li>
            </ul>
          ))}
        </div>

        {/* Second Column of Specialities */}
        <div className="grid justify-center text-lg gap-4">
          {Specialities.card2.map((speciality, index) => (
            <ul key={speciality.id}>
              <li
                className={`px-6 py-4 text-center rounded-md transition duration-300 ${
                  index % 2 === 0
                    ? "bg-white"
                    : "bg-sky-200 border border-sky-700 border-dotted"
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
