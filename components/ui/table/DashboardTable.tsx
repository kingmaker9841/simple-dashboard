import React from 'react';
import THead from '@components/ui/table/TableHead';
import TBody from '@components/ui/table/TableBody';
import TFooter from '@components/ui/table/TableFooter';
import Pagination from '@components/ui/pagination/Pagination';
import { tableHead, tableRow } from 'data/tableData';
import DropDown from '@components/ui/select/Select';

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
          className={['border-b-2 border-lavenderMist px-9 py-4 text-left', `text-${head.align}`].join(' ')}
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
          <td className="px-9 py-4 text-goldenSun">{row.status}</td>
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
};

export const TableFooter: React.FunctionComponent<FooterProps> = ({ currentPage, setCurrentPage, getPageSize }) => {
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
            totalCount={tableRow.length}
            pageSize={pageSizeState}
            onPageChange={page => setCurrentPage(page as number)}
            showComponent={<ShowComponent />}
          />
        </td>
      </tr>
    </TFooter>
  );
};

const DashboardTable: React.FunctionComponent = () => {
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [pageSizeState, setPageSizeState] = React.useState(pageSize);

  const getPageSize = (val: number) => {
    setPageSizeState(val);
  };

  const currentTableData = React.useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSizeState;
    const lastPageIndex = firstPageIndex + pageSizeState;
    return tableRow.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, pageSizeState]);

  return (
    <div className="table-dashboard overflow-x-auto">
      <table className="w-full rounded-[16px] px-4 py-2">
        <TableHead cols={tableHead} />
        <TableBody rows={currentTableData} />
        <TableFooter {...{ currentPage, setCurrentPage, getPageSize }} />
      </table>
    </div>
  );
};

export default DashboardTable;
