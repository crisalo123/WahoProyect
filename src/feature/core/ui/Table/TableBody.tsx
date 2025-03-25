export interface TableBodyProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLTableSectionElement>,
    HTMLTableSectionElement
  > {
  isLoadingData?: boolean
}

export const TableBody: React.FC<TableBodyProps> = ({
  children,
  // isLoadingData = false,
  ...restOfProps
}) => {
  return (
    <tbody {...restOfProps} className={`${restOfProps.className}`}>
      {children}
    </tbody>
  )
}
