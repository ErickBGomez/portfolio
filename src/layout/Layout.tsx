import { Outlet } from "react-router";
import Header from "./components/header/Header";
import Footer from "../common/components/footer/Footer";

const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
