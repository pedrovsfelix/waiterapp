import { useEffect } from "react";
import Input from "./Input";
import { Close } from "../icons";

interface ProductModalProps {
  visible: boolean;
  product: Product | null;
  onClose(): void;
  onDeleteProduct(): Promise<void>;
  isLoading: boolean;
}

export default function ProductModal({
  visible,
  product,
  onClose,
  onDeleteProduct,
  isLoading,
}: ProductModalProps) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (!visible || !product) {
    return null;
  }

  return (
    <div className="w-full h-full left-0 top-0 bg-black/80 backdrop-blur-[4.5px] fixed flex justify-center items-center">
      <div className="bg-white w-[928px] h-[928px] flex flex-col gap-8 rounded-lg p-8">
        <header className="flex items-center justify-between">
        <strong>Editar Produto</strong>
        <button
          onClick={onClose}
          type="button"
          className="cursor-pointer bg-transparent border-0 w-8 h-8 text-black p-0"
        >
          <Close />
        </button>
      </header>
      <div className="flex items-center justify-between">
        <div>
          <div>
            <strong>Imagem</strong>
            <Input type={"image"} placeholder="Alterar imagem" />
          </div>

          <Input type={"product"} placeholder="Nome do Produto" />
          <Input type={"description"} placeholder="Descrição do Produto" />
        </div>

        <div>
          <h1>Ingredientes</h1>

          <Input type={"product"} placeholder="Nome do Produto" />
          <Input type={"description"} placeholder="Descrição do Produto" />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p>Excluir Produto</p>

        <p>Salvar Alterações</p>
      </div>
      </div>
    </div>
  );
}
