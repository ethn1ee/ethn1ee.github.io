import InvisibleHeader from "@/components/home/InvisibleHeader";

import Landing from "../components/home/sections/Landing";
import Projects from "../components/home/sections/Projects";

export default function Home() {
  return (
    <>
      <main className="w-screen overflow-hidden">
        <InvisibleHeader />
        <Landing />
        <Projects />
      </main>
    </>
  );
}
