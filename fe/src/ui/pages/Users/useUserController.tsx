import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { httpClient } from "../../../app/services/httpClient";

const schema = z.object({
  name: z.string().nonempty("Nome é obrigatório"),
  email: z.string().email("E-mail inválido"),
  password: z.string().optional(),
  type: z.enum(["ADMIN", "WAITER"]),
});

export type UserFormData = z.infer<typeof schema>;

export function useUserController(userId?: string, onSuccess?: () => void) {
  const {
    register,
    handleSubmit: hookSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<UserFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      type: "ADMIN",
    },
  });

  const createMutation = useMutation({
    mutationFn: async (data: UserFormData) => {
      return httpClient.post("/users", data);
    },
  });

  const updateMutation = useMutation({
    mutationFn: async (data: UserFormData) => {
      return httpClient.patch(`/users/${userId}`, data);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async () => {
      return httpClient.delete(`/users/${userId}`);
    },
    enabled: !!userId,
  });

  const handleSubmit = hookSubmit(async (data) => {
    try {
      if (userId) {
        await updateMutation.mutateAsync(data);
        toast.success("Usuário atualizado!");
      } else {
        await createMutation.mutateAsync(data);
        toast.success("Usuário criado!");
        reset();
      }

      onSuccess?.();
    } catch {
      toast.error("Erro ao salvar usuário.");
    }
  });

  const handleDelete = async () => {
    if (!userId) return;
    try {
      await deleteMutation.mutateAsync();
      toast.success("Usuário removido!");
      onSuccess?.();
    } catch {
      toast.error("Erro ao remover usuário.");
    }
  };

  function loadUser(user: any) {
    setValue("name", user.name);
    setValue("email", user.email);
    setValue("type", user.type);
  }

  return {
    register,
    handleSubmit,
    errors,
    loadUser,
    reset,
    handleDelete,
    isLoading:
      createMutation.isPending ||
      updateMutation.isPending ||
      deleteMutation.isPending,
  };
}
