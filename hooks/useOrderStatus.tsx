import React from 'react';
import { OrderStatusContext } from 'context/orderStatusContext';

const useOrderStatus = () => {
  const context = React.useContext(OrderStatusContext);

  if (context === undefined) {
    throw new Error('useUserContext was used outside of its Provider');
  }

  return context;
};

export default useOrderStatus;
