import About from "./components/About";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col gap-6 m-4">
      <header>
        <Navbar />
      </header>
      <main className="flex justify-center">
        <About />
      </main>
      <footer></footer>
    </div>
  );
}
