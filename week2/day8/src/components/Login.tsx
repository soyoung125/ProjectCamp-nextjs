import Button from "./loginForm/Button";
import Checkbox from "./loginForm/Checkbox";
import Input from "./loginForm/Input";

const Login = () => {
  return (
    <div className="item-middle bg-black inter">
      <div className="flex flex-col w-[375px] bg-white rounded-lg px-[25px] py-10 gap-[20px]">
        <div className="flex flex-col gap-[10px]">
          <h1 className="text-xl font-bold text-[#4F4F4F]">Sign Into App</h1>
          <p className="text-[#4F4F4F] text-sm">
            Please enter your details to contine.
          </p>
        </div>

        <form action="" className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Input type="text" placeholder="Enter Your Name" />
            <Input type="email" placeholder="someone@example.com" />
            <Input type="password" placeholder="Enter Password" />
            <Checkbox>I agree with terms and policies.</Checkbox>
          </div>

          <div className="flex flex-col gap-4">
            <Button className="bg-[#4F4F4F]">Sign In</Button>
            <Button className="border border-[#4F4F4F] text-[#4F4F4F]">
              Go To Log In
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
