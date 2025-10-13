import { useNavigate, useLocation } from "react-router-dom";
import { Home, LogOff, Menu, Order, Profile, Users } from "../icons";
import NavButton from "./NavButton";
import { useAuth } from "../../app/hooks/useAuth";

export default function Navbar() {

    const { signout } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const currentPath = location.pathname;

    const handleNavigate = (path: string) => {
      navigate(path, { replace: true });
    }

    const navItems = [
      {
        path: '/',
        label: 'Home',
        icon: <Home />,
        onClick: () => handleNavigate('/')
      },
      {
        path: '/history',
        label: 'Histórico',
        icon: <Order />,
        onClick: () => handleNavigate('/history')
      },
      {
        path: '/menu',
        label: 'Cardápio',
        icon: <Menu />,
        onClick: () => handleNavigate('/menu')
      },
      {
        path: '/users',
        label: 'Usuários',
        icon: <Users />,
        onClick: () => handleNavigate('/users')
      },
    ];

    const profileItems = [
      {
        path: '/profile',
        label: 'Meu Perfil',
        icon: <Profile />,
        onClick: () => handleNavigate('/profile')
      },
      {
        path: '/logout',
        label: 'Sair',
        icon: <LogOff />,
        onClick: () => signout()
      },
    ];


  return (
    <nav className="bg-white flex flex-col items-center justify-between gap-14 w-[108px] h-full sticky">
      <div>
        <NavButton
          label="WA"
        />
      </div>

      <div className="flex flex-col gap-2">
        {navItems.map(item => (
          <NavButton
            key={item.path}
            isActive={item.path === '/'
              ? currentPath === '/'
              : currentPath.startsWith(item.path)
            }
            icon={item.icon}
            label={item.label}
            onClick={item.onClick}
          />
        ))}
      </div>

      <div className="flex flex-col gap-2">
        {profileItems.map(item => (
          <NavButton
            key={item.label}
            isActive={currentPath.startsWith(item.path) && item.path !== '/logout'}
            icon={item.icon}
            label={item.label}
            onClick={item.onClick}
          />
        ))}
      </div>
    </nav>
  )
}
