import Laptop from "../components/Laptop";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section
      id="home"
      className="hero-section relative min-h-screen flex flex-col md:flex-row items-center justify-between text-white px-6 pt-6 md:pt-12 overflow-hidden"
    >
      {/* Left Binary Stream */}
      <div className="absolute inset-y-0 left-0 w-20 flex justify-center overflow-hidden z-0 pointer-events-none">
        <div className="animate-binary text-[#209CEE] opacity-20 whitespace-pre">
          {Array(100)
            .fill(0)
            .map(() => (Math.random() > 0.5 ? "1\n" : "0\n"))}
        </div>
      </div>

      {/* Right Binary Stream */}
      <div className="absolute inset-y-0 right-0 w-20 flex justify-center overflow-hidden z-0 pointer-events-none">
        <div className="animate-binary text-[#209CEE] opacity-20 whitespace-pre">
          {Array(100)
            .fill(0)
            .map(() => (Math.random() > 0.5 ? "1\n" : "0\n"))}
        </div>
      </div>

      {/* Left Side (Text + Laptop) */}
      <div className="relative z-10 flex-1 flex flex-col items-start space-y-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-snug">
          Hello, I'm <span className="text-[#209CEE]">Garret Tilton</span>
        </h1>
        <p className="text-lg sm:text-xl">
          Software developer based in Denver, CO.
        </p>
        <p className="text-lg sm:text-xl">
          Passion in building applications and troubleshooting IT challenges.
        </p>
        <p className="text-lg sm:text-xl">
          This portfolio was built using React, JavaScript, Tailwind, and Three.js.
        </p>
        <p className="text-lg sm:text-xl">
          All 3D models are fully interactable!
        </p>

        {/* Laptop */}
        <div className="w-[350px] sm:w-[500px] md:w-[650px] lg:w-[750px] h-auto mt-8 self-center md:self-start">
          <Laptop />
        </div>
      </div>

      {/* Right Side (Profile Pic) */}
      <div className="relative z-10 flex-1 flex flex-col items-center mt-8 md:mt-0">
        <span className="carpe-diem text-xl font-semibold mb-4">Carpe Diem</span>
        <img
          src="/profile-pic.jpg"
          alt="Profile"
          className="w-40 h-40 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-[#209CEE] shadow-lg"
        />
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 w-full flex justify-center items-center z-10">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-[#209CEE] mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
}
