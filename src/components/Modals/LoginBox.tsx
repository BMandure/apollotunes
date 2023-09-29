import { useState } from "react";
import { ModalProps } from "../../types_interfaces";
import Button from "../Button";

function LoginBox({ show, setShow }: ModalProps) {
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();

  let classes = "absolute w-full h-full bg-black bg-opacity-70";
  const submitButtonStyle =
    "px-4 py-2 w-[200px] rounded-3xl border border-main hover:text-main hover:bg-zinc-950";

  show
    ? (classes += " flex flex-col justify-center items-center")
    : (classes += " hidden");

  const onLogin = (event: React.FormEvent) => {
    event.preventDefault();
    alert("Login Check");
  };
  return (
    <div className={classes}>
      <div className="bg-black border border-main w-[500px] h-[60vh] p-16 text-start flex flex-col justify-center gap-5">
        <span className="text-[2.5rem]">LOG IN</span>
        <form className="flex flex-col gap-5">
          <div className="w-full flex flex-col gap-3">
            <label htmlFor="login-username">Username</label>
            <input
              type="text"
              name="login-username"
              id="login-username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              className="border rounded-3xl h-[30px] px-[10px] text-white bg-transparent border-main"
            />
          </div>
          <div className="w-full flex flex-col gap-3">
            <label htmlFor="login-password">Password</label>
            <input
              type="password"
              name="login-password"
              id="login-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="border rounded-3xl h-[30px] px-[10px] text-white bg-transparent border-main"
            />
          </div>
        </form>
        <div className="flex gap-2 pt-2">
          <Button text="Cancel" onClickBeheavor={() => setShow(false)} />
          <button
            type="submit"
            onClick={(event) => onLogin(event)}
            className={submitButtonStyle}
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginBox;
