import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { TUser } from '../../../@types/user'
import AddressGrid from './AddressGrid'

const columnHelper = createColumnHelper<TUser>();

const UserGrid: React.FC<{
  user: TUser[]
}> = ({
  user
}) => {
    const columns = [
      columnHelper.accessor('firstName', {
        cell: info => info.getValue(),
        footer: info => info.column.id,
      }),
      columnHelper.accessor(row => row.lastName, {
        id: 'lastName',
        cell: info => <i>{info.getValue()}</i>,
        header: () => <span>Last Name</span>,
        footer: info => info.column.id,
      }),
      columnHelper.accessor('email', {
        header: () => 'Email',
        cell: info => info.renderValue(),
        footer: info => info.column.id,
      }),
      columnHelper.accessor('phoneNumber', {
        header: () => <span>Phone Number</span>,
        footer: info => info.column.id,
      }),
      columnHelper.accessor('gender', {
        header: 'Gender',
        footer: info => info.column.id,
      }),
      columnHelper.accessor('address', {
        header: 'Address',
        cell: info => <AddressGrid address={info.getValue()} />,
        footer: info => info.column.id,
      }),
    ]

    const table = useReactTable({
      data: user,
      columns,
      getCoreRowModel: getCoreRowModel(),
    })

    return (
      <div>
        <table>
          <thead>
            {table.getHeaderGroups().map(headerGroup => {
              return (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map(header => {
                    return (
                      <th key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                      </th>
                    )
                  })}
                </tr>
              )
            })}
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
      </div>
    )
  }

export default UserGrid