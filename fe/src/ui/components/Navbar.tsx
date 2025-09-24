import { Home, LogOff, Menu, Order, Profile, Users } from "../icons";
import NavButton from "./NavButton";

export default function Navbar() {
  return (
    <nav className="bg-white flex flex-col items-center justify-between gap-14 w-[108px] h-full sticky">
      <div>
        <NavButton
          label="WA"
        />
      </div>

      <div>
        <NavButton
          isActive={true}
          icon={<Home/>}
          label="Home"
        />

        <NavButton
          isActive={false}
          icon={<Order/>}
          label="Histórico"
        />

        <NavButton
          isActive={false}
          icon={<Menu/>}
          label="Cardápio"
        />

        <NavButton
          isActive={false}
          icon={<Users/>}
          label="Usuários"
        />
      </div>

      <div>

        <NavButton
          isActive={false}
          icon={<Profile/>}
          label="Meu Perfil"
        />

        <NavButton
          isActive={false}
          icon={<LogOff/>}
          label="Sair"
        />

      </div>
    </nav>
  )
}
