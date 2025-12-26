import { Home, Refresh } from "../icons";

interface HeaderProps {
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  rightAction?: React.ReactNode;
}

export default function Header({ icon, title, description, rightAction}: HeaderProps) {
  return (
    <header className="h-[72px] w-full flex justify-between">
      <div>
        <div className="flex items-center">
          <div>
            {icon}
          </div>
          <h1 className="font-bold ml-1">{title}</h1>
        </div>
        <p className="text-gray-400 mt-4">{description}</p>
      </div>

      <div className="flex items-center text-primary text-h6 font-bold">
        {rightAction}
      </div>

    </header>
  )
}
