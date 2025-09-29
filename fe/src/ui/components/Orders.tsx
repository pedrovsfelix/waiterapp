import { useEffect, useState } from 'react';
import socketIo from 'socket.io-client';
import type { Order } from '../../types/Order';
import OrdersBoard from './OrdersBoard';
import { api } from '../../app/utils/api';

export default function Orders() {
    const[ orders, setOrders ] = useState<Order[]>([]);

    useEffect(() => {
      const io = socketIo('http://localhost:3001', {
        transports: ['websocket'],
      });

      io.on('orders@new', (order) => {
        setOrders(prevState => prevState.concat(order));
      });

    }, []);

    useEffect(() => {
      api.get('/orders')
        .then(({data}) => {
          setOrders(data);
        });
    }, []);

    const waiting = orders.filter((order) => order.status === 'WAITING');
    const inProduction = orders.filter((order) => order.status === 'IN_PRODUCTION');
    const done = orders.filter((order) => order.status === 'DONE');

    function handleCancelOrder(orderId: string) {
      setOrders((prevState) => prevState.filter(order => order._id !== orderId))
    }

    function handleOrderStatusChange(orderId: string, status: Order['status']) {
      setOrders((prevState) => prevState.map((order) => (
        order._id === orderId
          ? { ...order, status }
          : order
      )));
    }

    return (
      <div className='flex gap-8'>

        <OrdersBoard
          icon='🕛'
          title='Fila de espera'
          orders={waiting}
          onCancelOrder={handleCancelOrder}
          onChangeOrderStatus={handleOrderStatusChange}
        />
        <OrdersBoard
          icon='🧑🏼‍🍳'
          title='Em preparação'
          orders={inProduction}
          onCancelOrder={handleCancelOrder}
          onChangeOrderStatus={handleOrderStatusChange}
        />
        <OrdersBoard
          icon='✅'
          title='Pronto'
          orders={done}
          onCancelOrder={handleCancelOrder}
          onChangeOrderStatus={handleOrderStatusChange}
        />

      </div>
    );
}
