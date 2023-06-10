import React from 'react';
import { countrySalesLists } from 'data/countrySalesLists';
import Image from 'next/image';

const CountrySalesCard: React.FunctionComponent = () => {
  return (
    <div className="h-[100%] rounded-lg bg-white">
      <div className="ml-3 rounded-lg  px-[18px] py-[31px]">
        {countrySalesLists.map(sales => {
          return (
            <div
              key={sales.id}
              className={[
                'flex items-center justify-start',
                sales.id === countrySalesLists.length ? 'mb-0' : 'mb-[18px]',
              ].join(' ')}
            >
              <div className="h-[34px] w-[45.05px]">
                <Image src={sales.icon} width="34px" height="34px" alt={`${sales.country} Icon`} />
              </div>
              <div className="ml-4 w-[83px]">
                <p className="text-base font-semibold !leading-[21px]">{sales.totalSales}</p>
                <p className="text-xs font-normal !leading-5 text-slateLavender">{sales.country}</p>
              </div>
              <div className="ml-4 h-2 w-[168px] rounded-full bg-blue-200">
                <div className="h-full w-2/3 rounded-full bg-blue-600 text-center text-xs text-white"></div>
              </div>
              <sales.arrowIcon className="ml-5" />
              <p
                className={[
                  '!leading[21px] ml-2 text-base text-lushMeadow',
                  sales.salesProgress === 'up' ? 'text-lushMeadow' : 'text-crimsonCoral',
                ].join(' ')}
              >
                {sales.progress}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CountrySalesCard;
