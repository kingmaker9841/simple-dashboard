import { FunctionComponent, SVGProps } from 'react';
import { HomeIcon, ShoppingCartIcon, StarIcon, CirclePlusIcon, BoxIcon } from '@components/icons';

export interface SidebarItem {
  id: string;
  name: string;
  icon: FunctionComponent<SVGProps<SVGSVGElement>>;
  path: string;
  active?: boolean;
}

interface SidebarList {
  id: string;
  title: string;
  content: SidebarItem[];
}

export type SidebarLists = Array<SidebarList>;

export const sidebarLists: SidebarLists = [
  {
    id: '1',
    title: 'MAIN MENU',
    content: [
      {
        id: '1.1',
        name: 'Dashboard',
        icon: HomeIcon,
        active: true,
        path: '/',
      },
      {
        id: '1.2',
        name: 'Order Management',
        icon: ShoppingCartIcon,
        path: '/order-management',
      },
      {
        id: '1.3',
        name: 'Brand',
        icon: StarIcon,
        path: '/brand',
      },
    ],
  },
  {
    id: '2',
    title: 'PRODUCTS',
    content: [
      {
        id: '2.1',
        name: 'Add Products',
        icon: CirclePlusIcon,
        path: '/products/add',
      },
      {
        id: '2.2',
        name: 'Product List',
        icon: BoxIcon,
        path: '/products/list',
      },
    ],
  },
];
