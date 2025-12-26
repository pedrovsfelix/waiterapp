import { Close } from "../icons";

interface ModalProps {
  open: boolean;
  title?: string;
  icon?: React.ReactNode;
  onClose?(): void;
  children: React.ReactNode;
  footer?: React.ReactNode;
  width?: string;
}

export default function Modal({
  open,
  title,
  icon,
  onClose,
  children,
  footer,
  width = "480px"
}: ModalProps) {
  if (!open) return null;

  return (
    <div className="w-full h-full left-0 top-0 bg-black/80 backdrop-blur-sm fixed flex justify-center items-center">
      <div className="bg-white flex flex-col gap-6 rounded-lg p-8" style={{ width }}>
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {icon && <div>{icon}</div>}
            {title && <strong className="text-2xl">{title}</strong>}
          </div>

          <button onClick={onClose} className="w-8 h-8 cursor-pointer">
            <Close />
          </button>
        </header>

        {children}

        {footer && <footer className="mt-4">{footer}</footer>}
      </div>
    </div>
  );
}
