import { PlusIcon } from "lucide-react";
import React, { useState } from "react";

const AddExperience = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };
  return (
    <div className="flex flex-col justify-center p-2 ">
      <h1 className="font-bold text-[#08355D] text-2xl"> Add Exprience</h1>
      <div className="bg-[#e0ebf1] mt-10">
        <p className="text-lg ">
          Notify network Turn on to notify your network of key profile changes
          (such as new job) and work <br />
          anniversaries.Updates can take up to 2 hours. Learn more about sharing
          profile changes.{" "}
          <button
            className={`ml-[280px] px-4 py-2 rounded-md ${
              isOn ? "bg-green-600 text-white" : "bg-gray-400 text-black"
            }`}
            onClick={handleToggle}
          >
            {isOn ? "On" : "Off"}
          </button>
        </p>
      </div>

      <div className="= flex flex-col justify-center rounded-lg">
        <form className=" max-w-md mx-60 pt-5">
          <div className="mb-8">
            <label
              htmlFor="position"
              className="block text-[#08355D] font-medium mb-1 ml-4"
            ></label>
            POSITION
            <input
              type="text"
              placeholder="Ex:Technical Analyst"
              className="h-9 w-[450px] px-2 py-1 outline-transparent bg-white border-gray border-2"
            />
          </div>

          <div className="mb-8">
            <label
              htmlFor="Company"
              className="block text-[#08355D]font-medium mb-1 ml-4"
            ></label>
            COMPANY
            <input
              type="text"
              placeholder="Enter company here"
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
            outline-transparent bg-white border-gray border-2"
            />
          </div>
        </form>
        <button className="bg-[#0B4459] text-white px-4 py-2 ml-auto mr-60 rounded-lg flex flex-gap-x-1">
          Save
        </button>
      </div>
    </div>
  );
};

export default AddExperience;
