import { useForm } from "react-hook-form";
import { Link } from "lucide-react";

const LoginForm = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (

    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <div>
          <label
            htmlFor="email"
            className="font-semibold">
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register("email", {
              required: "Email Address is required"})}
            placeholder="Enter your Email Address"
            className="border-2"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>)}
        </div>

        <div>
          <label
            htmlFor="password"
            className="font-semibold">
            Password
          </label>
          <input
            id="password"
            type="password"
            {...register("password", {
              required: "Password is required"})}
             placeholder="Enter your password"
            className="border-2"
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>)}
        </div>
        
        <button
        type="submit"
        className="flex bg-blue-950 gap-x-2 w-40 rounded-md items-center text-white font-mono"
        >
          Login
        </button>
        <div>
          <p>Don't have an Account?</p>
          <Link to="/Signup" className="underline">
          SignUp
          </Link>
        </div>

      </div>
    </form>

  )
}

export default LoginForm