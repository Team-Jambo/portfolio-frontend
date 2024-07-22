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
    <div className="flex flex-col items-center justify-center min-h-screen  bg-[#2286C9]  p-0">
      <div className="bg-white rounded-lg shadow-lg p-10 w-full max-w-lg ">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Add New Skill
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="mb-8">
            <label
              htmlFor="typeOfSkill"
              className="block text-[#2286C9] font-medium mb-1 ml-4"
            ></label>
            TYPE OF SKILLS
            <input
              type="text"
              {...register("name", { required: "name is required" })}
              placeholder="Enter new skill acquired"
              className="h-9 w-full px-2 py-1 outline-transparent bg-white border-gray border-2 rounded"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="levelOfProficiency"
              className="block text-[#2286C9] font-medium mb-1 ml-4"
            ></label>
            LEVEL OF PROFICIENCY
            <select
              id="levelOfProficiency"
              {...register("levelOfProficiency", {
                required: "level of proficiency is required",
              })}
              className="h-9 w-full px-2 py-1 outline-transparent bg-white border-gray border-2 rounded"
            >
              <option value="proficiency">Proficiency</option>
              <option value="Advanced">Advanced</option>
              <option value="Intermediary">Intermediary</option>
              <option value="Beginner">Beginner</option>
            </select>
            {errors.levelOfProficiency && (
              <p className="text-red-500">
                {errors.levelOfProficiency.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="bg-[#f79626] text-white px-4 py-2 rounded-lg w-full"
          >
            {isSubmitting ? <Loader /> : "Add Skill"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddSkill;
