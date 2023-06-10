import React from 'react';
import Image from 'next/image';
import { ArrowUpIcon } from '@components/icons';

const SalesCard: React.FunctionComponent = () => {
  return (
    <div className="h-[100%] rounded-lg bg-white">
      <div className="pt-[20px] pb-[28px] pr-[20px]">
        <div className="grid grid-cols-2 gap-5">
          <div className="ml-0 flex items-center justify-center !pl-0">
            <div>
              <Image
                src="/assets/business-and-finance.png"
                width="73px"
                height="73px"
                alt="Business and Finance image"
              />
            </div>
          </div>

          <div className="">
            <p className="h4 leading-[28px] -tracking-[2%]">Total Sales & Costs</p>
            <p className="h5 pt-[4px] -tracking-[2%]">Last 7 days</p>
            <p className="h1 pt-[30px]">$350K</p>
            <div className="flex justify-start pt-4 align-middle">
              <div className="">
                <ArrowUpIcon />
              </div>
              <p className="h5 !text-emeraldGreen">8.56K</p>
              <p className="h5 ml-2 text-slateLavender">vs last 7 days</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesCard;
