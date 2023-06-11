import React from 'react';
import { classNames } from 'utils/helper';
import { convertPercentageToPixelWidthClass } from 'utils/helper';
import { countrySalesLists } from 'data/countrySalesLists';
import Image from 'next/image';

const CountrySalesCard: React.FunctionComponent = () => {
  return (
    <div className="h-[100%] rounded-2xl bg-white">
      <div className="ml-3 rounded-lg  px-[18px] py-[31px]">
        {countrySalesLists.map((sales, _) => {
          let fracWidth = convertPercentageToPixelWidthClass(sales.progressText, 168);
          if (_ === 0) fracWidth = 'w-2/3';
          if (_ === 1) fracWidth = 'w-1/3';
          if (_ === 2) fracWidth = 'w-1/4';
          return (
            <div
              key={sales.id}
              className={classNames(
                'flex items-center justify-start',
                sales.id === countrySalesLists.length ? 'mb-0' : 'mb-[18px]'
              )}
            >
              <div className="h-[34px] w-[45.05px]">
                <Image src={sales.icon} width="34px" height="34px" alt={`${sales.country} Icon`} priority={true} />
              </div>

              <div className="ml-4 w-[83px]">
                <p className="text-base font-semibold !leading-[21px]">{sales.totalSales}</p>
                <p className="text-xs font-normal !leading-5 text-slateLavender">{sales.country}</p>
              </div>

              <div className="ml-4 h-2 w-[168px] rounded-full bg-blue-200">
                <div
                  className={classNames('h-full rounded-full bg-blue-600 text-center text-xs text-white', fracWidth)}
                ></div>
              </div>

              <sales.arrowIcon className="ml-5" />

              <p
                className={classNames(
                  '!leading[21px] ml-2 text-base text-lushMeadow',
                  sales.salesProgress === 'up' ? 'text-lushMeadow' : 'text-crimsonCoral'
                )}
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
