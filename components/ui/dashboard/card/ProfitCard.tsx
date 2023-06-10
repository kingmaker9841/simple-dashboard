import React from 'react';
import Image from 'next/image';
import { ArrowUpIcon } from '@components/icons';

const ProfitCard: React.FunctionComponent = () => {
  return (
    <div className="h-[100%] rounded-2xl bg-white">
      <div className="ml-3 rounded-lg  pt-[24px] pl-6 pb-6">
        <div className="flex justify-start align-middle">
          <Image src="/assets/yen.png" width="52px" height="43px" alt="Yen Image" />
          <div className="pl-6">
            <p className="h4 leading-[28px] -tracking-[2%]">Total Profit</p>
            <p className="h5 pt-[4px] -tracking-[2%]">Last 7 days</p>
          </div>
        </div>
        <p className="h1 pt-[30px]">50K</p>
        <div className="flex justify-start pt-4 align-middle">
          <div className="">
            <ArrowUpIcon />
          </div>
          <p className="h5 !text-emeraldGreen">12%</p>
          <p className="h5 ml-2 text-slateLavender">vs last 7 days</p>
        </div>
      </div>
    </div>
  );
};

export default ProfitCard;
