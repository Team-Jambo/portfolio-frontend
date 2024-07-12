import loginpic from "../../assets/images/loginpic.jpg";
import LoginForm from "../../components/LoginForm";
import log from "../../assets/images/newone.jpg";

const Login = () => {
  return (
    <div className="grid grid-cols-2 h-screen ">
      <div className="flex flex-row bg-purple-50 ">
        <img src={log} alt="login image" className="w-full" />

        <div className="flex flex-col justify-center w-full">
          <h1 className="text-4xl font-bold " > Welcome back</h1>
          <p>To login, enter your details </p>
          <LoginForm />
        </div>

      </div>
    </div>
  );
};
export default Login