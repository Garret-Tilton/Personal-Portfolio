export default function About() {
  return (
    <section 
      id="about"
      className="relative min-h-screen flex flex-col items-start justify-start bg-gray-950 text-green-400 px-6 pt-20 font-mono"
    >
      {/* Terminal Window */}
      <div className="w-full bg-gray-900 rounded-lg shadow-lg overflow-hidden">
        
        {/* Terminal Header Bar */}
        <div className="flex items-center gap-2 px-4 py-2 bg-gray-800">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          <p className="ml-4 text-sm text-gray-400">about-me.exe</p>
        </div>

        {/* Terminal Content */}
        <div className="p-6 sm:p-10">
          <p className="text-lg text-[#209CEE]">Introduction</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
            About Me.
          </h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            Hello there 👋 I’m Garret, a developer who loves building creative, interactive
            experiences. This “About” page is styled like a terminal to reflect my love for
            coding and problem-solving.
          </p>
        </div>
      </div>
    </section>
  );
}
