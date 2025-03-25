import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable
} from '@tanstack/react-table'
import { listTable } from '../../types/tableHeader'
import { Table } from '../../ui/Table'
import { dataBox } from './datamock'
import { GrUpdate } from "react-icons/gr";
import { MdDeleteOutline } from "react-icons/md";
import { LuInfo } from "react-icons/lu";
import Tooltip from '../../ui/Tooltip/Tooltip';
import { ModalActions } from '../modal';
import {  useMemo, useState } from 'react';

export interface LisComponent {
  searchParams: {
    id: string | number;
} | undefined

}


export const ListComponent:React.FC<LisComponent> = ({searchParams}) => {

 const [showModal, setShowModal] = useState(false)

  const columnHelper = createColumnHelper<listTable>()
   
  
  const filteredData = useMemo(() => {
    console.log("searchParams.id:", searchParams?.id);
    return searchParams?.id ? dataBox.filter((item) => item.id === searchParams.id) : dataBox;
  }, [searchParams]);
 
  

  const columns = useMemo(() => [
    columnHelper.accessor('id', {
      header: () => <div className='md:!w-32 font-normal text-end  bg-slate-500'>
        <span className='absolute  -mx-2  md:top-3   md:-mx-3 2xl:mx-10'>id</span>
      </div>
    }),

    columnHelper.accessor('puntaje', {
      header: () => <div className=' font-normal text-center'>Puntaje Calificación</div>
    }),

    columnHelper.accessor('parametro', {
      header: () => <div className=' font-normal text-center '>Parámetro Evaluación</div>
    }),
    columnHelper.accessor('criterio', {
      header: () => <div className=' font-normal'>Criterio Evaluación </div>
    }),
    columnHelper.accessor('acciones', {
      header: () => <div className=' md:w-40 font-normal'>Acciones</div>,
      cell: ({ row }) => (
        
         <div className='flex justify-center space-x-4'>
          <Tooltip text='Informacion'> 
           <LuInfo onClick={() => setShowModal(true)} className='w-5 h-5 cursor-pointer text-[#a20f5c] ' />
           </Tooltip>
           <Tooltip text='Actualizar'> 
           <GrUpdate  className='w-5 h-5 cursor-pointer text-[#a20f5c] '/>
            </Tooltip>
             <Tooltip text='Eliminar '> 
            <MdDeleteOutline className='w-5 h-5 cursor-pointer text-[#a20f5c] ' />
            </Tooltip>
           
         </div>
      )
    }),
  
  ],  [columnHelper ] )
  const table = useReactTable({
    columns,
    data: filteredData,
    getCoreRowModel: getCoreRowModel()
  })


  return (
    <>
      <section >
        <>
          <Table className="table-previous md:w-full md:table-fixed">
            {table.getHeaderGroups().map((headerGrup) => (
              <Table.Row
                className='bg-primary-50 rounded-lg overflow-hidden text-sm  '
                key={headerGrup.id}
                style={{ borderInline: '10px', height: '0px' }}
              >
                {headerGrup.headers.map((header, index) => (
                  <Table.HeaderCell
                    className={index === headerGrup.headers.length - 0 ? '!bg-[#2c4bea]  mx-2' : ''}
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
                  {row.getVisibleCells().map((cell, index) => (
                    <Table.Cell
                      className={
                        index === row.getVisibleCells().length - 1 ? '!bg-white' : '!bg-white'
                      }
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
        </>
      </section>
     
      <ModalActions 
      
      title='Información'
      icon={<LuInfo className='h-10 w-10 text-primary' />}
      onSucces={() => setShowModal(false)}
       showModal={showModal} />
    </>
  )
}

