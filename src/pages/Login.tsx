import { useState } from "react";
import logo from "../assets/logo.svg";

import Button from "../components/Button";
import LoginBox from "../components/Modals/LoginBox";
import RegisterBox from "../components/Modals/RegisterBox";

function Login() {
  const [showRegisterBox, setShowRegisterBox] = useState(false);
  const [showLoginBox, setShowLoginBox] = useState(false);

  const handleOnClickLogin = () => {
    setShowLoginBox(true);
  };

  const handleOnClickRegister = () => {
    setShowRegisterBox(true);
  };
  return (
    <main className="h-full flex justify-center items-center">
      <section className="flex gap-5 flex-col items-center justify-center border border-main w-[50vw] h-[50vh]">
        <article className="flex justify-center items-center pb-[50px] gap-5">
          <img src={logo} alt="apollotunes_logo" className="w-[70px]" />
          <h1 className="text-[3rem]">APOLLOTUNES</h1>
        </article>
        <article className="flex gap-5">
          <Button text="Log in" onClickBeheavor={handleOnClickLogin} />
          <Button text="Sign in" onClickBeheavor={handleOnClickRegister} />
        </article>
      </section>
      <LoginBox show={showLoginBox} setShow={setShowLoginBox} />
      <RegisterBox show={showRegisterBox} setShow={setShowRegisterBox} />
    </main>
  );
}

export default Login;
