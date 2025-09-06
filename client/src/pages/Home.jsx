import Laptop from "../components/Laptop";
import {motion} from 'framer-motion';

export default function Home() {
  return (
    <section 
      id="home"
      className="hero-section relative min-h-screen flex flex-col items-start justify-start text-white px-6 pt-20 overflow-hidden">
        <span className="block h-20 -mt-20" aria-hidden="true"></span>

        {/* Left Binary Stream */}
        <div className="absolute left-0 top-0 h-full w-20 flex justify-center overflow-hidden">
          <div className="animate-binary text-[#209CEE] opacity-70 whitespace-pre">
            {Array(100).fill(0).map(() => (Math.random() > 0.5 ? "1\n" : "0\n"))}
          </div>
        </div>

        {/* Right Binary Stream */}
        <div className="absolute right-0 top-0 h-full w-20 flex justify-center overflow-hidden">
          <div className="animate-binary text-[#209CEE] opacity-70 whitespace-pre">
            {Array(100).fill(0).map(() => (Math.random() > 0.5 ? "1\n" : "0\n"))}
          </div>
        </div>

        {/* Profile Picture Section */}
        <div className="absolute top-20 right-24 flex flex-col items-center space-y-4">
          <span className="carpe-diem text-xl font-semibold">Carpe Diem</span>
          <img 
            src="/profile-pic.jpg"
            alt="Profile"
            className="w-96 h-96 rounded-full object-cover border-4 border-[#209CEE] shadow-lg"
          />
        </div>

        {/* Laptop */}
        <div className="absolute bottom-10 left-1/4 -translate-x-1/2 w-[600px] h-[600px]">
          <Laptop />
        </div>

        <div className="mt-20 sm:mt-24 md:mt-32 translate-x-0 sm:translate-x-8 md:translate-x-16">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight mb-8 sm:mb-10 md:mb-12">
            Hello, I'm <span className='text-[#209CEE]'>Garret Tilton</span>
          </h1>
            <p className="text-lg sm:text-xl text-white translate-y-4">
              Software developer based in Denver, CO.
            </p>
            <p className="text-lg sm:text-xl text-white translate-y-8">
              Passion in building applications and troubleshooting IT challenges.
            </p>
            <p className="text-lg sm:text-xl text-white translate-y-12">
              This portfolio was built using React, JavaScript, Tailwind, and Three js.
            </p>
            <p className="text-lg sm:text-xl text-white translate-y-24">
              All 3D models are fully interactable!
            </p>
          </div>

          <div className='absolute xs:bottom-10 bottom-16 w-full flex justify-center items-center'>
            <a href="#about">
              <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
                <motion.div 
                  animate={{
                    y: [0,24,0]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: 'loop'
                  }}
                  className="w-3 h-3 rounded-full bg-[#209CEE] mb-1"
                />
              </div>
            </a>
          </div>
    </section>
  );
}
