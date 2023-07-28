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
      <Button
        text="Login"
        action={() => {
          handleShowModal();
        }}
      />

      {showModal && (
        <div className="h-full w-full absolute left-0 top-0 border-3 p-10 flex flex-col bg-black">
          <div className="h-full w-full absolute left-0 top-0 border-3 p-10 flex flex-col bg-black">
            <div className="flex items-center justify-center h-1/6 gap-5">
              <img src={logo} alt="" className="w-[70px] h-[70px]" />
              <span className="text-[2rem]">LOGIN</span>
            </div>
            <form
              action=""
              className="flex flex-col w-[60%] mx-auto flex-1 [&>label]:py-5 [&>label]:text-2xl [&>input]:border-2 [&>input]:border-main [&>input]:rounded-3xl [&>input]:h-[40px] [&>input]:bg-transparent [&>input]:px-5"
            >
              <label htmlFor="username">Username</label>
              <input type="text" name="username" id="username" />
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" />
            </form>
            <div className="flex items-center justify-between gap-5 h-1/6 w-[60%] mx-auto">
              <Button
                text="Close"
                action={() => {
                  handleCloseModal();
                }}
                closeButton={true}
              />
              <Button
                text="Login"
                action={() => {
                  console.log("Login");
                }}
                closeButton={false}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default LoginModal;
