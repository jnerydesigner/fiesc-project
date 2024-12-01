import CadPerson from "@/pages/cad-person";
import Enrollment from "@/pages/enrollment";
import Login from "@/pages/login";
import { Routes, Route } from "react-router";

export const RoutesApp: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/cad-person" element={<CadPerson />} />
      <Route path="/enrollment" element={<Enrollment />} />
    </Routes>
  );
};
