import React from "react";

const AddProject = () => {
  return (
    <div className="= flex flex-col justify-center rounded-lg">
      <form className=" max-w-md mx-60 pt-5">
        <div className="mb-8">
          <label
            htmlFor="awardType"
            className="block text-[#08355D] font-medium mb-1 ml-4"
          ></label>
          AWARD TYPE
          <input
            type="text"
            placeholder="Enter award type"
            className="h-9 w-[450px] px-2 py-1 outline-transparent bg-white border-gray border-2"
          />
        </div>

        <div className="mb-8">
          <label
            htmlFor="description"
            className="block text-[#08355D]font-medium mb-1 ml-4"
          ></label>
          DESCRIPTION
          <input
            type="text"
            placeholder="Enter Text"
            className="h-9 w-[450px] px-2 py-1 outline-transparent bg-white border-gray border-2"
          />
        </div>
        <div className="mb-8">
          <label
            htmlFor="image"
            className="block text-[#08355D]font-medium mb-1 ml-4"
          ></label>
          IMAGE
          <input
            type="image"
            placeholder="Browse for Image"
            className="h-9 w-[450px] px-2 py-1 outline-transparent bg-white border-gray border-2"
          />
        </div>

        <div className="mb-8">
          <label
            htmlFor="date"
            className="block text-[#08355D]font-medium mb-1 ml-4"
          ></label>
          DATE
          <input
            type="text"
            placeholder="Ex:dd/mm/yy"
            className="h-9 w-[450px] px-2 py-1 outline-transparent bg-white border-gray border-2"
          />
        </div>
        <div className="mb-8">
          <label
            htmlFor="Name of Institution"
            className="block text-[#08355D]font-medium mb-1 ml-4"
          ></label>
          NAME OF INSTITUTION
          <input
            type="text"
            placeholder="Ex:dd/mm/yy"
            className="h-9 w-[450px] px-2 py-1 outline-transparent bg-white border-gray border-2"
          />
        </div>
        <button className="bg-[#0B4459] text-white px-4 py-2 ml-auto mr-60 rounded-lg flex flex-gap-x-1">
          Add Achievement
        </button>
      </form>
    </div>
  );
};
export default AddProject;
