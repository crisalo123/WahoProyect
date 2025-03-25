import { IoNotifications, IoPerson } from 'react-icons/io5'
import { FaCircle, FaPhoneAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { Card, CardContent } from './card'
import {
  BreadCrumbs,
  RouteProps,
  cn,
  matchRoute,
  useAuth,
  CurrentTime,
  useCallStore
} from '@/modules'
import { useLocation } from 'react-router-dom'

export interface SpecificAgentProps {
  fullName: string
  role: string
  ext: string
  email: string
}
export interface HeaderProps {
  subHeader?: boolean
  specificAgent?: SpecificAgentProps
  valueStatusAgent?: number
}

export function Header({
  subHeader = false,
  specificAgent,
  valueStatusAgent
}: Readonly<HeaderProps>) {
  const { user } = useAuth()
  const location = useLocation()

  const storedRoutes = localStorage.getItem('roleRoutes')
  const { notificationsData } = useCallStore()

  const accessibleRoutes = storedRoutes ? JSON.parse(storedRoutes) : []
  const selectedRoute = accessibleRoutes.find((route: RouteProps) =>
    matchRoute(route.path ?? '', decodeURIComponent(location.pathname))
  )

  return (
    <div
      className={cn(
        'sticky top-0 z-40 flex w-full flex-col items-center',
        subHeader && 'h-48 max-h-48 min-h-48'
      )}
    >
      <Card
        className={cn(
          'flex h-[76px] w-full items-center rounded-2xl bg-primary px-5 py-3',
          subHeader && 'h-[156px] items-start'
        )}
      >
        <CardContent className='flex w-full items-center justify-between p-0'>
          <div className='w-full'>
            <div className=' h-auto w-auto'>
              <BreadCrumbs />
            </div>
            <h1 className='text-xl font-bold text-quaternary'>
              {selectedRoute?.name ?? 'Inicio'}
            </h1>
          </div>
          <div className='flex items-center '>
            <div className='flex h-9 w-[134px] items-center justify-center gap-2 rounded-[10px] bg-tertiary-100 text-[10px] text-tertiary-500'>
              <FaCircle />
              <span>Disponible</span>
            </div>
            <span className='flex items-center'>
              <IoNotifications className='mx-4 text-xl text-[#FF9302]' />
              {notificationsData?.length > 0 && (
                <FaCircle className='absolute right-48 top-6 text-xs text-tertiary-600' />
              )}
              <CurrentTime />
            </span>
          </div>
        </CardContent>
      </Card>

      {subHeader && (
        <Card className='absolute mt-[75px] h-[113px] w-[97%] rounded-2xl bg-white/75 backdrop-blur-md'>
          <CardContent className='flex h-full items-center justify-between p-0 px-5'>
            <div className='flex gap-5 '>
              <div className='relative flex h-[85px] w-[85px] items-center justify-center rounded-[20px] bg-primary-50'>
                <IoPerson className='text-5xl text-[#0020A8]' />
                <FaCircle
                  className={`absolute bottom-0 right-0 
                  ${
                    valueStatusAgent === 1
                      ? 'text-tertiary-600'
                      : valueStatusAgent === 2
                        ? 'text-red-600'
                        : valueStatusAgent === 3
                          ? 'text-[#F5A524] '
                          : valueStatusAgent === 4
                            ? 'text-red-600'
                            : 'text-tertiary-600'
                  } `}
                />
              </div>
              <div className='flex flex-col justify-center gap-2'>
                <h1 className='text-3xl font-medium capitalize text-quaternary-900'>
                  {specificAgent?.fullName ?? user?.fullName}
                </h1>
                <span className='flex h-6 w-[120px] items-center justify-center rounded-[4px] bg-primary-400 text-xs font-semibold uppercase text-primary'>
                  {specificAgent?.role ?? user?.role}
                </span>
              </div>
            </div>
            <div className='flex flex-col items-start gap-1 md:space-y-1 xl:flex-row xl:items-center xl:gap-6'>
              <div className='flex gap-2'>
                <FaPhoneAlt className='ml-6 h-[48px] w-[48px] rounded-2xl bg-primary-400 p-3 text-primary-700' />
                <div className='flex flex-col gap-1'>
                  <h1 className='text-xs font-bold text-quaternary-600 opacity-40'>
                    Extensión
                  </h1>
                  <h1 className='text-lg text-quaternary-900'>
                    {specificAgent ? specificAgent.ext ?? '' : user?.ext}
                  </h1>
                </div>
              </div>
              <div className='flex gap-2'>
                <MdEmail className='ml-6 h-[48px] w-[48px] rounded-2xl bg-primary-400 p-3 text-primary-700' />
                <div className='flex flex-col gap-1'>
                  <h1 className='text-xs font-bold text-quaternary-600 opacity-40'>
                    Correo electrónico
                  </h1>
                  <h1 className='text-lg text-quaternary-900'>
                    {specificAgent?.email ?? user?.email}
                  </h1>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
