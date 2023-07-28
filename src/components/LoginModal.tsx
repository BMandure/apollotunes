import { useState } from "react";
import Button from "./Button";

import logo from "../assets/logo.svg";

function LoginModal() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <button
        onClick={handleShowModal}
        className="w-[150px] px-4 py-3 border-2 border-main rounded-3xl"
      >
        Login
      </button>
      {showModal && (
        <div className="h-full w-full absolute left-0 top-0">
          <div className="h-full [&>div]:flex [&>div]:flex-col [&>div]:items-center [&>div]:justify-center [&>div]:bg-black">
            <div className="h-[20%] text-3xl pt-16 flex flex-col gap-5">
              <div className="flex gap-5 items-center">
                <img
                  src={logo}
                  alt="apollotunes_logo"
                  className="w-[70px] h-[70px]"
                />
                <span className="text-[3rem]">APOLLOTUNES</span>
              </div>
            </div>
            <div className="h-[60%] flex flex-col items-start">
              <p className="text-[2rem]">Login</p>
              <form
                action=""
                className="flex flex-col gap-3 [&>label]:text-start [&>label]:ps-5 [&>label]:text-xl [&>label]:pt-3"
              >
                <label htmlFor="username-login">Username</label>
                <input
                  className="border-2 border-main bg-transparent rounded-3xl h-[40px] w-[300px] px-4 text-sm text-center"
                  type="text"
                  name="username-login"
                  id="username-login"
                />
                <label htmlFor="password-login">Password</label>
                <input
                  className="border-2 border-main bg-transparent rounded-3xl h-[40px] w-[300px] px-4 text-sm text-center"
                  type="password"
                  name="password-login"
                  id="password-login"
                />
              </form>
            </div>
            <div className="h-[20%] w-full !flex-row gap-5 pb-10">
              <Button
                text="Back"
                action={() => {
                  handleCloseModal();
                }}
              />
              <Button
                text="Login"
                action={() => {
                  console.log("login");
                }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default LoginModal;
