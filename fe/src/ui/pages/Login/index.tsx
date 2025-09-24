import Button from "../../components/Button";
import Input from "../../components/Input";

export default function Login() {
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
          <form className="flex flex-col gap-4 w-full">
            <Input
              type={"email"}
              placeholder="E-mail"
              error="E-mail incorreto. Tente novamente"
            />

            <Input
              type={"password"}
              placeholder="Senha"
            />

            <Button children="Fazer Login" />
          </form>
        </div>
      </div>
    </div>
  );
}
