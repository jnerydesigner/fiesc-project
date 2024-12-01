import { api } from "./axios.config";

interface Courses {
  idCurso: number;
  nome: string;
  inscricoes: number;
  numeroDeVagas: number;
}

export const getCursos = async () => {
  try {
    const { data } = await api.get<Courses[]>("/cursos");
    const newData = data.map((result) => {
      return {
        ...result,
        incricoes: 5,
      };
    });
    console.log("newData", newData);
    return newData;
  } catch (error) {
    console.error("Erro ao buscar cursos");
    throw error;
  }
};

export const getCursoByNome = async (nome: string) => {
  try {
    const { data } = await api.get<Courses>(
      `/cursos/buscar-por-nome?nome=${nome}`
    );

    return data;
  } catch (error) {
    console.error("Erro ao buscar cursos");
    throw error;
  }
};

export const createCurso = async (nome: string, numeroDeVagas: number) => {
  try {
    const { data } = await api.post("/cursos", {
      nome,
      numeroDeVagas,
    });

    return data;
  } catch (error) {
    console.error("Erro ao criar o curso:", error);
    throw error;
  }
};
