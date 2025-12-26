import { Outlet } from "react-router";
import Header from "./components/header/Header";
import Footer from "../common/components/footer/Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
