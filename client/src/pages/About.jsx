export default function About() {
  return (
    <section 
      id="about"
      className="relative min-h-screen flex flex-col items-start justify-start bg-gray-900 text-white px-6 pt-20 overflow-hidden"
    >
      <div className="mt-20 sm:mt-24 md:mt-32 translate-x-0 sm:translate-x-8 md:translate-x-16">
        <p className="text-lg sm:text-2xl text-[#209CEE]">Introduction</p>
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight mb-8 sm:mb-10 md:mb-12">
          About Me.
        </h2>
      </div>
    </section>
  );
}
