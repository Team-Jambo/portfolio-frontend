const AddEducation = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50">
      <div className="bg-white rounded-lg shadow-lg p-10 w-full max-w-lg">
        <h1 className="font-bold text-[#2286C9] text-2xl text-center mb-5">
          Add Education
        </h1>
        <form className="space-y-6 ">
          <div className="mb-8 text-[#f79626]">
            <label
              htmlFor="institution"
              className="block text-[#2286C9]] font-medium"
            >
              {" "}
              INSTITUTION
            </label>

            <input
              type="text"
              id="institution"
              placeholder="Enter institution here"
              className="h-9 w-full px-2 py-1 outline-transparent bg-white border-gray border-2 rounded"
            />
          </div>

          <div className="mb-8 ">
            <label
              htmlFor="program"
              className="block font-medium text-[#f79626]"
            >
              PROGRAM
            </label>

            <input
              type="text"
              id="program"
              placeholder="Enter program here"
              className="h-9 w-full px-2 py-1 outline-transparent bg-white border-gray border-2 rounded"
            />
          </div>

          <div className="mb-8">
            <label
              htmlFor="location"
              className="block font-medium text-[#f79626]"
            >
              {" "}
              LOCATION
            </label>

            <select
              id="location"
              className="h-9 w-full px-2 py-1 outline-transparent bg-white border-gray border-2 rounded"
            >
              <option value="Country">Country</option>
              <option value="Algeria">Algeria</option>
              <option value="Botswana">Botswana</option>
              <option value="Canada">Canada</option>
              <option value="Denmark">Denmark</option>
              <option value="England">England</option>
              <option value="France">France</option>
              <option value="Ghana">Ghana</option>
              <option value="Germany">Germany</option>
              <option value="Hungary">Hungary</option>
              <option value="Ireland">Ireland</option>
              <option value="Japan">Japan</option>
            </select>
          </div>

          <div className="mb-8">
            <label htmlFor="grade" className="block font-medium text-[#f79626]">
              {" "}
              GRADE
            </label>

            <input
              type="text"
              id="grade"
              placeholder="Enter grade"
              className="h-9 w-full px-2 py-1 outline-transparent bg-white border-gray border-2 rounded"
            />
          </div>

          <div className="mb-8">
            <label
              htmlFor="start-date"
              className="block text-[#f79626] font-medium "
            >
              {" "}
              START DATE
            </label>

            <input
              type="date"
              id="start-date"
              className="h-9 w-full px-2 py-1 outline-transparent bg-white border-gray border-2 rounded"
            />
          </div>

          <div className="mb-8">
            <label
              htmlFor="end-date"
              className="block text-[#f79626] font-medium "
            >
              END DATE
            </label>

            <input
              type="date"
              id="end-date"
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

export default AddEducation;
