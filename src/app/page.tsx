import About from "./About/Page";
import Contact from "./Contact/Page";
import Experience from "./Experience/Page";
import Hero from "./Hero/Page";
import Navbar from "./Navbar/Page";
import Projects from "./Projects/Page";
import Skills from "./Skills/Page";


export default function Home() {
  return (
    <div className="flex flex-col gap-6 m-4">
      <header>
       <Navbar/>
      </header>
      <main className="container flex flex-col justify-center gap-6 ">
        <section ><Hero/></section>
        <section><About/></section>
        <section><Skills/></section>
        <section><Experience/></section>
        <section><Projects/></section>
      </main>
      <footer>
        <Contact/>
      </footer>
    </div>
  );
}
