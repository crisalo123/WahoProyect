import { useRoutes } from 'react-router-dom'

import authRoutes from '@/feature/auth/routes'

import adminRoutes from './feature/user/routes'
import { useAuthStore } from './feature/contex/AuthContext';



export const AppRoutes: React.FC = () => {
  const { isAuthenticated} = useAuthStore();
  
  console.log(isAuthenticated)
 

  const roleRoutes = isAuthenticated ? [...authRoutes, ...adminRoutes] : authRoutes

  const routes = useRoutes(roleRoutes)
  return <>{routes}</>
}
