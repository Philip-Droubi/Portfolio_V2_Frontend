import { getDir } from "@/utils/functions";
import Background from "./Background";
import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";
import CursorProvider from "@/context/CursorProvider";
import ContactMe from "@/modules/contactMe/ContactMe";
import MainNavbar from "./navbar/MainNavBar";
import ResetScrollComponent from "../misc/ResetScrollComponent";
import ScrollToHash from "../misc/ScrollToHash";

export const MainLayout = () => {
  return (
    <CursorProvider>
      <div
        dir={getDir()}
        className="min-h-screen relative bg-mobile-navbar"
      >
        <Background />

        <div className="relative z-10 flex flex-col min-h-screen">
          <MainNavbar />

          <main className="flex-1 max-w-330 mx-auto w-full px-4 sm:px-8 py-4">
            <ResetScrollComponent />
            <ScrollToHash />
            <Outlet />
            <ContactMe />
          </main>

          <Footer />
        </div>
      </div>
    </CursorProvider>
  );
};