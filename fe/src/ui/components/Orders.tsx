import type { Order } from '../../types/Order';
import OrdersBoard from './OrdersBoard';

const orders: Order[] = [
	{
		'_id': '68d3369dd798c9590c55bbe2',
		'table': '1',
		'status': 'WAITING',
		'products': [
			{
				'product': {
					'name': 'Pizza 4 queijos',
					'imagePath': '1758676796291-MHEB7V2WRFDVHBXPFP6RFYZ66U.png',
					'price': 40,
				},
				'quantity': 2,
				'_id': '68d3369dd798c9590c55bbe3'
			},
			{
				'product': {
					'name': 'Coca cola',
					'imagePath': '1758588251107-210692-800-auto.png',
					'price': 7,
				},
				'quantity': 2,
				'_id': '68d3369dd798c9590c55bbe4'
			}
		],
	}
]

export default function Orders() {
    return (
      <div className='flex gap-8'>

        <OrdersBoard
          icon='🕛'
          title='Fila de espera'
          orders={orders}
        />
        <OrdersBoard
          icon='🧑🏼‍🍳'
          title='Em preparação'
          orders={[]}
        />
        <OrdersBoard
          icon='✅'
          title='Pronto'
          orders={[]}
        />

      </div>
    );
}
