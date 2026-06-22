import HomePage from "@/modules/home/HomePage";
import { MainLayout } from "@/components/layout/MainLayout";
import NotFound from "@/pages/errors/NotFound";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
      </Route>
      <Route path="*" element={<NotFound />}></Route>
    </Route>
  ),
  {
    basename: import.meta.env.BASE_URL,
  }
);
