import { useEffect } from "react";
import Button from "../../../../components/Button";
import Input from "../../../../components/Input";
import Modal from "../../../../components/Modal";
import { RadioInput } from "../../../../components/RadioInput";
import { useUserController } from "../../useUserController";

interface CreateUserModalProps {
  visible: boolean;
  onClose(): void;
  onRefresh(): void;
}

export default function CreateUserModal({ visible, onClose, onRefresh }: CreateUserModalProps) {
  const {
    register,
    handleSubmit,
    errors,
    reset,
    isLoading
  } = useUserController(undefined, () => {
    onRefresh();
    onClose();
  });

  useEffect(() => {
    if (visible) {
      reset();
    }
  }, [visible]);

  return (
    <Modal
      open={visible}
      onClose={onClose}
      title="Novo Usuário"
      footer={
        <div className="w-full">
          <Button
            className="w-full"
            onClick={handleSubmit}
            disabled={isLoading}
          >
            Cadastrar usuário
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
          placeholder="Senha"
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
