import { Outlet } from "react-router";
import NavBar from "./NavBar";
import Footer from "./Footer";

function AppLayout() {
  return (
    <div className="w-full max-w-7xl px-4 xl:px-0 py-4 flex flex-col mx-auto h-dvh space-y-8 md:space-y-0">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;
