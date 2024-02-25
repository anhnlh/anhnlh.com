export default function Home() {
  return (
    <main>
      {/* Hero section: bio on the left, name and subtitle on the right */}
      <section className="flex flex-col justify-center min-h-screen px-5 bg-white">
        {/* Name, subtitle */}
        <div className="flex flex-col">
          <h1 className="font-bold text-gray-800 text-8xl md:text-9xl">
            Anh <br /> Nguyen
          </h1>
          <p className="mt-8 text-3xl text-gray-600 md:text-4xl">
            Software Engineer
          </p>
        </div>
        {/* Bio */}
        <p className="text-xl text-gray-600 mt-11 md:text-2xl">
          Senior BS Computer Science student at the Rochester Institute of
          Technology, currently working at Amplify Education and building
          educational software for K-12 students.
        </p>
      </section>
      {/* Projects section */}
      <section className="min-h-screen" id="projects">
        asdasdasd
      </section>
    </main>
  );
}
