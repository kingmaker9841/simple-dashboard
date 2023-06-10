import React from 'react';

export enum OrderStatusEnum {
  allOrders = 'All Orders',
  completed = 'Completed',
  canceled = 'Canceled',
}

interface OrderStatusContextValue {
  orderStatus: OrderStatusEnum;
  setOrderStatus: React.Dispatch<React.SetStateAction<OrderStatusEnum>>;
}

const OrderStatusContext = React.createContext<OrderStatusContextValue | undefined>(undefined);

const OrderStatusContextProvider: React.FunctionComponent = ({ children }) => {
  const [orderStatus, setOrderStatus] = React.useState(OrderStatusEnum.allOrders);

  const contextValue = React.useMemo(
    () => ({
      orderStatus,
      setOrderStatus,
    }),
    [orderStatus]
  );

  return <OrderStatusContext.Provider value={contextValue}>{children}</OrderStatusContext.Provider>;
};

export { OrderStatusContext, OrderStatusContextProvider };
