import { getCursos } from "@/api/cursos";
import { useQuery } from "@tanstack/react-query";
import React from "react";

interface Courses {
  idCurso: number;
  nome: string;
  inscricoes: number;
  numeroDeVagas: number;
}

const Enrollment: React.FC = () => {
  const { data } = useQuery<Courses[]>({
    queryKey: ["get-cursos"],
    queryFn: getCursos,
  });

  // const handleInscrever = (id: number) => {
  //   setCursos((prevCursos) =>
  //     prevCursos.map((curso) =>
  //       curso.id === id && curso.subscriber < curso.vacancy
  //         ? { ...curso, subscriber: curso.subscriber + 1 }
  //         : curso
  //     )
  //   );
  // };

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
        {data &&
          data.map((curso) => (
            <div
              key={curso.idCurso}
              className="border rounded-md p-4 bg-white shadow-sm"
            >
              <h2 className="font-semibold text-lg">{curso.nome}</h2>
              <p>Inscrições: 2</p>
              <p>Vagas: {curso.numeroDeVagas}</p>
              <div className="mt-4">
                {curso.inscricoes >= curso.numeroDeVagas ? (
                  <button
                    className="w-full px-4 py-2 bg-gray-300 text-gray-600 rounded-md cursor-not-allowed"
                    disabled
                  >
                    Sem Vagas
                  </button>
                ) : curso.inscricoes > 0 ? (
                  <button
                    className="w-full px-4 py-2 bg-gray-200 text-gray-700 rounded-md"
                    disabled
                  >
                    Inscrito
                  </button>
                ) : (
                  <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
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
