import React from "react";
import { useNavigate } from "react-router";

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Título */}
        <h1
          className="text-xl font-bold cursor-pointer"
          onClick={() => navigate("/")}
        >
          Minha Aplicação
        </h1>
        {/* Links de Navegação */}
        <nav className="space-x-4">
          <button
            className="text-white hover:text-gray-300"
            onClick={() => navigate("/")}
          >
            Página Inicial
          </button>
          <button
            className="text-white hover:text-gray-300"
            onClick={() => navigate("/cad-person")}
          >
            Cadastro
          </button>
          <button
            className="text-white hover:text-gray-300"
            onClick={() => navigate("/enrollment")}
          >
            Lista de Cursos
          </button>
          <button
            className="text-white hover:text-gray-300"
            onClick={() => navigate("/create-course")}
          >
            Criar um Curso
          </button>
          <button
            className="text-white hover:text-gray-300"
            onClick={() => alert("Logout efetuado!")}
          >
            Sair
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
