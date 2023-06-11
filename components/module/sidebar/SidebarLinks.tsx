import React from 'react';
import { classNames } from 'utils/helper';
import { sidebarLists } from 'data/sidebarLists';
import { useRouter } from 'next/router';
import type { SidebarLists, SidebarItem } from 'data/sidebarLists';

type Props = {
  showSidebar: boolean;
};

const SidebarLinks: React.FunctionComponent<Props> = ({ showSidebar }) => {
  const [sidebarNavLists, setSidebarNavLists] = React.useState<SidebarLists>(sidebarLists);
  const router = useRouter();

  React.useEffect(() => {
    const pathname = router.asPath;
    if (pathname) {
      const newLists: SidebarLists = sidebarLists.map(list => {
        return {
          ...list,
          content: list.content.map(item => {
            return {
              ...item,
              active: item.path === pathname,
            };
          }),
        };
      });
      setSidebarNavLists(newLists);
    }
  }, [router.asPath]);

  const handleClick = (content: SidebarItem) => {
    router.push(content.path);
  };

  return (
    <div>
      {sidebarNavLists.map(links => {
        return (
          <div key={links.id} className="mb-[22px]">
            <p
              className={classNames(
                'py-[15px] pl-[30px] text-xxs leading-[14px] text-slateLavender',
                showSidebar ? '' : 'hidden'
              )}
            >
              {links.title}
            </p>
            <div className={classNames('px-[14px]', showSidebar ? '' : 'px-0')}>
              {links.content.map(content => {
                return (
                  <div
                    key={content.id}
                    onClick={() => handleClick(content)}
                    className={classNames(
                      'mb-[8px] flex cursor-pointer justify-start bg-white py-[9px] px-[19px] align-middle',
                      'transition duration-300 ease-in-out',
                      'hover:bg-mistWhite hover:transition hover:duration-300 hover:ease-in-out',
                      'focus:bg-blueGem focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blueGem active:shadow-lg',
                      content.active ? 'bg-mistWhite' : ''
                    )}
                  >
                    {
                      <content.icon
                        color={content.active ? 'text-black' : ''}
                        className={classNames(content.active ? 'text-black' : 'text-slateLavender')}
                      />
                    }
                    <p
                      className={classNames(
                        'pl-[11px] text-base leading-[22px]',
                        content.active ? 'font-semibold text-black' : 'text-slateLavender',
                        showSidebar ? 'link-name-active' : 'link-name'
                      )}
                    >
                      {content.name}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SidebarLinks;
