import logo from "../assets/logo.svg";
import LoginModal from "../components/LoginModal";
import RegisterModal from "../components/RegisterModal";

function Login() {
  return (
    <main className="text-white border-8 border-main w-[50%] mx-auto translate-y-32 h-[70%] flex flex-col justify-center items-center gap-5">
      <section className="flex flex-col [&>article]:flex [&>article]:gap-2 [&>article]:items-center [&>article]:justify-center gap-5">
        <article>
          <img
            src={logo}
            alt="apollotunes_logo"
            className="w-[70px] h-[70px]"
          />
          <span className="text-[3rem]">APOLLOTUNES</span>
        </article>
        <article className="h-[15vh] flex items-center gap-8">
          <LoginModal />
          <p className="text-main px-6">Or</p>
          <RegisterModal />
        </article>
      </section>
    </main>
  );
}

export default Login;
