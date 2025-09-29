import { useState } from "react";
import { toast } from "react-toastify";

import type { Order } from "../../types/Order";
import OrderModal from "./OrderModal";
import { api } from "../../app/utils/api";

interface OrdersBoardProps {
  icon: string;
  title: string;
  orders: Order[];
  onCancelOrder(orderId: string): void;
  onChangeOrderStatus(orderId: string, stauts: Order['status']): void;
}

export default function OrdersBoard({ icon, title, orders, onCancelOrder, onChangeOrderStatus }: OrdersBoardProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [ selectedOrder, setSelectedOrder ] = useState<null | Order>(null);
  const [ isLoading, setIsloading ] = useState(false);

  function handleOpenModal(order: Order) {
    setIsModalVisible(true);
    setSelectedOrder(order);
  }

  function handleCloseModal() {
    setIsModalVisible(false);
    setSelectedOrder(null);
  }

  async function handleChangeOrderStatus() {
    setIsloading(true);

    const status = selectedOrder?.status === 'WAITING' ? 'IN_PRODUCTION' : 'DONE'

    await api.patch(`/orders/${selectedOrder?._id}`, { status });

    toast.success(`O pedido da mesa ${selectedOrder?.table} teve o status alterado!`);

    onChangeOrderStatus(selectedOrder!._id, status);
    setIsloading(false);
    setIsModalVisible(false);

  }

  async function handleCancelOrder() {
    setIsloading(true);

    await api.delete(`/orders/${selectedOrder?._id}`);

    toast.success(`O pedido da mesa ${selectedOrder?.table} foi cancelado!`);

    onCancelOrder(selectedOrder!._id);
    setIsloading(false);
    setIsModalVisible(false);

  }

  return (
    <div className="p-4 border-gray-300 border-solid border-[1px] rounded-lg flex-1">

      <OrderModal
        visible={isModalVisible}
        order={selectedOrder}
        onClose={handleCloseModal}
        onCancelOrder={handleCancelOrder}
        onChangeOrderStatus={handleChangeOrderStatus}
        isLoading={isLoading}
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
