import InvisibleHeader from "./_components/InvisibleHeader";
import Landing from "./_sections/Landing";
// import Projects from "./_sections/Projects";

export default function Home() {
  return (
    <>
      <main className="w-screen overflow-hidden">
        <InvisibleHeader />
        <Landing />
        {/* <Projects /> */}
      </main>
    </>
  );
}
