import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Orders from "../../components/Orders";

export default function Home() {
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
