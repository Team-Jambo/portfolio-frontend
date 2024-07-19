import { ArrowLeft } from "lucide-react";
import React from "react";

const AddVolunteering = () => {
  return (
    <div className="= flex flex-col justify-center rounded-lg">
      <form className=" max-w-md mx-60 pt-5 ">
        <div className="mb-8 ">
          <label
            htmlFor="organisation"
            className="block text-[#08355D] font-medium mb-1 ml-4 "
          ></label>
          ORGANISATION
          <input
            type="text"
            placeholder="Ex:Technical Analyst"
            className="h-9 w-[450px] px-2 py-1 outline-transparent bg-white border-gray border-2  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
          />
        </div>

        <div className="mb-8">
          <label
            htmlFor="description"
            className="block text-[#08355D] font-medium mb-1 ml-4"
          ></label>
          DESCRIPTION
          <input
            type="text"
            placeholder="Enter description here"
            className="h-9 w-[450px] px-2 py-1 outline-transparent bg-white border-gray border-2  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
          />
        </div>
        <div className="mb-8">
          <label
            htmlFor="skill"
            className="block text-[#08355D] font-medium mb-1 ml-4"
          ></label>
          SKILL
          <input
            type="text"
            placeholder="Enter description here"
            className="h-9 w-[450px] px-2 py-1 outline-transparent bg-white border-gray border-2  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
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
            className="h-9 w-[450px] px-2 py-1 outline-transparent bg-white border-gray border-2  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
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
            className="h-9 w-[450px] px-2 py-1 outline-transparent bg-white border-gray border-2  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
          />
        </div>
        <div className="mb-8">
          <label
            htmlFor="role"
            className="block text-[#08355D] font-medium mb-1 ml-4"
          ></label>
          ROLE
          <input
            type="text"
            placeholder="Enter description here"
            className="h-9 w-[450px] px-2 py-1 outline-transparent bg-white border-gray border-2  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
          />
        </div>

        <div className="mb-8">
          <label
            htmlFor="Responsibilities"
            className="block text-[#08355D] font-medium mb-1 ml-4"
          ></label>
          RESPONSIBILITIES
          <textarea
            rows="20"
            cols="50"
            name="comment"
            form="userform"
            placeholder="Enter text here."
            className="h-60 w-[450px] px-2 py-1
        outline-transparent bg-white border-gray border-2  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
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
            className="h-9 w-[450px] px-2 py-1 outline-transparent bg-whiteborder-gray border-2  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
          >
            <option value="location">location</option>
            <option value="Accra">Accra</option>
            <option value="Kumasi">Kumai</option>
            <option value="Tarkoradi">Tarkoardi</option>
            <option value="CapeCoast">CapeCoast</option>
            <option value="Suyani">Suyani</option>
            <option value="Koforidua">Koforidua</option>
            <option value="Ho">Ho</option>
            <option value="Tamale">Tamale</option>
            <option value="Wa">Wa</option>
            <option value="Bolgatanga">Bolgatanga</option>
          </select>
        </div>
        <div className="flex justify-center gap-4">
          <button className="bg-sky-500 text-white px-4 py-2 rounded-lg">
            Add Volunteering
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddVolunteering;
