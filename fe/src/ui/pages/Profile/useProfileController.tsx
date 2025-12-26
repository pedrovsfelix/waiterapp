import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { httpClient } from "../../../app/services/httpClient";
import { useEffect } from "react";

const schema = z.object({
  name: z.string().nonempty("Nome é obrigatório"),
  email: z.string().email("E-mail inválido"),
  password: z.string().optional(),
  confirmPassword: z.string().optional(),
}).refine(
  (data) => {
    // Só valida se o usuário estiver tentando alterar senha
    if (!data.password && !data.confirmPassword) return true;
    return data.password === data.confirmPassword;
  },
  {
    message: "As senhas não coincidem.",
    path: ["confirmPassword"],
  }
);

export type ProfileFormData = z.infer<typeof schema>;

export function useProfileController(onSuccess?: () => void) {
  const {
    register,
    handleSubmit: hookSubmit,
    setValue,
    formState: { errors },
  } = useForm<ProfileFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  useEffect(() => {
    async function loadUserProfile() {
      try {
        const { data } = await httpClient.get("/users/me");
        setValue("name", data.name);
        setValue("email", data.email);
      } catch {
        toast.error("Erro ao carregar perfil.");
      }
    }

    loadUserProfile();
  }, [setValue]);

  const updateMutation = useMutation({
    mutationFn: async (data: ProfileFormData) => {
      return httpClient.patch("/me", {
        name: data.name,
        email: data.email,
        password: data.password || undefined,
      });
    },
  });

  const handleSubmit = hookSubmit(async (data) => {
    try {
      await updateMutation.mutateAsync(data);
      toast.success("Perfil atualizado!");
      onSuccess?.();
    } catch {
      toast.error("Erro ao atualizar perfil.");
    }
  });

  return {
    register,
    handleSubmit,
    errors,
    isLoading: updateMutation.isPending,
  };
}
