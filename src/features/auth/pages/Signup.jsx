import { useState } from "react";
import signupBG from "../../../../public/signupBG.jpg";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center relative text-white"
      style={{
        backgroundImage: `url(${signupBG})`,
      }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-[#071312]/20 backdrop-blur-sm" />

      {/* CARD */}
      <div className="relative z-10 w-[420px] bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-10 shadow-2xl">
        <h2 className="text-3xl font-semibold text-center mb-2">
          Create Account
        </h2>

        <p className="text-center text-xs text-gray-400 mb-8 tracking-wider">
          JOIN THE DIGITAL CINEVERSE
        </p>

        {/* NAME */}
        <label className="text-xs text-[#9DD2BB] mb-2 block">FULL NAME</label>

        <input
          type="text"
          placeholder="Enter your full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-4 px-4 py-3 rounded-lg bg-black/40 border border-white/10 outline-none"
        />

        {/* EMAIL */}
        <label className="text-xs text-[#9DD2BB] mb-2 block">
          EMAIL ADDRESS
        </label>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 px-4 py-3 rounded-lg bg-black/40 border border-white/10 outline-none"
        />

        {/* PASSWORDS */}
        <div className="flex gap-3 mb-4">
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-1/2 px-4 py-3 rounded-lg bg-black/40 border border-white/10 outline-none"
          />

          <input
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-1/2 px-4 py-3 rounded-lg bg-black/40 border border-white/10 outline-none"
          />
        </div>

        {/* CHECKBOX */}
        <div className="flex items-center gap-2 mb-6 text-xs text-gray-400">
          <input type="checkbox" className="accent-[#9DD2BB]" />
          <span>
            I agree to the <span className="text-[#9DD2BB]">Terms</span> &{" "}
            <span className="text-[#9DD2BB]">Privacy Policy</span>
          </span>
        </div>

        {/* BUTTON */}
        <button className="w-full py-3 rounded-full font-semibold bg-gradient-to-r from-[#9DD2BB] to-[#285A48] cursor-pointer text-black shadow-lg hover:scale-105 transition">
          Create Account
        </button>

        <p className="text-center text-sm text-gray-400 mt-6">
          Already have an account?{" "}
          <span className="text-[#9DD2BB] cursor-pointer hover:underline">
            Log in here
          </span>
        </p>
      </div>
    </div>
  );
}

export default Signup;
