import React from 'react';

const Profile: React.FunctionComponent = () => {
  return (
    <div className="md2:pl-12 flex items-center justify-start pl-6">
      <div className="z-50 h-[72px] w-[72px] rounded-[36px] border-4 border-blueGem ">
        <div className="h-full w-full rounded-[36px] bg-blueGem opacity-60"></div>
      </div>
      <div className="ml-4">
        <p className="h4 font-semibold leading-[22px] text-black">Robert Fox</p>
        <p className="leading-[22px] text-slateLavender">robert@gmail.com</p>
      </div>
    </div>
  );
};

const PersonalInformation: React.FunctionComponent = () => {
  return (
    <div className="border-l-2 border-l-lavenderGray pl-6">
      <p className="text-xs font-medium leading-[15px] text-slateLavender">PERSONAL INFORMATION</p>
      <div className="mt-4">
        <div className="flex">
          <div className="pr-4">
            <p className="text-xs font-normal leading-[15px]">Contact Number</p>
            <p className="pt-4 text-xs font-normal leading-[15px]">Date of Birth</p>
            <p className="pt-4 text-xs font-normal leading-[15px]">Member Since</p>
          </div>
          <div className="ml-4">
            <p className="text-xs font-semibold leading-[15px]">(201) 555-0124</p>
            <p className="pt-4 text-xs font-semibold leading-[15px]">1 Jan, 1985</p>
            <p className="pt-4 text-xs font-semibold leading-[15px]">3 March, 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ShippingAddress: React.FunctionComponent = () => {
  return (
    <div className="border-l-2 border-l-lavenderGray px-6 ">
      <p className="text-xs font-medium leading-[15px] text-slateLavender">SHIPPING ADDRESS</p>
      <p className="mt-4 text-xs font-normal leading-[15px]">3517 W. Gray St. Utica, Pennsylvania 57867</p>
      <div className="mt-[26px] flex justify-start">
        <div>
          <p className="h2 leading-[22px]">150</p>
          <p className="mt-2 text-xs font-medium tracking-tight text-slateLavender">Total Order</p>
        </div>
        <div className="ml-14">
          <p className="h2 leading-[22px]">140</p>
          <p className="mt-2 text-xs font-medium tracking-tight text-slateLavender">Completed</p>
        </div>
        <div className="ml-14">
          <p className="h2 leading-[22px]">10</p>
          <p className="mt-2 text-xs font-medium tracking-tight text-slateLavender">Canceled</p>
        </div>
      </div>
    </div>
  );
};

const UserInfo: React.FunctionComponent = ({ children }) => {
  return (
    <div className="mt-4 rounded-lg bg-white pt-2">
      <div className="mt-4 ">
        <div className={['grid grid-cols-1 gap-4', 'md:grid-cols-2', 'xl:grid-cols-3'].join(' ')}>
          <Profile />
          <hr className="md:hidden" />
          <PersonalInformation />
          <hr className="md:hidden" />
          <ShippingAddress />
          <hr className="md:hidden" />
        </div>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
};

export default UserInfo;
