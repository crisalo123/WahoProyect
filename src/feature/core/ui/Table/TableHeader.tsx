export interface TableHeaderProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLTableSectionElement>,
    HTMLTableSectionElement
  > {}

export const TableHeader: React.FC<TableHeaderProps> = ({ children, ...restOfProps }) => {
  return (
    <thead {...restOfProps} className={`bg-secondary-300   ${restOfProps.className}`}>
      {children}
    </thead>
  )
}
