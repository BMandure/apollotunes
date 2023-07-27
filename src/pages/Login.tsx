import logo from "../assets/logo.svg";
import spotifyLogo from "../assets/Spotify_Logo_RGB_Green.png";

function Login() {
  const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=f1f6160f46fd4c7b9409ebf3819b9bb7&response_type=code&redirect_uri=${
    import.meta.env.VITE_APP_URL
  }`;
  return (
    <main className="text-white border-8 border-main w-full h-full flex flex-col justify-center items-center gap-5">
      <section className="flex flex-col [&>article]:flex [&>article]:gap-2 [&>article]:items-center">
        <article>
          <img
            src={logo}
            alt="apollotunes_logo"
            className="w-[50px] h-[50px]"
          />
          <span className="text-3xl">APOLLOTUNES</span>
        </article>
        <article className="pt-5 justify-center">
          A <img src={spotifyLogo} alt="spotify_logo" className="h-[30px]" />{" "}
          clone
        </article>
      </section>
      <button className="bg-main px-3 py-2 rounded-3xl text-lg">
        Login with Spotify
      </button>
    </main>
  );
}

export default Login;
