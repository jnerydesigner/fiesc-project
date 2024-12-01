import React, { useState } from "react";

interface Courses {
  id: number;
  name: string;
  subscriber: number;
  vacancy: number;
}

const Enrollment: React.FC = () => {
  const [cursos, setCursos] = useState<Courses[]>([
    { id: 1, name: "Exemplo Curso", subscriber: 2, vacancy: 3 },
    { id: 2, name: "Exemplo Curso", subscriber: 1, vacancy: 5 },
    { id: 3, name: "Exemplo Curso", subscriber: 2, vacancy: 2 },
    { id: 4, name: "Exemplo Curso", subscriber: 0, vacancy: 7 },
    { id: 5, name: "Exemplo Curso", subscriber: 0, vacancy: 6 },
    { id: 6, name: "Exemplo Curso", subscriber: 3, vacancy: 3 },
    { id: 7, name: "Exemplo Curso", subscriber: 2, vacancy: 5 },
    { id: 8, name: "Exemplo Curso", subscriber: 2, vacancy: 4 },
  ]);

  const handleInscrever = (id: number) => {
    setCursos((prevCursos) =>
      prevCursos.map((curso) =>
        curso.id === id && curso.subscriber < curso.vacancy
          ? { ...curso, subscriber: curso.subscriber + 1 }
          : curso
      )
    );
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Inscrição</h1>
        <div className="flex items-center space-x-4">
          <span className="text-gray-700">Nome Usuário</span>
          <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400">
            Sair
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {cursos.map((curso) => (
          <div
            key={curso.id}
            className="border rounded-md p-4 bg-white shadow-sm"
          >
            <h2 className="font-semibold text-lg">{curso.name}</h2>
            <p>Inscrições: {curso.subscriber}</p>
            <p>Vagas: {curso.vacancy}</p>
            <div className="mt-4">
              {curso.subscriber >= curso.vacancy ? (
                <button
                  className="w-full px-4 py-2 bg-gray-300 text-gray-600 rounded-md cursor-not-allowed"
                  disabled
                >
                  Sem Vagas
                </button>
              ) : curso.subscriber > 0 ? (
                <button
                  className="w-full px-4 py-2 bg-gray-200 text-gray-700 rounded-md"
                  disabled
                >
                  Inscrito
                </button>
              ) : (
                <button
                  className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                  onClick={() => handleInscrever(curso.id)}
                >
                  Se Inscrever
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Enrollment;
