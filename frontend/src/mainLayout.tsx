import { Outlet } from "react-router";
import Header from "./components/header";

export const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <main className="flex--grow bg-slate-500 flex justify-center items-center py-8">
        <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-[70%] border border-gray-600">
          <Outlet />
        </div>
      </main>
      <footer className="bg-gray-200 border-t border-gray-300 py-4">
        <div className="container mx-auto text-center">
          <p className="text-sm text-gray-600">
            © 2024 Todos oss direitos a Fiesc
          </p>
        </div>
      </footer>
    </div>
  );
};
