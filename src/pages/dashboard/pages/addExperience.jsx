import React, { useState } from "react";

const AddExperience = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-lg p-10 w-full max-w-lg">
        <h1 className="font-bold text-[#08355D] text-2xl text-center mb-5">
          Add Experience
        </h1>
        <form className="space-y-6">
          <div className="mb-8">
            <label
              htmlFor="position"
              className="block text-[#08355D] font-medium mb-1 ml-4"
            ></label>
            POSITION
            <input
              type="text"
              id="position"
              placeholder="Ex: Technical Analyst"
              className="h-9 w-full px-2 py-1 outline-transparent bg-white border-gray border-2 rounded"
            />
          </div>

          <div className="mb-8">
            <label
              htmlFor="company"
              className="block text-[#08355D] font-medium mb-1 ml-4"
            ></label>
            COMPANY
            <input
              type="text"
              id="company"
              placeholder="Enter company here"
              className="h-9 w-full px-2 py-1 outline-transparent bg-white border-gray border-2 rounded"
            />
          </div>

          <div className="mb-8">
            <label
              htmlFor="location"
              className="block text-[#08355D] font-medium mb-1 ml-4"
            ></label>
            LOCATION
            <select
              id="location"
              className="h-9 w-full px-2 py-1 outline-transparent bg-white border-gray border-2 rounded"
            >
              <option value="location">location</option>
              <option value="Accra">Accra</option>
              <option value="Kumasi">Kumasi</option>
              <option value="Tarkoradi">Tarkoradi</option>
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
              htmlFor="start-date"
              className="block text-[#08355D] font-medium mb-1 ml-4"
            ></label>
            START DATE
            <input
              type="date"
              id="start-date"
              className="h-9 w-full px-2 py-1 outline-transparent bg-white border-gray border-2 rounded"
            />
          </div>

          <div className="mb-8">
            <label
              htmlFor="end-date"
              className="block text-[#08355D] font-medium mb-1 ml-4"
            ></label>
            END DATE
            <input
              type="date"
              id="end-date"
              className="h-9 w-full px-2 py-1 outline-transparent bg-white border-gray border-2 rounded"
            />
          </div>

          <div className="mb-8">
            <label
              htmlFor="responsibilities"
              className="block text-[#08355D] font-medium mb-1 ml-4"
            ></label>
            RESPONSIBILITIES
            <textarea
              id="responsibilities"
              rows="4"
              placeholder="Enter text here."
              className="w-full px-2 py-1 outline-transparent bg-white border-gray border-2 rounded h-60"
            />
          </div>

          <button className="bg-[#f79626] text-white px-4 py-2 rounded-lg w-full">
            Add Experience
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddExperience;
