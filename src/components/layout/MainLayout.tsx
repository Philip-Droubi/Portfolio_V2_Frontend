import { getDir } from "@/utils/functions";
import MainNavbar from "../navbar/MainNavBar";
import Background from "./Background";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import CursorProvider from "@/context/CursorProvider";

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
            <Outlet />
          </main>

          <Footer />
        </div>
      </div>
    </CursorProvider>
  );
};