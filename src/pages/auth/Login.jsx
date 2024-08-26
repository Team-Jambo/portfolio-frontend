import { set, useForm } from "react-hook-form";
import log from "../../assets/images/pice.jpeg";
import { apiLogin } from "../../services/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";


const Login = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const { register, 
    handleSubmit, 
    formState: { errors },
  } = useForm({ reValidateMode: "onBlur", mode: "all" });

  const addToLocalStorage = (accessToken, user) => {
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("firstName", user.firstName);
    localStorage.setItem("lastName", user.lastName);
    localStorage.setItem("userName", user.userName);
  };

  const onSubmit = async (data) => {
    console.log(data);
    setIsSubmitting(true);

    try {
      const res = await apiLogin({
        userName: data.userName,
        password: data.password,
      });
      console.log(res.data);

      addToLocalStorage(res.data.accessToken, res.data.user);

      toast.success(res.data.message);
      setTimeout(() => {
        navigate("/dashboard")
      }, 5000)
    } catch (error) {
      console.log(error);
      toast.error("An error occured!");
    } finally {
      setIsSubmitting(false)
    }
  };

  return (
    <div className="flex flex-row justify-between bg-white rounded-lg gap-x-5">
      <div className="w-50%  pt-10 ">
        <img src={log} alt="login image" />
      </div>

     
        <div className="flex flex-col rounded-lg w-50%">
          <h1 className="flex justify-around text-3xl font-bold p-10">
            {" "}
            Welcome back
          </h1>
          <p className="flex justify-around text-sm font-semibold  text-[#0B4459]">
            Login with your personal information{" "}
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)} className="flex flex-col max-w-md mx-auto pt-5"
        >
          <div className="mb-5">
            <label
              htmlFor="userName"
              className="block text-black font-medium mb-1 ml-4"
            >username
            </label>
            <input
              id="userName"
              type="text"
              placeholder="Type in username or email address"
              className="h-9 w-[450px] px-2 py-1 outline-transparent bg-white border-gray border-2"
              {...register("userName", { required: "username is required" })} 
            />
            {errors.userName && (
              <p className="text-red-500">{errors.userName.message}</p>
            )}
          </div>

          <div className="mb-5">
            <label
              htmlFor="password"
              className="block text-black font-medium mb-1 ml-4"
            >Password
            </label>
            <input
              id="password"
              type="text"
              placeholder="Type in your password"
              className="h-9 w-[450px] px-2 py-1 outline-transparent bg-white border-gray border-2"
              {...register("password", {
                required: "password is required",
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
            <Link to="/signup" className="underline">
              Sign up
            </Link>
          </div>
        </form>
    </div>
  );
};

export default Login;
