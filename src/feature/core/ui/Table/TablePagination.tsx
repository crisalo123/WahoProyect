import { memo } from 'react'
import { BsCaretLeftFill, BsCaretRightFill } from 'react-icons/bs'

interface PageButton {
  id: number | string
  isCurrent: boolean
  label: string | number
  page?: number
}
export interface TablePaginationProps {
  isFetching: boolean
  pageIndex: number
  pageSize: number
  pageCount: number
  count: number
  goToPage: (page: number) => void
}
export const TablePagination = memo(
  ({ isFetching, pageIndex, pageSize, pageCount, count, goToPage }: TablePaginationProps) => {
    const firstRecordShow = (pageIndex - 1) * pageSize + 1
    const lastRecordShow = Math.min(pageIndex * pageSize, count)
    const isFirstPage = pageIndex === 1
    const isLastPage = pageIndex === pageCount

    const handleNextPage = (): void => goToPage(pageIndex + 1)
    const handlePreviousPage = (): void => goToPage(pageIndex - 1)

    return (
      <div className='flex flex-col-reverse justify-between items-center gap-3 mt-2 lg:flex-row'>
        <span className='text-gray-400'>
           {firstRecordShow} - {lastRecordShow} de {count} registros
        </span>
        <div className='flex gap-2 font-semibold'>
          <button
            aria-label='Página anterior'
            className={` bg-[#CCE6E3] text-[#166D6B] rounded-lg py-2 px-3 hover:bg-secondary hover:text-white ${
              isFirstPage || isFetching ? 'opacity-50' : ''
            }`}
            disabled={isFirstPage || isFetching}
            onClick={handlePreviousPage}
          >
            <BsCaretLeftFill />
          </button>
          {generatePageButtons({ pageIndex, pageCount }).map(({ id, page, isCurrent, label }) => {
            const ariaLabel = page ? `Ir a la página ${page}` : 'Otras páginas'
            return (
              <button
                aria-label={ariaLabel}
                className={` rounded-lg w-12 h-10 ${
                  isCurrent
                    ? 'bg-[#166D6B] text-white'
                    : 'bg-[#F5F5F5] text-[#166D6B] hover:bg-secondary hover:text-white'
                }`}
                disabled={isCurrent || isFetching || !page}
                key={id}
                onClick={page ? () => goToPage(page) : undefined} // Ajustar la página al índice correcto
              >
                {label}
              </button>
            )
          })}
          <button
            aria-label='Siguiente página'
            className={` bg-[#CCE6E3] text-[#166D6B] rounded-lg py-2 px-3 hover:bg-secondary hover:text-white ${
              isLastPage || isFetching ? 'opacity-50' : ''
            }`}
            disabled={isLastPage || isFetching}
            onClick={handleNextPage}
          >
            <BsCaretRightFill />
          </button>
        </div>
      </div>
    )
  }
)

TablePagination.displayName = 'TablePagination'

const MAX_PAGE_BUTTONS = 6
const BUTTONS_PER_SIDE = 3
const generatePageButtons = ({
  pageCount,
  pageIndex
}: Pick<TablePaginationProps, 'pageCount' | 'pageIndex'>): PageButton[] => {
  const isOverMaxPageButtons = pageCount > MAX_PAGE_BUTTONS

  if (!isOverMaxPageButtons)
    return Array.from({ length: pageCount }, (_, i) => ({
      id: i + 1,
      isCurrent: i + 1 === pageIndex,
      page: i + 1,
      label: i + 1
    }))

  const pageButtons: PageButton[] = []
  const isInFirstPages = pageIndex <= BUTTONS_PER_SIDE - 1
  const isInLastPages = pageIndex >= pageCount + 2 - BUTTONS_PER_SIDE

  if (isInFirstPages) {
    pageButtons.push(
      ...Array.from({ length: BUTTONS_PER_SIDE }, (_, i) => ({
        id: i + 1,
        isCurrent: i + 1 === pageIndex,
        page: i + 1,
        label: i + 1
      }))
    )
    pageButtons.push({ id: 'next-pages', isCurrent: false, label: '...' })
    pageButtons.push({ id: pageCount, isCurrent: false, page: pageCount, label: pageCount })

    return pageButtons
  }

  if (isInLastPages) {
    pageButtons.push({ id: 1, isCurrent: false, page: 1, label: 1 })
    pageButtons.push({ id: 'previous-pages', isCurrent: false, label: '...' })
    pageButtons.push(
      ...Array.from({ length: BUTTONS_PER_SIDE }, (_, i) => ({
        id: pageCount - i,
        isCurrent: pageCount - i === pageIndex,
        page: pageCount - i,
        label: pageCount - i
      })).reverse()
    )

    return pageButtons
  }

  pageButtons.push({ id: 1, isCurrent: false, page: 1, label: 1 })
  pageButtons.push({ id: 'previous-pages', isCurrent: false, label: '...' })
  pageButtons.push({
    id: pageIndex - 1,
    isCurrent: false,
    page: pageIndex - 1,
    label: pageIndex - 1
  })
  pageButtons.push({ id: pageIndex, isCurrent: true, page: pageCount, label: pageIndex })
  pageButtons.push({
    id: pageIndex + 1,
    isCurrent: false,
    page: pageIndex + 1,
    label: pageIndex + 1
  })
  pageButtons.push({ id: 'next-pages', isCurrent: false, label: '...' })
  pageButtons.push({ id: pageCount, isCurrent: false, page: pageCount, label: pageCount })

  return pageButtons
}
