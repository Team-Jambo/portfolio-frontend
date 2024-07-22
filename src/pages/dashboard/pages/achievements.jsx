import { useEffect, useState } from "react";
import { K } from "../../../constants";
import PagesLayout from "../layouts/pagesLayout";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Achievements = () => {
  const navigate = useNavigate();

  return (
    <PagesLayout
      headerText="Achievements Acquired"
      buttonText="Add New Achievement"
      onClick={() => navigate("/dashboard/achievements/add-achievement")}
    >
      <div className="flex flex-col gap-12 p-7 text-justify leading-7 pb-5 tracking-wide">
        {K.ACHIEVEMENTS.map(
          (
            { awardType, description, image, date, nameOfInstitution },
            index
          ) => (
            <div
              key={index}
              className="h-40 w-[70vw] group relative py-1 px-2 transition-all duration-200 after:absolute after:buttom-0
              after:top-[92%] after:left-0 after:right-0 after:z-[-1] after:bg-[#9BCEE6] after:duration-200
              after:text-white hover:after:inset-0 text-[#0B4459] font-bold shadow-xl rounded-2xl p-5 "
            >
              <div className="grid grid-cols-2 text-3xl font-semibold">
                <div className="text-[#f79626] pt-8">
                  <span className="text-lg">{awardType}</span>
                </div>
                <div className="text-lg text-[#2286C9] inline-grid grid-cols-1">
                  <span>{description}</span>
                  <span className="text-lg">{image}</span>
                  <span className="text-lg">{date}</span>
                  <span className="text-lg">{nameOfInstitution}</span>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </PagesLayout>
  );
};

export default Achievements;
