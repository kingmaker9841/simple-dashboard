import React, { FunctionComponent } from 'react';
import { BellIcon } from '@components/icons';

type Props = {
  sidebarCollapsed: boolean;
};

const Header: FunctionComponent<Props> = ({ sidebarCollapsed }) => {
  return (
    <header className={['flex items-center', !sidebarCollapsed ? 'header' : 'header--collapsed'].join(' ')}>
      <div className="flex w-full items-center justify-between">
        <h2>Dashboard</h2>
        <div className="flex items-center justify-around">
          <div className="relative mr-6">
            <BellIcon />
            <div className="absolute -top-[5px] -right-[5px] flex h-[18px] w-[18px] justify-center rounded-[9px] bg-crimsonCoral align-middle">
              <span className="text-white">4</span>
            </div>
          </div>
          <div className="relative h-[38px] w-[38px] rounded-[38px] bg-blueGem">
            <div className="absolute bottom-0 right-0 h-3 w-3 rounded-md border-2 border-white bg-lushMeadow"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
