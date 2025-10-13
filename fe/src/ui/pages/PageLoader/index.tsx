import logo from "../../../../public/ilustra.svg";

export default function PageLoader() {
  return (
    <div className="w-full h-dvh bg-primary flex flex-col items-center justify-center gap-6 text-white text-center">
      <img src={logo} alt="Logo WaiterApp" />
      <div>
        <h1 className="text-2xl uppercase"><span className="font-medium">Waiter</span>App</h1>
        <span>O App do Garçom</span>
      </div>
    </div>
  )
}
