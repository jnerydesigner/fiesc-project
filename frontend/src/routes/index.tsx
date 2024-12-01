import { MainLayout } from "@/mainLayout";
import CadPerson from "@/pages/cad-person";
import { CreateCourse } from "@/pages/create-course";
import Enrollment from "@/pages/enrollment";
import Login from "@/pages/login";
import { createBrowserRouter, RouterProvider } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Login /> },
      { path: "/cad-person", element: <CadPerson /> },
      { path: "/enrollment", element: <Enrollment /> },
      { path: "/create-course", element: <CreateCourse /> },
    ],
  },
]);

export const RoutesApp: React.FC = () => {
  return <RouterProvider router={router} />;
};
