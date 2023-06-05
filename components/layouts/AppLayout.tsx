import React, { FunctionComponent, HTMLAttributes } from 'react';
import Header from '@module/header/Header';
import Sidebar from '@components/module/sidebar/Sidebar';

type Props = {
  className?: HTMLAttributes<HTMLDivElement>['className'];
};

export const AppLayout: FunctionComponent<Props> = ({ children }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = React.useState(false);

  const getSidebarCollapse = (val: boolean) => {
    setSidebarCollapsed(val);
  };

  return (
    <main>
      <Sidebar getSidebarCollapse={getSidebarCollapse} />
      <Header sidebarCollapsed={sidebarCollapsed} />
      <div className={['bg-white', sidebarCollapsed ? 'main-content--collapsed' : 'main-content'].join(' ')}>
        {children}
      </div>
    </main>
  );
};
