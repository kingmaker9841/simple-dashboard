import React from 'react';
import SalesCard from '@components/ui/dashboard/card/SalesCard';
import ProfitCard from '@components/ui/dashboard/card/ProfitCard';
import CountrySalesCard from '@components/ui/dashboard/card/CountrySalesCard';
import UserInfo from '@components/ui/dashboard/user-info/UserInfo';
import { OrdersStatus } from '@components/ui/dashboard/user-table/UserTable';
import UserTable from '@components/ui/dashboard/user-table/UserTable';

const Dashboard: React.FunctionComponent = () => {
  return (
    <div className="w-full min-w-full">
      <div className="w-full min-w-full">
        <div className="grid w-full min-w-full auto-rows-auto grid-cols-1 gap-4 md:grid-cols-4 2xl:grid-cols-9">
          <div className="col-span-4 h-[100%] w-full lg:col-span-2 2xl:col-span-3">
            <SalesCard />
          </div>
          <div className="col-span-4 h-[100%] lg:col-span-2 2xl:col-span-2">
            <ProfitCard />
          </div>
          <div className=" col-span-4 h-[100%] xl:col-span-4 2xl:col-span-4">
            <CountrySalesCard />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1  ">
        <UserInfo>
          <OrdersStatus />
        </UserInfo>
      </div>

      <div className="grid grid-cols-1">
        <UserTable />
      </div>
    </div>
  );
};

export default Dashboard;
