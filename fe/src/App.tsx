import Header from "./ui/components/Header";
import Navbar from "./ui/components/Navbar";
import Orders from "./ui/components/Orders";

export default function App() {
  return (
    <div className="flex h-dvh bg-white-light">
      <Navbar />
      <div className="flex flex-col ml-9 mt-10 mr-20 w-full gap-12">
        <Header />
        <Orders />
      </div>
    </div>
  );
}
