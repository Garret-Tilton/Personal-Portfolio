export default function Home() {
  return (
    <section className="hero-section relative min-h-screen flex flex-col items-start justify-start text-white px-6">
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
