import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div>
      <header>
        <Navbar />
      </header>

      <main className="px-3 md:px-5 lg:px-10">
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default RootLayout;
