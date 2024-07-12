import { useForm } from "react-hook-form";
import { Link } from "lucide-react";

const LoginForm = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (

    <form onSubmit={handleSubmit(onSubmit)} className="">
      <div className="">
        <div className="flex flex-col justify-center w-60 ">
          <label
            htmlFor="email"
            className="font-semibold text-sm ">
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register("email", {
              required: "Email Address is required"
            })}
            placeholder="Enter your Email Address"
            className="border-2 "
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>)}
        </div>

        <div className="flex flex-col justify-center w-60">
          <label
            htmlFor="password"
            className="font-semibold text-sm py-2">
            Password
          </label>
          <input
            id="password"
            type="password"
            {...register("password", {
              required: "Password is required"
            })}
            placeholder="Enter your password"
            className="border-2"
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>)}
        </div>

        <button
          type="submit"
          className="flex justify-around bg-[#252549] w-60 rounded-md text-white font-semibold px-10"
        >
          Log In
        </button>
        <div>
          <p>Don't have an Account?</p>
          <Link to="signup" className="underline">
            SignUp
          </Link>
        </div>

      </div>
    </form>

  )
}

export default LoginForm