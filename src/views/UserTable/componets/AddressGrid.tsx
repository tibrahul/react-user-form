// import { useRef } from "react";
// import DataGrid, { Column, DataGridHandle } from "react-data-grid";
// import { TAddress } from "../../../@types/user";

// const productColumns: readonly Column<TAddress>[] = [
//   { key: 'streetAddress', name: 'Street Address' },
//   { key: 'city', name: 'City' },
//   { key: 'state', name: 'State' },
//   { key: 'postalCode', name: 'Postal Code' },
//   { key: 'country', name: 'Country' }
// ];

// const AddressGrid = ({ address }: { address: TAddress[] }) => {
//   const gridRef = useRef<DataGridHandle>(null);

//   return (
//     <DataGrid
//       ref={gridRef}
//       rows={address}
//       rowKeyGetter={row => Math.random().toString()}
//       columns={productColumns}
//     />
//   );
// }

// export default AddressGrid;


import React from 'react'
import { TAddress } from '../../../@types/user'
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';

const columnHelper = createColumnHelper<TAddress>();

const AddressGrid = ({ address }: { address: TAddress[] }) => {
  const columns = [
    columnHelper.accessor('streetAddress', {
      header: () => 'Street Address',
      footer: info => info.column.id,
    }),
    columnHelper.accessor('city', {
      header: () => 'City',
      footer: info => info.column.id,
    }),
    columnHelper.accessor('state', {
      header: () => 'State',
      footer: info => info.column.id,
    }),
    columnHelper.accessor('postalCode', {
      header: 'Postal Code',
      footer: info => info.column.id,
    }),
    columnHelper.accessor('country', {
      header: 'Country',
      footer: info => info.column.id,
    }),
  ]

  const table = useReactTable({
    data: address,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })
  return (
    <table>
      <thead>
        {table.getHeaderGroups().map(headerGroup => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map(header => (
              <th key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map(row => {
          console.log(row)
          return (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => {
                return (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default AddressGrid