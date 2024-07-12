import { useForm } from "react-hook-form";
import SignupImage from "../../assets/image/picture.jpeg";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex justify-evenly bg-[#eeeeee] rounded-lg ">
      <div className="w-1/2 relative mr-10 ">
        <img src={SignupImage} alt="sign-up image" className="w-full" />
        <div className=" absolute  flex justify-center content-center">
          <h1> Welcome back</h1>
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
            {errors.firstName && (
              <p className="text-red-500">{errors.firstName.message}</p>
            )}
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
              {...register("email", { required: "email is required" })}
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
              placeholder="Enter your password"
              className="h-9 w-[450px] px-2 py-1 outline-transparent bg-white border-gray border-2"
              {...register("password", {
                required: "Password is required",
                minLength: 8,
              })}
            />
            {errors.firstName && (
              <p className="text-red-500">{errors.firstName.message}</p>
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
            Sign Up
          </button>
          <p className=" flex justify-center font-bold">OR</p>
          <button
            type="submit"
            className="bg-white text-[#0B4459] w-full py-1 rounded-md font-semibold"
          >
            Sign up with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
