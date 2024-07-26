import React, { useState } from "react";

const AddProject = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-lg p-10 w-full max-w-lg">
        <h1 className="font-bold text-[#08355D] text-2xl text-center mb-5">
          Add Project
        </h1>
        <form className="space-y-6">
          <div className="mb-8">
            <label
              htmlFor="name"
              className="block text-[#08355D] font-medium mb-1 ml-4"
            ></label>
            PROJECT NAME
            <input
              type="text"
              id="project name"
              placeholder="Project Name"
              className="h-9 w-full px-2 py-1 outline-transparent bg-white border-gray border-2 rounded"
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
              id="company"
              placeholder="Enter description here"
              className="h-9 w-full px-2 py-1 outline-transparent bg-white border-gray border-2 rounded"
            />
          </div>
          <div className="mb-8">
            <label
              htmlFor="contribution"
              className="block text-[#08355D] font-medium mb-1 ml-4"
            ></label>
            CONTRIBUTION
            <input
              type="text"
              id="contribution"
              placeholder="Enter contributors here"
              className="h-9 w-full px-2 py-1 outline-transparent bg-white border-gray border-2 rounded"
            />
          </div>

          <div className="mb-8">
            <label
              htmlFor="date"
              className="block text-[#08355D] font-medium mb-1 ml-4"
            ></label>
            DATE
            <input
              type="text"
              id="date"
              placeholder="Ex: dd/mm/yy here"
              className="h-9 w-full px-2 py-1 outline-transparent bg-white border-gray border-2 rounded"
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
              id="date"
              placeholder="Enter skill here"
              className="h-9 w-full px-2 py-1 outline-transparent bg-white border-gray border-2 rounded"
            />
          </div>
          <div className="mb-8">
            <label
              htmlFor="image"
              className="block text-[#08355D] font-medium mb-1 ml-4"
            ></label>
            IMAGE
            <input
              type="file"
              id="image"
              className="h-9 w-full px-2 py-1 outline-transparent bg-white border-gray border-2 rounded"
            />
          </div>

          <button className="bg-[#f79626] text-white px-4 py-2 rounded-lg w-full">
            Add Project
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProject;
