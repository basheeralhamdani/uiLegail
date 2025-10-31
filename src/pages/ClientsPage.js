import React, { useState, useMemo } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  flexRender,
} from '@tanstack/react-table';
import { useNavigate } from 'react-router-dom';

const clientsData = [
    { id: 1, clientId: 1, clientName: 'Eleanor Vance', currentMatter: 'Lady Bird Deed', status: 'Awaiting Attorney Review', lastActivity: '15 mins ago' },
    { id: 2, clientId: 2, clientName: 'John B. Grantor', currentMatter: 'Lady Bird Deed', status: 'Awaiting Client', lastActivity: '2 hours ago' },
    { id: 3, clientId: 3, clientName: 'Mary Testator', currentMatter: 'Will', status: 'Ready to Draft', lastActivity: 'Yesterday' },
    { id: 4, clientId: 4, clientName: 'Peter Principal', currentMatter: 'Power of Attorney', status: 'Completed', lastActivity: '3 days ago' },
    { id: 5, clientId: 5, clientName: 'Sarah Settlor', currentMatter: 'Revocable Trust', status: 'Awaiting Client', lastActivity: '1 day ago' },
    { id: 6, clientId: 6, clientName: 'Ben Beneficiary', currentMatter: 'Trust Amendment', status: 'Completed', lastActivity: '5 days ago' },
];

const StatusCell = ({ getValue }) => {
    const status = getValue();
    const color = {
        'Awaiting Attorney Review': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
        'Awaiting Client': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
        'Ready to Draft': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
        'Completed': 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300',
    }[status];

    return <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${color}`}>{status}</span>;
};

const ClientsPage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(clientsData);
  const [globalFilter, setGlobalFilter] = useState('');
  const [columnFilters, setColumnFilters] = useState([]);

  const columns = useMemo(() => [
    {
      accessorKey: 'clientName',
      header: 'Client Name',
    },
    {
      accessorKey: 'currentMatter',
      header: 'Current Matter',
    },
    {
      accessorKey: 'status',
      header: 'Status',
      cell: StatusCell,
    },
    {
      accessorKey: 'lastActivity',
      header: 'Last Activity',
    },
  ], []);

  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter,
      columnFilters,
    },
    onGlobalFilterChange: setGlobalFilter,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  const handleRowClick = (row) => {
    navigate(`/clients/${row.original.clientId}`);
  };

  return (
    <>
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Clients</h2>
      <div className="flex justify-between mb-6">
        <input
          type="text"
          value={globalFilter ?? ''}
          onChange={e => setGlobalFilter(e.target.value)}
          className="p-2 border border-gray-300 rounded-md w-1/3 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
          placeholder="Search clients..."
        />
        <select
          value={table.getColumn('status')?.getFilterValue() ?? ''}
          onChange={e => table.getColumn('status')?.setFilterValue(e.target.value)}
          className="p-2 border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:text-white"
        >
          <option value="">All Statuses</option>
          <option value="Awaiting Attorney Review">Awaiting Attorney Review</option>
          <option value="Awaiting Client">Awaiting Client</option>
          <option value="Ready to Draft">Ready to Draft</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-50 dark:bg-gray-800">
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id} className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                {headerGroup.headers.map(header => (
                  <th key={header.id} className="px-6 py-3 cursor-pointer" onClick={header.column.getToggleSortingHandler()}>
                    {flexRender(header.column.columnDef.header, header.getContext())}
                    {{
                      asc: ' 🔼',
                      desc: ' 🔽',
                    }[header.column.getIsSorted()] ?? null}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {table.getRowModel().rows.map(row => (
              <tr key={row.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer" onClick={() => handleRowClick(row)}>
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id} className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ClientsPage;
