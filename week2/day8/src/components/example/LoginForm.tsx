import { useRef, useState } from "react";
import Button from "../loginForm/Button";
import Checkbox from "../loginForm/Checkbox";
import Input from "../loginForm/Input";

const LoginForm = () => {
  const [type, setType] = useState("Sign"); // Sign or Login
  const [form, setForm] = useState({
    name: "",
    email: "",
    pwd: "",
    agree: false,
  });
  let nameEl = useRef<HTMLInputElement>(null);
  let emailEl = useRef<HTMLInputElement>(null);
  let pwdEl = useRef<HTMLInputElement>(null);

  const handleSubmit = (
    e: React.MouseEvent<HTMLButtonElement | MouseEvent>
  ) => {
    e.preventDefault();

    const loginValid = form.email === "" || form.pwd === "" || !form.agree;

    if (form.name.trim() === "" && type === "Sign") {
      alert("please enter name");
      nameEl.current?.focus();
      return;
    }
    if (form.email.trim() === "") {
      alert("please enter email");
      emailEl.current?.focus();
      return;
    }
    if (form.pwd.trim() === "") {
      alert("please enter password");
      pwdEl.current?.focus();
      return;
    }

    alert(`${type === "Login" ? type : "Signup"} Successfully`);
  };

  const formSwitchHandler = (
    e: React.MouseEvent<HTMLButtonElement | MouseEvent>
  ) => {
    e.preventDefault();
    setForm({
      name: "",
      email: "",
      pwd: "",
      agree: false,
    });
    setType((prev) => (prev === "Sign" ? "Login" : "Sign"));
  };

  return (
    <div className="item-middle bg-black inter">
      <div className="flex flex-col w-[375px] bg-white rounded-lg px-[25px] py-10 gap-[20px]">
        <div className="flex flex-col gap-[10px]">
          <h1 className="text-xl font-bold text-[#4F4F4F]">
            {`${type} Into App`}
          </h1>
          <p className="text-[#4F4F4F] text-sm">
            Please enter your details to contine.
          </p>
        </div>

        <form action="" className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            {type === "Sign" && (
              <Input type="text" placeholder="Enter Your Name" ref={nameEl} />
            )}
            <Input
              type="email"
              placeholder="someone@example.com"
              ref={emailEl}
            />
            <Input type="password" placeholder="Enter Password" ref={pwdEl} />
            <Checkbox
              checked={form.agree}
              onToggle={() => setForm({ ...form, agree: !form.agree })}
            >
              I agree with terms and policies.
            </Checkbox>
          </div>

          <div className="flex flex-col gap-4">
            <Button className="bg-[#4F4F4F]" onClick={handleSubmit}>
              {type === "Log" ? "Log" : "Sign"} In
            </Button>
            <Button
              // type="button"으로 하면 e.preventDefault를 안해도 됨
              className="border border-[#4F4F4F] text-[#4F4F4F]"
              onClick={formSwitchHandler}
            >
              {`Go To ${type === "Log" ? "Sign" : "Log"} In`}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default LoginForm;
