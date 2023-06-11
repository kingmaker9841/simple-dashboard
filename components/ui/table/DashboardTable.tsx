import React from 'react';
import { classNames } from 'utils/helper';
import { OrderStatusEnum } from 'context/orderStatusContext';
import { tableHead, tableRow } from 'data/tableData';
import DropDown from '@components/ui/select/Select';
import Pagination from '@components/ui/pagination/Pagination';
import TBody from '@components/ui/table/TableBody';
import TFooter from '@components/ui/table/TableFooter';
import THead from '@components/ui/table/TableHead';
import useOrderStatus from 'hooks/useOrderStatus';

export type HeaderProps = {
  id: number;
  label: string;
  align: 'left' | 'right' | 'center';
};

export type BodyProps = {
  id: number;
  customer: string;
  date: string;
  total: string;
  method: string;
  status: string;
};

const pageSize = 5;

const optionsDropdown = [
  {
    id: 1,
    label: '5',
    value: 5,
  },
  {
    id: 2,
    label: '10',
    value: 10,
  },
  {
    id: 3,
    label: '20',
    value: 20,
  },
  {
    id: 4,
    label: '30',
    value: 30,
  },
];

export const TableHead: React.FunctionComponent<{ cols: HeaderProps[] }> = ({ cols }) => (
  <THead>
    <tr className="w-full">
      {cols.map(head => (
        <th
          key={head.id}
          className={classNames('border-b-2 border-lavenderMist px-9 py-4 text-left', `text-${head.align}`)}
        >
          <span className="text-xs font-medium leading-[15px] text-slateLavender">{head.label}</span>
        </th>
      ))}
    </tr>
  </THead>
);

export const TableBody: React.FunctionComponent<{ rows: BodyProps[] }> = ({ rows }) => {
  return (
    <TBody>
      {rows.map(row => (
        <tr key={row.id} className="border-b-2 border-lavenderMist">
          <td className="px-9 py-4">{row.id}</td>
          <td className="px-9 py-4">{row.customer}</td>
          <td className="px-9 py-4">{row.date}</td>
          <td className="px-9 py-4">{row.total}</td>
          <td className="px-9 py-4">{row.method}</td>
          <td
            className={classNames(
              'px-9 py-4 text-goldenSun',
              row.status === OrderStatusEnum.completed ? 'text-emeraldGreen' : '',
              row.status === OrderStatusEnum.canceled ? 'text-crimsonCoral' : ''
            )}
          >
            {row.status}
          </td>
          <td className="px-9 py-4 text-vividBlue">View Details</td>
        </tr>
      ))}
    </TBody>
  );
};

type FooterProps = {
  currentPage: number;
  setCurrentPage: (_: number) => void;
  getPageSize: (_: number) => void;
  count: number;
};

export const TableFooter: React.FunctionComponent<FooterProps> = ({
  currentPage,
  setCurrentPage,
  getPageSize,
  count,
}) => {
  const [pageSizeState, setPageSizeState] = React.useState(pageSize);

  const getSelectedOption = (val: number) => {
    setPageSizeState(val);
    getPageSize(val);
  };

  const ShowComponent = () => (
    <div className="flex items-center">
      <span className="text-slateLavender">Showing</span>
      <DropDown
        getSelectedOption={getSelectedOption}
        options={optionsDropdown}
        className=" ml-4 text-black outline-lavenderMist"
      />
      <span className="ml-4 text-slateLavender">of {tableRow.length}</span>
    </div>
  );

  return (
    <TFooter>
      <tr>
        <td colSpan={7} className="px-5 py-4">
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={count}
            pageSize={pageSizeState}
            onPageChange={page => setCurrentPage(page as number)}
            showComponent={<ShowComponent />}
          />
        </td>
      </tr>
    </TFooter>
  );
};

type Props = {
  searchText: string;
};

const DashboardTable: React.FunctionComponent<Props> = ({ searchText }) => {
  const orderContext = useOrderStatus();
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [pageSizeState, setPageSizeState] = React.useState(pageSize);
  const [count, setCount] = React.useState<number>(0);

  const getPageSize = (val: number) => {
    setPageSizeState(val);
  };

  const currentTableData = React.useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSizeState;
    const lastPageIndex = firstPageIndex + pageSizeState;
    const result =
      orderContext.orderStatus === OrderStatusEnum.allOrders
        ? tableRow
        : tableRow.filter(row => row.status === orderContext.orderStatus);

    const searchResult = searchText === '' ? result : result.filter(el => el.customer.includes(searchText));
    setCount(searchResult.length);
    const slicedRow = searchResult.slice(firstPageIndex, lastPageIndex);
    return slicedRow;
  }, [currentPage, pageSizeState, orderContext.orderStatus, searchText]);

  return (
    <div className="table-dashboard overflow-x-auto">
      <table className="w-full rounded-[16px] px-4 py-2">
        <TableHead cols={tableHead} />
        <TableBody rows={currentTableData} />
        <TableFooter {...{ currentPage, setCurrentPage, getPageSize, currentTableData, count }} />
      </table>
    </div>
  );
};

export default DashboardTable;
