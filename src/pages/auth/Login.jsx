import { set, useForm } from "react-hook-form";
import log from "../../assets/images/newone.jpg"
import { apiLogin } from "../../services/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../../components/Loader";

const Login = () => {

  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate()


  const { register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    setIsSubmitting(true);

    try {
      const res = await apiLogin({
        userName: data.firstName,
        password: data.password,
      })
      console.log("Response", res.data)
      setTimeout(() => {
        navigate("/dashboard")
      }, 5000)

    } catch (error) {
      console.log(error)
      toast.error("An error occured!");
    }
    finally {
      setIsSubmitting(false)
    }
  };

  return (
    <div className="flex flex-row justify-center bg-white rounded-lg pt-20">
      <div className="w-50% relative mr-10 ">
        <img src={log} alt="login image" className="w-full" />
      </div>

      <div className="flex flex-col rounded-lg">
        <div className="w-50%">
          <h1 className="flex justify-around text-3xl font-bold p-10"> Welcome back</h1>
          <p className="flex justify-around text-sm font-semibold  text-[#0B4459]">Login with your personal information </p>
        </div>
        <form
          className="flex flex-col max-w-md mx-auto pt-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-5">
            <label
              htmlFor="firstname"
              className="block text-black font-medium mb-1 ml-4"
            ></label>{" "}
            username
            <input
              id="firstName"
              type="text"
              placeholder="Type in username or email address"
              className="h-9 w-[450px] px-2 py-1 outline-transparent bg-white border-gray border-2"
              {...register("firstName", { required: "username is required" })}
            />
            {errors.firstName && (
              <p className="text-red-500">{errors.firstName.message}</p>
            )}
          </div>

          <div className="mb-5">
            <label
              htmlFor="password"
              className="block text-black font-medium mb-1 ml-4"
            ></label>
            Password
            <input
              id="password"
              type="text"
              placeholder="Type in your password"
              className="h-9 w-[450px] px-2 py-1 outline-transparent bg-white border-gray border-2"
              {...register("password", {
                required: "password is required",
                minLength: 8,
              })}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
            <p className="flex justify-end text-sm ">Forgot password?</p>
          </div>
          <button
            type="submit"
            className="bg-[#0B4459] text-white w-full py-1 rounded-md font-semibold"
          >
            {isSubmitting ? <Loader /> : "Login"}
          </button>
          <div className="flex flex-row text-sm font-semibold justify-evenly pt-4">
            <p>Don't Have An Account?</p>
            <button className="text-orange-500 animate-pulse">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login