import Button from "../../components/Button";
import Header from "../../components/Header";
import Input from "../../components/Input";
import { useProfileController } from "./useProfileController";

interface ProfileUserProps {
  onRefresh(): void;
}

export default function Profile({ onRefresh }: ProfileUserProps) {
  const {
    register,
    handleSubmit,
    errors,
    isLoading
  } = useProfileController(onRefresh);

  return (
    <>
      <Header
        title="Meu Perfil"
      />

      <header className="h-[72px] w-full flex justify-between">
        <div className="flex items-center gap-4">
          <h3 className="font-bold">Perfil do Usuário</h3>
        </div>
      </header>

      <div className="flex items-center gap-2">
        <form className="flex flex-col gap-4 w-[520px]">

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
            placeholder="Nova senha (opcional)"
            error={errors.password?.message}
            {...register("password")}
          />

          <Input
            type="password"
            placeholder="Confirmar nova senha"
            error={errors.confirmPassword?.message}
            {...register("confirmPassword")}
          />

          <Button
            className="w-full"
            onClick={handleSubmit}
            disabled={isLoading}
          >
            Salvar Alterações
          </Button>

        </form>
      </div>
    </>
  );
}
