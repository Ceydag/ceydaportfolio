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
      <div className="mt-60 container mx-auto px-12 py-4">
        <Section/>
        <div className="my-80" /> {}
        <section className="pb-32">
        <AboutSection/>
        <div className="my-60"></div>
        </section>
      <div className="my-52">
      <ProjectsSection/>
        </div>
      
      </div>
      <Footer/>
    </main>
  );
}