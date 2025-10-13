import Button from "../../components/Button";
import Input from "../../components/Input";
import { useLoginController } from "./useLoginController";

export default function Login() {
  const { handleSubmit, register, errors, isLoading } = useLoginController();

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="w-[384px]">
        <div className="flex flex-col items-center justify-center gap-10">
          <header>
            <h3>Bem-vindo(a) ao</h3>
            <h1>
              <strong>WAITER</strong>APP
            </h1>
          </header>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
            <Input
              type={"email"}
              placeholder="E-mail"
              error={errors.email?.message}
              {...register('email')}
            />

            <Input
              type={"password"}
              placeholder="Senha"
              error={errors.password?.message}
              {...register('password')}
            />

            <Button
              type="submit"
              children="Fazer Login"
              isLoading={isLoading}
            />
          </form>
        </div>
      </div>
    </div>
  );
}
