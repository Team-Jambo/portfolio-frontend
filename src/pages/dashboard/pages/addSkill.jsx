import { useForm } from "react-hook-form";
import { apiAddSkill } from "../../../services/skills";
import { toast } from "react-toastify";
import { useState } from "react";
import Loader from "../../../components/Loader";

const AddSkill = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    console.log(data);
    setIsSubmitting(true);
    try {
      const res = await apiAddSkill({
        typeOfSkill: data.name,
        levelOfProficiency: data.levelOfProficiency,
      });

      console.log(res.data);
      toast.success(res.data.message);
    } catch (error) {
      console.log(error);
      toast.error("An error occured");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    // <div className="h-screen flex items-center justify-center bg-gray-50">
    //   <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
    <div className="flex flex-col justify-center p-2 ">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Add New Project
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className=" max-w-md mx-60 pt-5">
        <div className="mb-8">
          <label
            htmlFor="typeOfSkill"
            className="block text-[#08355D] font-medium mb-1 ml-4"
          ></label>
          TYPE OF SKILLS
          <input
            type="text"
            {...register("name", { required: "name is required" })}
            placeholder="Enter new skill acquired"
            className="h-9 w-[450px] px-2 py-1 outline-transparent bg-white border-gray border-2"
          />
          {/* {errors.name && (
              <p className="text-red-500">{errors.name.message}</p> )} */}
        </div>

        <div className="mb-4">
          <label
            htmlFor="Location"
            className="block text-[#08355D]font-medium mb-1 ml-4"
          ></label>
          LEVEL OF PROFICIENCY
          <select
            id="level of proficiency"
            placeholder="level of proficiency"
            {...register("levelOfProficiency", {
              required: "level of proficiency is required",
            })}
            className="h-9 w-[450px] px-2 py-1 text-slate-300 outline-transparent bg-whiteborder-gray border-2"
          >
            <option value="level of proficiency">Level Of Proficiency</option>
            <option value="Advanced">Advanced</option>
            <option value="Intermediary">Intermediary</option>
            <option value="Beginner">Beginner</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-[#0B4459] text-white px-4 py-2 ml-auto rounded-lg flex flex-gap-x-1"
        >
          {isSubmitting ? <Loader /> : "Add Skill"}
        </button>
      </form>
    </div>
  );
};

export default AddSkill;
