import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useMutation } from "@tanstack/react-query";

import { createCurso } from "@/api/cursos";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const courseSchema = z.object({
  name: z.string().min(1, { message: "O nome é obrigatório" }),
  numberOfSlots: z
    .string({
      required_error: "O Número de Vagas é requerido",
      invalid_type_error: "O Número de vagas deve ser um formato numérico",
    })
    .transform((val) => {
      const parsed = parseInt(val, 10);
      if (isNaN(parsed)) {
        throw new Error(
          "O Número de vagas deve ser um formato numérico válido"
        );
      }
      return parsed;
    })
    .refine((val) => val > 0, {
      message: "O Número de vagas deve ser maior que zero",
    }),
});

type TCourse = z.infer<typeof courseSchema>;

export const CreateCourse = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TCourse>({
    resolver: zodResolver(courseSchema),
  });

  const { mutate: mutateCreateCurso, isPending: isCreating } = useMutation({
    mutationFn: async (newCourse: TCourse) => {
      const couseMapper = {
        nome: newCourse.name,
        numeroDeVagas: newCourse.numberOfSlots,
      };
      return createCurso(couseMapper.nome, Number(couseMapper.numeroDeVagas));
    },
    onSuccess: () => {
      reset();
      showToast("Curso Inserido com sucesso");
      navigate("/enrollment");
    },
    onError: () => {
      alert("Erro ao criar o curso.");
    },
  });

  const showToast = (message: string) => {
    toast(message);
  };

  const onSubmit = async (data: TCourse) => {
    mutateCreateCurso(data);
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-6 text-center">
            Cadastro de Curso
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label
                htmlFor="nome"
                className="block text-sm font-medium text-gray-700"
              >
                Nome do Curso:
              </label>
              <input
                type="text"
                id="nome"
                {...register("name")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              {errors.name && (
                <p className="text-sm text-red-600 mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="numeroVagas"
                className="block text-sm font-medium text-gray-700"
              >
                Número de Vagas:
              </label>
              <input
                type="text"
                id="numeroVagas"
                {...register("numberOfSlots")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              {errors.numberOfSlots && (
                <p className="text-sm text-red-600 mt-1">
                  {errors.numberOfSlots.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                isCreating
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              }`}
              disabled={isCreating}
            >
              {isCreating ? "Criando Curso..." : "Cadastrar Curso"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
