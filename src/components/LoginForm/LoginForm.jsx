import { useForm } from "react-hook-form";
import Login from "../../pages/auth/Login";

const LoginForm = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (

    <form className="" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div>
          <label
            htmlFor="name"
            className="font-semibold">
            Username
          </label>
          <input
            id="name"
            type="text"
            placeholder="Enter your Email Address"
            className="border-2"
            {...register("name", {
              required: "Email Address is required", minLength: 2,
            })}
          />
          {errors.name && (
            <p className="text-red-500">{errors.name.message}</p>)}
        </div>

        <div>
          <label
            htmlFor="passname"
            className="font-semibold">
            Password
          </label>
          <input
            id="passname"
            type="text"
            placeholder="Enter your password"
            className="border-2"
            {...register("name", {
              required: "Password is required", minLength: 2,
            })}
          />
          {errors.name && (
            <p className="text-red-500">{errors.passname.message}</p>)}
        </div>

      </div>
    </form>

  )
}

export default LoginForm