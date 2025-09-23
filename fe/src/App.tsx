import Header from "./ui/components/Header";
import Navbar from "./ui/components/Navbar";

export default function App() {
  return (
    <div className="flex">
      <Navbar />
      <div className="flex flex-col w-full h-full">
        <Header />
      </div>
    </div>
  );
}
