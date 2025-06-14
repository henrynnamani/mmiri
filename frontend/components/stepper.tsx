'use client'

import React, { useEffect, useState } from 'react';
import { Steps } from 'antd';
import { getUserIdFromToken } from '@/lib/jwt';
import { useCookies } from 'react-cookie';
import useSWR from 'swr';
import { useRouter } from 'next/navigation';

const App: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [cookies] = useCookies(['access_token'])
  const userId = getUserIdFromToken(cookies.access_token)
  const { data: userOrder } = useSWR('users/order', {
    dedupingInterval: 3000
  })
  const router = useRouter()

  // useEffect(() => {
  //   const socket = connectSocket(userId);

  //   socket.on('order-status', (data) => {
  //     console.log('Order Update:', data);
  //     // Optionally show toast or update state/UI
  //   });

  //   return () => {
  //     socket.disconnect();
  //   };
  // }, []);

  useEffect(() => {
    switch(userOrder?.data?.payload[0].status) {
      case 'assigned':
        setCurrent(0)
        break;
      case 'on delivery':
        setCurrent(1)
        break;
      case 'delivered':
        setCurrent(2)
        setTimeout(() => {
          router.push('/')
        }, 4000)
    }
  }, [userOrder?.data?.payload[0].status])

  const onChange = (value: number) => {
    console.log('onChange:', value);
    setCurrent(value);
  };
  const description = 'This is a description.';

  return (
    <div className="">
      <Steps
        current={current}
        onChange={() => {}}
        direction="vertical"
        items={[
          {
            title: 'Payment Confirmation',
            description: 'Wait while vendor confirm payment',
          },
          {
            title: 'On Delivery',
            description,
          },
          {
            title: 'Order Completed',
            description,
          },
        ]}
      />
    </ div>
  );
};

export default App;