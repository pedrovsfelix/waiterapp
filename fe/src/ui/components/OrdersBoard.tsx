import { useState } from "react";
import type { Order } from "../../types/Order";
import OrderModal from "./OrderModal";

interface OrdersBoardProps {
  icon: string;
  title: string;
  orders: Order[];
}

export default function OrdersBoard({ icon, title, orders }: OrdersBoardProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [ selectedOrder, setSelectedOrder ] = useState<null | Order>(null);

  function handleOpenModal(order: Order) {
    setIsModalVisible(true);
    setSelectedOrder(order);
  }

    function handleCloseModal() {
    setIsModalVisible(false);
    setSelectedOrder(null);
  }

  return (
    <div className="p-4 border-gray-300 border-solid border-[1px] rounded-lg flex-1">

      <OrderModal
        visible={isModalVisible}
        order={selectedOrder}
        onClose={handleCloseModal}
      />
      <header className="flex items-center justify-center gap-2">
        <span>
          {icon}
        </span>
        <span>
          {title}
        </span>
        <span>
          {orders.length}
        </span>
      </header>
      {orders.length > 0 && (
        <div className="flex flex-col items-center mt-6 gap-6">
          {orders.map((order) => (
            <button
              key={order._id}
              onClick={() => handleOpenModal(order)}
              className="bg-white border-[1px] border-solid border-gray-300 rounded-lg flex flex-col items-center justify-center w-full h-[128px] cursor-pointer">
              <strong className="font-medium">
                Mesa {order.table}
              </strong>
              <span>
                {order.products.length} itens
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
