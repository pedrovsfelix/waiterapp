import { Home, Refresh } from "../icons";

export default function Header() {
  return (
    <header className="h-[72px] w-full mt-10 flex justify-between">
      <div>
        <div className="flex items-center">
          <Home className="w-5 h-5 text-black"/>
          <h1 className="font-bold ml-1">Home</h1>
        </div>
        <p className="text-gray-400 mt-4">Acompanhe os pedidos dos clientes</p>
      </div>

      <div className="flex items-center text-primary text-h6 font-bold">
        <Refresh/>
        <p className="ml-2">Reiniciar o dia</p>
      </div>

    </header>
  )
}
