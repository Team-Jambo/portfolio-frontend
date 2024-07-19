import React from "react";

const AddAchievement = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50">
      <div className="bg-white rounded-lg shadow-lg p-10 w-full max-w-lg">
        <h1 className="font-bold text-[#2286C9] text-2xl text-center mb-5">
          Add Achievement
        </h1>
        <form className="space-y-6 ">
          <div className="mb-8 text-[#f79626]">
            <label
              htmlFor="awardTpye"
              className="block text-[#2286C9]] font-medium"
            >
              {" "}
              AWARD TYPE
            </label>

            <input
              type="text"
              id="award"
              placeholder="Enter award type"
              className="h-9 w-full px-2 py-1 outline-transparent bg-white border-gray border-2 rounded"
            />
          </div>

          <div className="mb-8 ">
            <label
              htmlFor="description"
              className="block font-medium text-[#f79626]"
            >
              DESCRIPTION
            </label>

            <input
              type="text"
              id="description"
              placeholder="Enter description"
              className="h-9 w-full px-2 py-1 outline-transparent bg-white border-gray border-2 rounded"
            />
          </div>

          <div className="mb-8 ">
            <label
              htmlFor="description"
              className="block font-medium text-[#f79626]"
            >
              IMAGE
            </label>

            <input
              type="file"
              id="image"
              placeholder="Certification here"
              className="h-9 w-full px-2 py-1 outline-transparent bg-white border-gray border-2 rounded"
            />
          </div>
          <div className="mb-8 ">
            <label htmlFor="date" className="block font-medium text-[#f79626]">
              DATE
            </label>

            <input
              type="text"
              id="date"
              placeholder="Enter date"
              className="h-9 w-full px-2 py-1 outline-transparent bg-white border-gray border-2 rounded"
            />
          </div>

          <div className="mb-8">
            <label htmlFor="grade" className="block font-medium text-[#f79626]">
              {" "}
              NAME OF INSTITUTION
            </label>

            <input
              type="text"
              id="name"
              placeholder="Enter institution"
              className="h-9 w-full px-2 py-1 outline-transparent bg-white border-gray border-2 rounded"
            />
          </div>

          <button className="bg-[#2286C9]  text-white px-4 py-2 rounded-lg w-full">
            Add Education
          </button>
        </form>
      </div>
    </div>
  );
};
export default AddAchievement;
