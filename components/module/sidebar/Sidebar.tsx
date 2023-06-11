import React, { FunctionComponent } from 'react';
import { classNames } from 'utils/helper';
import { IndentDecreaseIcon } from '@components/icons';
import Image from 'next/image';
import SidebarLinks from '@components/module/sidebar/SidebarLinks';

type Props = {
  getSidebarCollapse: (_: boolean) => void;
};

const Sidebar: FunctionComponent<Props> = ({ getSidebarCollapse }) => {
  const [showSidebar, setShowSidebar] = React.useState(true);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 700) {
        if (showSidebar) setShowSidebar(sidebar => !sidebar);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [showSidebar]);

  const handleSidebarCollapse = () => {
    setShowSidebar(sidebar => !sidebar);
    getSidebarCollapse(showSidebar);
  };

  return (
    <aside className={classNames('bg-white', showSidebar ? 'sidebar' : `sidebar--collapsed`)}>
      <section className="sidebar-logo">
        <div className={classNames(showSidebar ? 'logo-details' : 'logo-details-collapsed')}>
          <Image src="/assets/logo.png" width="24px" height="28px" alt="JoBins Logo" />
          <div className="details-text ml-2.5">
            <h3 className="whitespace-nowrap">JoBins</h3>
          </div>
        </div>

        <div className="logo-drawer duration-400 cursor-pointer ease-in-out" onClick={handleSidebarCollapse}>
          <IndentDecreaseIcon />
        </div>
      </section>

      <section className="sidebar-menu">
        <SidebarLinks showSidebar={showSidebar} />
      </section>
    </aside>
  );
};

export default Sidebar;
