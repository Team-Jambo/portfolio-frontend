import loginpic from "../../assets/images/loginpic.jpg"
import LoginForm from "../../components/LoginForm";

const Login = () => {
  return (
    <div className="grid grid-cols-2 h-screen ">
      <div className="flex flex-row bg-purple-50 ">
        <img src={loginpic} alt="login image" className="w-full" />

        <div className="flex flex-col justify-center gap-y-5 px-48 w-full space-x-6">
          <h1 className="flex text-3xl font-bold " > Welcome back</h1>
          <p>To login, enter your details </p>
          <LoginForm />
        </div>
        
      </div>
    </div>
  );
};
export default Login