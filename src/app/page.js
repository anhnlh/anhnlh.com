import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* Hero section: bio on the left, name and subtitle on the right */}
      <section className="flex min-h-screen px-4 py-16 bg-white">
        {/* Name, subtitle */}
        <div className="w-2/3 pl-10">
          <h1 className="text-5xl font-bold text-gray-800 md:text-7xl">
            Anh Nguyen
          </h1>
          <p className="mt-4 text-xl text-gray-600 md:text-2xl">
            Software Engineer
          </p>
        </div>
        {/* Bio */}
        <div className="flex w-1/2">
          <p className="text-xl text-gray-600 md:text-3xl">
            4-th year Computer Science Major at RIT. Looking for full-time
            software engineer position. Open to relocation
          </p>
        </div>
      </section>
      {/* Projects section */}
      <section className="min-h-screen" id="projects">
        asdasdasd
      </section>
    </main>
  );
}
