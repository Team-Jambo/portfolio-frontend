import { ArrowLeft } from "lucide-react";
import React from "react";

const AddSkill = () => {
  return (
    <div className="flex flex-col justify-center p-2 ">
      <div className="flex items-center">
        <h1 className="font-bold text-[#08355D] text-2xl">
          <ArrowLeft /> Add Skill
        </h1>
      </div>
    </div>
  );
};

export default AddSkill;
