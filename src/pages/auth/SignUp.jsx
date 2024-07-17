import { useForm } from "react-hook-form";
import SignupImage from "../../assets/image/picture.jpeg";
import { apiSignUp, apiCheckUserNameExist } from "../../services/auth";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader";
import { debounce } from "lodash";

const SignUp = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [UsernameAvailable, setUsernameAvailable] = useState(false);
  const [UsernameNotAvailable, setUsernameNotAvailable] = useState(false);
  const [isUsernameLoading, setIsUsernameLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const checkUserName = async (userName) => {
    setIsUsernameLoading(true);
    try {
      const res = await apiCheckUserNameExist(userName);
      console.log(res.data);
      const user = res.data.user;
      if (user) {
        setUsernameNotAvailable(true);
        setUsernameAvailable(false);
      } else {
        setUsernameAvailable(true);
        setUsernameNotAvailable(false);
      }
    } catch (error) {
      console.log(error);
      toast.error("An error occured!");
    } finally {
      setIsUsernameLoading(true);
    }
  };

  const userNameWatch = watch("userName");

  useEffect(() => {
    const debouncedSearch = debounce(async () => {
      if (userNameWatch) {
        await checkUserName(userNameWatch);
      }
    }, 1000);

    debouncedSearch();
    return () => {
      debouncedSearch.cancel();
    };
  }, [userNameWatch]);

  const onSubmit = async (data) => {
    console.log(data);
    setIsSubmitting(true);
    let payload = {
      firstName: data.firstName,
      lastName: data.lastName,
      userName: data.userName,
      email: data.email,
      password: data.password,
      confirmedPassword: data.confirmedPassword,
    };

    if (data.otherNames) {
      payload = { ...payload, otherNames: data.otherNames };
    }

    try {
      const res = await apiSignUp(payload);
      console.log(res.data);
      toast.success(res.data);

      setTimeout(() => {
        navigate("/login");
      }, 5000);
    } catch (error) {
      console.log(error);
      toast.error("An error occured!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex justify-evenly bg-[#eeeeee] rounded-lg ">
      <div className="w-1/2 relative mr-10 ">
        <img src={SignupImage} alt="sign-up image" className="w-full" />
        <div className=" absolute  flex justify-center content-center">
          <h1> Welcome back </h1>
          <p>To keep connected with us provide us with your information </p>
          <button>Signin</button>
        </div>
      </div>

      <div className="= w-1/2 rounded-lg">
        <form
          className="flex flex-col max-w-md mx-auto pt-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-5">
            <label
              htmlFor="firstname"
              className="block text-black font-medium mb-1 ml-4"
            ></label>{" "}
            First Name
            <input
              id="firstName"
              type="text"
              placeholder="Enter your firstname"
              className="h-9 w-[450px] px-2 py-1 outline-transparent bg-white border-gray border-2"
              {...register("firstName", { required: "First name is required" })}
            />
            {errors.firstName && (
              <p className="text-red-500">{errors.firstName.message}</p>
            )}
          </div>

          <div className="mb-5">
            <label
              htmlFor="lastname"
              className="block text-black font-medium mb-1 ml-4"
            ></label>{" "}
            Last Name
            <input
              id="lastName"
              type="text"
              placeholder="Enter your lastname"
              className="h-9 w-[450px] px-2 py-1 outline-transparent bg-white border-gray border-2"
              {...register("lastName", {
                required: "Last name is required",
                minLength: 2,
              })}
            />
            {errors.lastName && (
              <p className="text-red-500">{errors.lastName.message}</p>
            )}
          </div>
          <div className="mb-5">
            <label
              htmlFor="othernames"
              className="block text-black font-medium mb-1 ml-4"
            ></label>{" "}
            Other Names
            <input
              id="otherNames"
              type="text"
              placeholder="Enter your othernames"
              className="h-9 w-[450px] px-2 py-1 outline-transparent bg-white border-gray border-2"
              {...register("otherNames")}
            />
            {errors.otherNames && (
              <p className="text-red-500">{errors.otherNames.message}</p>
            )}
          </div>
          <div className="mb-5">
            <label
              htmlFor="username"
              className="block text-black font-medium mb-1 ml-4"
            ></label>{" "}
            User Name
            <input
              id="userName"
              type="text"
              placeholder="Enter your username"
              className="h-9 w-[450px] px-2 py-1 outline-transparent bg-white border-gray border-2"
              {...register("userName", { required: "User Name is required" })}
            />
            {errors.userName && (
              <p className="text-red-500">{errors.userName.message}</p>
            )}
            <div className="flex items-center gap-2">
              {isUsernameLoading && <Loader />}
              {UsernameAvailable && (
                <p className="text-green-500">Username is available!</p>
              )}
              {UsernameNotAvailable && (
                <p className="text-red-500">Username is already taken!</p>
              )}
            </div>
          </div>

          <div className="mb-5">
            <label
              htmlFor="email address"
              className="block text-black font-medium mb-1 ml-4"
            ></label>
            Email Address
            <input
              id="email"
              type="text"
              placeholder="Enter your email address"
              className="h-9 w-[450px] px-2 py-1 outline-transparent bg-white border-gray border-2"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
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
              placeholder="Enter your password"
              className="h-9 w-[450px] px-2 py-1 outline-transparent bg-white border-gray border-2"
              {...register("password", {
                required: "Password is required",
                minLength: 8,
              })}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>
          <div className="mb-10">
            <label
              htmlFor="Confirm Password"
              className="block text-black font-medium mb-1 ml-4"
            ></label>
            Confirm Password
            <input
              id="password"
              type="text"
              placeholder="Confirm your password"
              className="h-9 w-[450px] px-2 py-1 outline-transparent bg-white border-gray border-2"
              {...register("password", {
                required: "Password is required",
                minLength: 8,
              })}
            />
          </div>
          <button
            type="submit"
            className="bg-[#0B4459] text-white w-full py-1 rounded-md font-semibold"
          >
            {isSubmitting ? <Loader /> : "Signup"}
          </button>
          <p className=" flex justify-center font-bold">OR</p>
          <button className="bg-white text-[#0B4459] w-full py-1 rounded-md font-semibold">
            Sign up with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
