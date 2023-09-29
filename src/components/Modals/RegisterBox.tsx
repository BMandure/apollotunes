import { ModalProps } from "../../types_interfaces";
import Button from "../Button";

function RegisterBox({ show, setShow }: ModalProps) {
  const classes = show
    ? "absolute w-full h-full bg-black bg-opacity-70 flex flex-col justify-center items-center"
    : "absolute w-full h-full bg-black bg-opacity-70 hidden";

  const submitButtonStyle =
    "px-4 py-2 w-[200px] rounded-3xl border border-main hover:text-main hover:bg-zinc-950";
  const onRegister = (event: React.FormEvent) => {
    event.preventDefault();
    alert("Register Check");
  };
  return (
    <div className={classes}>
      <div className="bg-black border border-main w-[500px] h-[60vh] p-16 text-start flex flex-col justify-center gap-5">
        <span className="text-[2.5rem]">SIGN IN</span>
        <form className="flex flex-col gap-5">
          <div className="w-full flex flex-col gap-3">
            <label htmlFor="register-username">Username</label>
            <input
              type="text"
              name="register-username"
              id="register-username"
              className="border rounded-3xl h-[30px] px-[10px] text-white bg-transparent border-main"
            />
          </div>
          <div className="w-full flex flex-col gap-3">
            <label htmlFor="register-email">E-mail</label>
            <input
              type="email"
              name="register-email"
              id="register-email"
              className="border rounded-3xl h-[30px] px-[10px] text-white bg-transparent border-main"
            />
          </div>
          <div className="w-full flex flex-col gap-3">
            <label htmlFor="register-password">Password</label>
            <input
              type="password"
              name="register-password"
              id="register-password"
              className="border rounded-3xl h-[30px] px-[10px] text-white bg-transparent border-main"
            />
          </div>
        </form>
        <div className="flex gap-2 pt-2">
          <Button text="Cancel" onClickBeheavor={() => setShow(false)} />
          <button
            type="submit"
            onClick={(event) => onRegister(event)}
            className={submitButtonStyle}
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegisterBox;
