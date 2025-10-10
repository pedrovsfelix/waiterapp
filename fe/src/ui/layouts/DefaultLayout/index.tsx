import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar';


export default function DefaultLayout() {
  return (
    <div className="flex h-dvh bg-white-light">
      <Navbar />
      <main className="flex flex-col ml-9 mt-10 mr-20 w-full gap-12">
        <Outlet />
      </main>
    </div>
  );
}
