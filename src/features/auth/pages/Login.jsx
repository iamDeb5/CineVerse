import { useState } from "react";
import loginBG from "../../../../public/loginBG.jpg";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center relative text-white"
      style={{
        backgroundImage: `url(${loginBG})`,
      }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-[#071312]/20 backdrop-blur-sm" />

      {/* CENTER CARD */}
      <div className="relative z-10 w-[420px] bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-10 shadow-2xl">
        <h2 className="text-3xl font-semibold text-center mb-2">
          Welcome Back
        </h2>

        <p className="text-center text-xs text-gray-400 mb-8 tracking-wider">
          ENTER THE CINEVERSE
        </p>

        {/* EMAIL */}
        <label className="text-xs text-[#9DD2BB] mb-2 block">
          EMAIL ADDRESS
        </label>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-6 px-4 py-3 rounded-lg bg-black/40 border border-white/10 outline-none"
        />

        {/* PASSWORD */}
        <div className="flex justify-between items-center mb-2">
          <label className="text-xs text-[#9DD2BB]">PASSWORD</label>

          <span className="text-xs text-gray-400 cursor-pointer hover:text-white">
            FORGOT PASSWORD?
          </span>
        </div>

        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-8 px-4 py-3 rounded-lg bg-black/40 border border-white/10 outline-none"
        />

        {/* BUTTON */}
        <button className="w-full py-3 rounded-full font-semibold bg-gradient-to-r from-[#9DD2BB] to-[#285A48] cursor-pointer text-black shadow-lg hover:scale-105 transition">
          Log In
        </button>

        <p className="text-center text-sm text-gray-400 mt-6">
          Not a member yet?{" "}
          <span className="text-[#9DD2BB] cursor-pointer hover:underline">
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
