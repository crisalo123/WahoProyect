import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable
} from '@tanstack/react-table'

import { Table } from '../../ui/Table'

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
      cell: ({ getValue }) => <div className="text-center whitespace-nowrap">{String(getValue())}</div>,
    }),
    ...keys
      .filter((key) => !["id","usuarioId", "estado", "usuarioAdd", "usuarioUp", "fechaAdd", "fechaUp"].includes(String(key)))
      .map((key) =>
        columnHelper.accessor(key as any, {
          header: () => {
            const headerText = String(key);
            const truncatedHeader = headerText.length > 10 ? headerText.substring(0, 13) + "..." : headerText;
            return <div className="font-normal text-center capitalize whitespace-nowrap">{truncatedHeader}</div>;
          },
          cell: ({ getValue }) => {
            const value = getValue();
            const formattedValue =
              typeof value === "string" && value.includes("T")
                ? dayjs(value).format("DD-MM-YYYY")
                : String(value);

            return <div className="text-center truncate  overflow-hidden">{formattedValue}</div>;
          },
        })
      ),
    columnHelper.display({
      id: 'acciones',
      header: () => <div className="md:w-40 font-normal">Acciones</div>,
      cell: ({ row }) => (
        <div className="flex justify-center space-x-4">
          <Tooltip text="Información">
            <LuInfo onClick={() => setShowModal(true)} className="w-5 h-5 cursor-pointer text-[#a20f5c]" />
          </Tooltip>
          <Tooltip text="Actualizar">
            <GrUpdate className="w-5 h-5 cursor-pointer text-[#a20f5c]" />
          </Tooltip>
          <Tooltip text="Eliminar">
            <MdDeleteOutline className="w-5 h-5 cursor-pointer text-[#a20f5c]" />
          </Tooltip>
        </div>
      ),
    }),
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
                    <span > {flexRender(cell.column.columnDef.cell, cell.getContext())}</span>
                  </Table.Cell>
                ))}
              </Table.Row>
            ))}
            {dataList.length === 0 && (
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

