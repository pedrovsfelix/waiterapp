import { formatCurrency } from "../../app/utils/formatCurrency";
import type { Order } from "../../types/Order";
import { Close } from "../icons";

interface OrderModalProps {
  visible: boolean;
  order: Order | null;
}

export default function OrderModal({ visible, order }: OrderModalProps) {

  if(!visible || !order ) {
    return null
  }

  const total = order.products.reduce((total, { product, quantity }) => {
    return total + (product.price * quantity);
  }, 0)

  return (
    <div className="w-full h-full left-0 top-0 bg-black/80 backdrop-blur-[4.5px] fixed flex justify-center items-center">
      <div className="bg-white w-[480px] flex flex-col gap-8 rounded-lg p-8">
        <header className="flex items-center justify-between">
          <strong className="text-2xl">
            Mesa {order.table}
          </strong>
          <button type="button" className="cursor-pointer bg-transparent border-0 w-8 h-8 text-black p-0">
            <Close />
          </button>
        </header>

        <div>
          <small className="text-sm opacity-80">Status do Pedido</small>
          <div className="flex items-center gap-2 mt-2">
            <span>
              {order.status === 'WAITING' && '🕛'}
              {order.status === 'IN_PRODUCTION' && '🧑🏼‍🍳'}
              {order.status === 'DONE' && '✅'}
            </span>
            <strong>
              {order.status === 'WAITING' && 'Fila de espera'}
              {order.status === 'IN_PRODUCTION' && 'Em produção'}
              {order.status === 'DONE' && 'Pronto!'}
            </strong>
          </div>
        </div>

        <div>
          <strong className="text-sm opacity-80">Itens</strong>
          {order.products.map(({_id, product, quantity }) => (
            <div key={_id} className="mt-4 flex">
              <img
                src={`http://localhost:3001/uploads/${product.imagePath}`}
                alt={product.name}
                width="56"
                height="28.51"
                className="rounded-[6px]"
              />

              <span className="ml-3 mr-1 text-sm text-gray-700 block min-w-[20px]">
                {quantity}x
              </span>

              <div className="flex flex-col gap-1">
                <strong>{product.name}</strong>
                <span className="text-sm text-gray-700">{formatCurrency(product.price)}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm opacity-80">Total</span>
          <strong>{formatCurrency(total)}</strong>
        </div>

        <footer>
          <button type="button" className="bg-gray-900 rounded-[48px] text-white py-3 px-">
            <span>🧑🏼‍🍳</span>
            <strong></strong>
          </button>
        </footer>
      </div>
    </div>
  )
}
