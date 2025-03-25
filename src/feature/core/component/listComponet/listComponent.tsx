import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable
} from '@tanstack/react-table'

import { Table } from '../../ui/Table'
import { dataBox } from './datamock'
import { GrUpdate } from "react-icons/gr";
import { MdDeleteOutline } from "react-icons/md";
import { LuInfo } from "react-icons/lu";
import Tooltip from '../../ui/Tooltip/Tooltip';
import { ModalActions } from '../modal';
import {  useMemo, useState } from 'react';
import dayjs from "dayjs";



export interface ListComponentProps<T> {
dataList: T[];
}


export const ListComponent = <T,>({ dataList }: ListComponentProps<T>) => {

 const [showModal, setShowModal] = useState(false)
 const columnHelper = createColumnHelper<T>()
   
  


 const columns = useMemo(() => {
  if (dataList.length === 0) return [];

  const keys = Object.keys(dataList[0] ?? {}) as (keyof T)[];

  return [
    columnHelper.accessor("id" as any, {
      header: () => <div className="font-normal text-center whitespace-nowrap">Id</div>,
      cell: ({ getValue }) => <div className="text-center  whitespace-nowrap">{String(getValue())}</div>,
    }),
    ...keys
      .filter((key) => key !== "id")
      .map((key) =>
        columnHelper.accessor(key as any, {
          header: () => <div className="font-normal text-center capitalize">{String(key)}</div>,
          cell: ({ getValue }) => {
            const value = getValue();
            // Verifica si el valor es una fecha y la formatea
            const formattedValue =
              typeof value === "string" && value.includes("T")
                ? dayjs(value).format("DD-MM-YYYY")
                : String(value);

            return <div className="text-center">{formattedValue}</div>;
          },
        })
      ),
  ];
}, [dataList]);

  const table = useReactTable({
    columns,
    data: dataList,
    getCoreRowModel: getCoreRowModel()
  })


  return (
    <>
      <section >
        <Table className="table-previous md:w-full md:table-fixed">
          {table.getHeaderGroups().map((headerGrup) => (
            <Table.Row
              className='bg-primary-50 rounded-lg overflow-hidden text-sm'
              key={headerGrup.id}
              style={{ borderInline: '10px', height: '0px' }}
            >
              {headerGrup.headers.map((header, index) => (
                <Table.HeaderCell
                  className={index === headerGrup.headers.length - 1 ? ' mx-2' : ''}
                  key={header.id}
                  style={{ borderInline: '10px', height: '0px' }}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </Table.HeaderCell>
              ))}
            </Table.Row>
          ))}
        
          <Table.Body className='bg-white'>
            {table.getRowModel().rows.map((row) => (
              <Table.Row className='!bg-white text-sm' key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <Table.Cell
                    className='!bg-white'
                    key={cell.id}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Table.Cell>
                ))}
              </Table.Row>
            ))}
            {dataBox.length === 0 && (
              <Table.Row style={{ borderInline: '10px', height: '10px' }}>
                <Table.Cell
                  className='italic text-center text-gray-600 font-extrabold !bg-white text-sm'
                  colSpan={100}
                >
                  Sin registros.
                </Table.Cell>
              </Table.Row>
            )}
          </Table.Body>
        </Table>
      </section>
     
      <ModalActions 
      
      title='Información'
      icon={<LuInfo className='h-10 w-10 text-primary' />}
      onSucces={() => setShowModal(false)}
       showModal={showModal} />
    </>
  )
}

