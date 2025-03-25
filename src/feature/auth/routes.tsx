import { Navigate } from 'react-router-dom'

import type { RouteObject as BaseRouteObject } from '@/feature/core/types'
import { lazyImport } from '@/feature/core/utils/lazyImport'


const { LoginPage } = lazyImport(() => import('@/feature/pages/loginPage'), 'LoginPage')
const { ForgotPassword } = lazyImport(() => import('@/feature/auth/login/forgot-password'), 'ForgotPassword')
const { RegisterUser } = lazyImport(() => import('@/feature/auth/login/register-user'), 'RegisterUser')

type RouteObject = BaseRouteObject & {
  name?: string
}

export const authRoutes: RouteObject[] = [
  {
    name: '',
    path: '/',
    element: <LoginPage />
  },

  {
    name: '',
    path: '/ForgotPassword',
    element: <ForgotPassword />
  },

  {
    name: '',
    path: '/RegisterUser',
    element: <RegisterUser />
  },

  {
    name: '',
    path: '*',
    element: <Navigate replace to='/' />
  }
]

export default authRoutes
