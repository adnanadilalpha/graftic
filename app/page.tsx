import Navbar from "./components/navbar";
import Hero from "./components/hero"
import Section1 from "./components/section1"


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-6 py-6 md:px-16 md:py-12">
      <Navbar />
      <Hero/>
      <Section1/>
    </main>
  );
}
