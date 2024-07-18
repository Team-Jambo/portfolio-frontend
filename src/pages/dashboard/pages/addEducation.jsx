import React from "react";

const AddEducation = () => {
  return (
    <div className="= flex flex-col justify-center rounded-lg">
      <form className=" max-w-md mx-60 pt-5">
        <div className="mb-8">
          <label
            htmlFor="institution"
            className="block text-[#08355D] font-medium mb-1 ml-4"
          ></label>
          INSTITUTION
          <input
            type="text"
            placeholder="Enter institution here"
            className="h-9 w-[450px] px-2 py-1 outline-transparent bg-white border-gray border-2"
          />
        </div>

        <div className="mb-8">
          <label
            htmlFor="progarm"
            className="block text-[#08355D]font-medium mb-1 ml-4"
          ></label>
          PROGRAM
          <input
            type="text"
            placeholder="Enter progran here"
            className="h-9 w-[450px] px-2 py-1 outline-transparent bg-white border-gray border-2"
          />
        </div>
        <div className="mb-8">
          <label
            htmlFor="Location"
            className="block text-[#08355D]font-medium mb-1 ml-4"
          ></label>
          LOCATION
          <select
            id="Location"
            placeholder="location"
            className="h-9 w-[450px] px-2 py-1 outline-transparent bg-whiteborder-gray border-2"
          >
            <option value="Algeria">Algeria</option>
            <option value="Botswana">Bostswana</option>
            <option value="Canada">Canada</option>
            <option value="Denmark">Denmark</option>
            <option value="England">England</option>
            <option value="France">France</option>
            <option value="Ghana">Ghana</option>
            <option value="Germany">Germany</option>
            <option value="Hungary">Tamale</option>
            <option value="Ireland">Ireland</option>
            <option value="Japan">Japan</option>
          </select>
        </div>
        <div className="mb-8">
          <label
            htmlFor="grade"
            className="block text-[#08355D]font-medium mb-1 ml-4"
          ></label>
          GRADE
          <input
            type="text"
            placeholder="Enter grade"
            className="h-9 w-[450px] px-2 py-1 outline-transparent bg-white border-gray border-2"
          />
        </div>
        <div className="mb-8">
          <label
            htmlFor="Start Date"
            className="block text-[#08355D]font-medium mb-1 ml-4"
          ></label>
          START DATE
          <input
            type="date"
            className="h-9 w-[450px] px-2 py-1 outline-transparent bg-white border-gray border-2"
          />
        </div>
        <div className="mb-8">
          <label
            htmlFor="End Date"
            className="block text-[#08355D] font-medium mb-1 ml-4"
          ></label>
          END DATE
          <input
            type="date"
            className="h-9 w-[450px] px-2 py-1 outline-transparent bg-white border-gray border-2"
          />
        </div>
        <button className="bg-[#0B4459] text-white px-4 py-2 ml-auto mr-60 rounded-lg flex flex-gap-x-1">
          Add Education
        </button>
      </form>
    </div>
  );
};

export default AddEducation;
