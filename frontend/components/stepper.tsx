'use client'

import React, { useState } from 'react';
import { Steps } from 'antd';

const App: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const onChange = (value: number) => {
    console.log('onChange:', value);
    setCurrent(value);
  };
  const description = 'This is a description.';

  return (
    <div className="">
      <Steps
        current={current}
        onChange={onChange}
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