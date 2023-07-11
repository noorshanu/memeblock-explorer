import DropdownButton from "./components/Dropdown";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Hero from "./sections/Hero";

function App() {
  return (
    <>
      <SearchBar />
      <Navbar />
      <main className="relative z-10 min-h-screen bg-offwhite">
        <div className="mx-auto max-w-[1440px] px-5 py-10 lg:px-10 2xl:px-0">
          <Hero />
          <DropdownButton/>
        </div>
      </main>
    </>
  );
}

export default App;
