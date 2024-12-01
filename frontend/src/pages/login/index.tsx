import React from "react";
import { NavLink } from "react-router";

const Login: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-80">
        <h2 className="text-lg font-semibold mb-4 border-b pb-2">Login</h2>
        <form className="space-y-4">
          {/* CPF/E-mail */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              CPF/E-mail
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Digite seu CPF ou E-mail"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          {/* Senha */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Senha
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Digite sua senha"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          {/* Botão Entrar */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Entrar
          </button>
        </form>
        {/* Link para cadastro */}
        <div className="mt-4 text-center text-sm">
          Ainda não tem conta?{" "}
          <NavLink to="/cad-person" className="text-blue-600 hover:underline">
            Cadastre-se
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Login;
