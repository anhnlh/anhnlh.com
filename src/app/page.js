import { CardContainer } from "./components/ui/3d-card";

export default function Home() {
  return (
    <main className="theme-zinc">
      {/* Hero section: bio on the left, name and subtitle on the right */}
      <section className="flex flex-col justify-center min-h-screen px-10 pb-10 sm:px-20 md:px-24 bg-gradient-to-b from-indigo-600 to-cyan-300">
        {/* Name, subtitle */}
        <CardContainer className="flex flex-col w-full py-12 shadow-xl sm:py-16 md:py-24 rounded-2xl bg-gradient-to-b from-sky-400 to-purple-500 hover:shadow-2xl">
          <h1 className="text-5xl font-bold text-center text-white sm:text-6xl md:text-9xl">
            anhnlh
          </h1>
          <p className="mt-4 text-xl font-medium text-center text-white sm:text-3xl sm:mt-6 md:text-4xl md:mt-11">
            Software Engineer
          </p>
        </CardContainer>
        {/* Bio */}
        <p className="text-xl text-justify text-slate-50 md:text-2xl">
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
