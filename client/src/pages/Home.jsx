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
              This portfolio was built using React, JavaScript, and Tailwind CSS.
            </p>
            <p className="text-lg sm:text-xl text-white translate-y-24">
              Take a look at my projects below!
            </p>
          </div>
    </section>
  );
}
