import { useEffect } from "react";
import Button from "../../../../components/Button";
import Input from "../../../../components/Input";
import Modal from "../../../../components/Modal";
import { RadioInput } from "../../../../components/RadioInput";
import { useUserController } from "../../useUserController";
import type { User } from "../../../../../types/User";

interface UserModalProps {
  visible: boolean;
  user?: User | null;
  onClose(): void;
  onRefresh(): void;
}

export default function UserModal({ visible, user, onClose, onRefresh }: UserModalProps) {
  const {
    register,
    handleSubmit,
    errors,
    loadUser,
    handleDelete,
    isLoading
  } = useUserController(user?._id, () => {
    onRefresh();
    onClose();
  });

  useEffect(() => {
    if (visible && user) {
      loadUser(user);
    }
  }, [visible, user]);

  return (
    <Modal
      open={visible}
      onClose={onClose}
      title="Editar Usuário"
      footer={
        <div className="flex items-center justify-between">
          <Button
            onClick={handleDelete}
            className="p-0 bg-transparent text-primary"
            disabled={isLoading}
          >
            Excluir Usuário
          </Button>

          <Button
            onClick={handleSubmit}
            disabled={isLoading}
          >
            Salvar Alterações
          </Button>
        </div>
      }
    >
      <form className="flex flex-col gap-4">

        <Input
          type="text"
          placeholder="Nome"
          error={errors.name?.message}
          {...register("name")}
        />

        <Input
          type="email"
          placeholder="E-mail"
          error={errors.email?.message}
          {...register("email")}
        />

        <Input
          type="password"
          placeholder="Senha (opcional)"
          error={errors.password?.message}
          {...register("password")}
        />

        <div className="flex gap-4">
          <RadioInput
            label="Admin"
            value="ADMIN"
            name="type"
            register={register}
          />

          <RadioInput
            label="Garçom"
            value="WAITER"
            name="type"
            register={register}
          />
        </div>

      </form>
    </Modal>
  );
}
