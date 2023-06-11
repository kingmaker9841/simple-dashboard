import React from 'react';
import { classNames } from 'utils/helper';
import { OrderStatusEnum } from 'context/orderStatusContext';
import DashboardTable from '@components/ui/table/DashboardTable';
import DropDown from '@components/ui/select/Select';
import Search from '@components/ui/search/SearchTable';
import type { GetSearchProps } from '@components/ui/search/Search';
import useOrderStatus from 'hooks/useOrderStatus';

const dropdownOptions = [
  {
    id: 1,
    label: 'All',
    value: OrderStatusEnum.allOrders,
  },
  {
    id: 2,
    label: 'Completed',
    value: OrderStatusEnum.completed,
  },
  {
    id: 3,
    label: 'Canceled',
    value: OrderStatusEnum.canceled,
  },
];

export const OrdersStatus: React.FunctionComponent = () => {
  const orderContext = useOrderStatus();
  const [activeOrderStatus, setActiveOrderStatus] = React.useState<string>(OrderStatusEnum.allOrders);

  const handleClick = (status: OrderStatusEnum) => {
    orderContext.setOrderStatus(status);
    setActiveOrderStatus(status);
  };
  return (
    <div className="ml-8 flex justify-start">
      <div
        onClick={() => handleClick(OrderStatusEnum.allOrders)}
        className={classNames(
          'cursor-pointer',
          activeOrderStatus === OrderStatusEnum.allOrders ? 'border-b-2 border-vividBlue text-vividBlue' : ''
        )}
      >
        <p
          className={classNames(
            'px-6 py-4 leading-[22px] text-slateLavender',
            activeOrderStatus === OrderStatusEnum.allOrders ? 'text-vividBlue' : ''
          )}
        >
          {OrderStatusEnum.allOrders}
        </p>
      </div>

      <div
        onClick={() => handleClick(OrderStatusEnum.completed)}
        className={classNames(
          'ml-6 cursor-pointer',
          activeOrderStatus === OrderStatusEnum.completed ? 'border-b-2 border-vividBlue text-vividBlue' : ''
        )}
      >
        <p
          className={classNames(
            'px-6 py-4 leading-[22px] text-slateLavender',
            activeOrderStatus === OrderStatusEnum.completed ? 'text-vividBlue' : ''
          )}
        >
          {OrderStatusEnum.completed}
        </p>
      </div>

      <div
        onClick={() => handleClick(OrderStatusEnum.canceled)}
        className={classNames(
          'ml-6 cursor-pointer',
          activeOrderStatus === OrderStatusEnum.canceled ? 'border-b-2 border-vividBlue text-vividBlue' : ''
        )}
      >
        <p
          className={classNames(
            'px-6 py-4 leading-[22px] text-slateLavender',
            activeOrderStatus === OrderStatusEnum.canceled ? 'text-vividBlue' : ''
          )}
        >
          {OrderStatusEnum.canceled}
        </p>
      </div>
    </div>
  );
};

const SelectStatus: React.FunctionComponent = () => {
  const context = useOrderStatus();

  const getSelectedOption = (val: OrderStatusEnum) => {
    context.setOrderStatus(val);
  };

  return <DropDown optionPrefix="Status: " options={dropdownOptions} getSelectedOption={getSelectedOption} />;
};

const SearchTable: React.FunctionComponent<GetSearchProps> = ({ getSearchText }) => {
  return <Search getSearchText={getSearchText} />;
};

const UserTable: React.FunctionComponent = () => {
  const [text, setText] = React.useState('');
  const handleSearchText = (text: React.SetStateAction<string>) => {
    setText(text);
  };
  return (
    <div>
      <div className="mt-4 md:flex md:justify-start">
        <SelectStatus />
        <div className="mt-2 w-full md:ml-4 md:mt-0 md:w-[200px]">
          <SearchTable getSearchText={handleSearchText} />
        </div>
      </div>
      <div className="mt-[22px] rounded-[16px] bg-white">
        <DashboardTable searchText={text} />
      </div>
    </div>
  );
};

export default UserTable;
