export interface TableHeaderCellProps
  extends React.DetailedHTMLProps<
    React.ThHTMLAttributes<HTMLTableCellElement>,
    HTMLTableCellElement
  > {}

export const TableHeaderCell: React.FC<TableHeaderCellProps> = ({ children, ...restOfProps }) => {
  return (
    <th {...restOfProps} className={`px-2 py-1  ${restOfProps.className}`}>
      {children}
    </th>
  )
}
