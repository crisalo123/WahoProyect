import { CustomRouteObject } from '../core/types/routes'
import { lazyImport } from '../core/utils/lazyImport'







const { HomePage } = lazyImport(() => import('@/feature/pages/homePage'), 'HomePage')
const { CardComponentPage } = lazyImport(() => import('@/feature/pages/cardComponentPage'), 'CardComponentPage')

const { ListPage } = lazyImport(() => import('@/feature/pages/listPage'), 'ListPage')
const { NotFoundPage } = lazyImport(() => import('@/feature/pages/notFoundPage'), 'NotFoundPage')
const { CreatePage } = lazyImport(() => import('@/feature/pages/createPage'), 'CreatePage')


// const objectPermitions: { [key: string]: string } = {
//   jefe: '5AD484B6-C1FD-4613-9EC0-1D5C3FF4AF4D',
//   coordinador: '838E3DA7-2A11-4FCA-A238-88FBD3528917',
//   asistente_garantias: '97F2168A-E1A8-4454-AA13-0EF21567F83E',
//   asistente_desembolso: 'FDBB3B88-44F4-49E6-AD44-130BE4E79A6D'
// }

const adminRoutes: CustomRouteObject[] = [
  {
    name: '',
    path: '/home',
    element: <HomePage />
  },
  {
    name: '',
    path: '/home/:module',
    element: <CardComponentPage />
  },

  {
    name: '',
    path: '/home/:module/listarPage',
    element: <ListPage />
  },

  {
    name: '',
    path: '/home/:module/crearPage',
    element: <CreatePage />
  },
 
  {
    name: '',
    path: '/home/:module/actualizarPage',
    element: <CreatePage />
  },


  {
    name: '',
    path: '*',
    element: <NotFoundPage />
  },

 
]


export default adminRoutes
