import { ChevronUpIcon, ChevronDownIcon } from '@components/icons';

export const countrySalesLists = [
  {
    id: 1,
    icon: '/assets/us.png',
    arrowIcon: ChevronUpIcon,
    progress: '25.8%',
    progressText: '25.8',
    totalSales: '30k',
    country: 'United States',
    salesProgress: 'up',
  },
  {
    id: 2,
    icon: '/assets/br.png',
    arrowIcon: ChevronDownIcon,
    progress: '16.2%',
    progressText: '16.2',
    totalSales: '26k',
    country: 'Brazil',
    salesProgress: 'down',
  },
  {
    id: 3,
    icon: '/assets/au.png',
    arrowIcon: ChevronDownIcon,
    progress: '11.9%',
    progressText: '11.9',
    totalSales: '17k',
    country: 'Australia',
    salesProgress: 'down',
  },
];
