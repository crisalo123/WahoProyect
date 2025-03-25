export interface TableCellProps
  extends React.DetailedHTMLProps<
    React.ThHTMLAttributes<HTMLTableCellElement>,
    HTMLTableCellElement
  > {}

export const TableCell: React.FC<TableCellProps> = ({ children, ...restOfProps }) => {
  return (
    <th {...restOfProps} className={`font-normal p-2 bg-primary ${restOfProps.className}`}>
      {children}
    </th>
  )
}
