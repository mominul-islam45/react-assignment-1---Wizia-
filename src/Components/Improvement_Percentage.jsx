import React from "react";

function Improvement_Percentage() {
  const percentages = [
    { percentage: 32, des: "Improvement in Open Rates" },
    { percentage: 75, des: "Improvement in Ramp Time" },
    { percentage: 35, des: "Improvement in Meetings Booked" },
  ];

  return (
    <div className="py-10 md:py-20 mx-8 md:mx-16 2xl:mx-auto max-w-[1700px] px-6 sm:px-12 lg:px-16 2xl:px-24 text-white rounded-3xl bg-[url(./assets/Frame18.png)] bg-cover bg-right">
      <div>
        <h2 className="text-[28px] sm:text-[32px] font-semibold">
          Allocate effort where your reps make an inpact.
        </h2>
        <span className="italic text-[24px] sm:text-[32px] text-cyan font-medium">
          Let us handle the rest.
        </span>
        <p className="font-work_sans text-lg leading-6 sm:leading-7 sm:text-[20px] font-light py-6">
          Keep your reps “in the air” -- out in the field and on the phone where
          they can build relationships.
        </p>
      </div>

      {percentages.map((item, i) => (
        <div key={i}>
          <h3>{item.percentage}%</h3>
          <p>{item.des}</p>
        </div>
      ))}
    </div>
  );
}

export default Improvement_Percentage;
