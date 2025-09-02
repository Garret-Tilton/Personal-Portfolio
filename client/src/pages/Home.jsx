export default function Home() {
  return (
    <section className="hero-section relative min-h-screen flex flex-col items-center justify-start text-center text-white px-6">
      {/* Push content down slightly from the top */}
      <div className="mt-32">
        <h1 className="text-6xl font-extrabold leading-tight">
          Hello, I'm <span className='text-[#209CEE]'>Garret Tilton</span>
        </h1>
        <p className="mt-6 text-xl max-w-2xl mx-auto text-gray-200">
          I am a software developer and a Marine veteran.
        </p>

        {/* Call to Action */}
        <div className="mt-8 flex justify-center">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg transition"
          >
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
}
