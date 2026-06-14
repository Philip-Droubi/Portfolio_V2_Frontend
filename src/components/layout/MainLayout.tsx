import { getDir } from "@/utils/functions";
import MainNavbar from "../navbar/MainNavBar";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import BinaryCursorTrail from "./BinaryCursorTrail";

export const MainLayout = () => {
  return (
    <div dir={getDir()} className="flex w-full h-screen">
      <div className="flex flex-col grow min-w-0">
        <div dir={getDir()} className="min-h-screen flex flex-col">

          <BinaryCursorTrail />
          <MainNavbar />
          <main className="flex-1 max-w-330 mx-auto w-full px-4 sm:px-8 py-4">
            <Outlet />
          </main>

          <Footer />
        </div>
      </div>
    </div>
  );
};
