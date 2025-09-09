export default function About() {
  return (
    <section
      id="about"
      className="
        min-h-screen flex items-center justify-center
        bg-gray-950 text-green-400 font-mono
        p-4 sm:p-8 md:p-12     /* small -> medium screens: normal padding */
        lg:p-[3in] xl:p-[4in]  /* large screens: 3in and 4in padding */
      "
    >
      {/* Terminal Window fills the area inside the padded section */}
      <div className="w-full h-full bg-gray-900 rounded-lg shadow-lg overflow-hidden flex flex-col">
        {/* Header (fixed height) */}
        <div className="flex items-center gap-2 px-4 py-2 bg-gray-800">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          <p className="ml-4 text-sm text-gray-400">about-me.exe</p>
        </div>

        {/* Content stretches and scrolls if needed */}
        <div className="flex-1 overflow-auto p-6 sm:p-10">
          <p className="text-lg text-[#209CEE]">Introduction</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
            About Me.
          </h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            Hello there 👋 I'm Garret, a developer who loves building creative, interactive experiences...
          </p>
        </div>
      </div>
    </section>
  );
}
