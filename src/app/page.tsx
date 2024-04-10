import Image from "next/image";
import Section from "./components/Section";
import Header from "./components/Header";
import AboutSection from "./components/AboutMe";
import ProjectsSection from "./components/ProjectSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-200">
      <Header/>
      <div className="mt-40 container mx-auto px-12 py-4">
        <Section/>
        <div className="my-28" /> {}
        <div className="space-y-20 sm:space-y-40">
        <section className="sm:pb-72">
        <AboutSection/>
        </section>
        <section className="pb-20">
      <ProjectsSection/>
      </section>
      </div>
      </div >
      <br />
      <Footer/>
    </main>
  );
}