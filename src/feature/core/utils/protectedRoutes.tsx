import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

import { useAuth } from '@/features/auth/store/AuthContext'

type ProtectedRouteProps = {
  children: React.ReactNode
  allowedRoleIds: Array<string>
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, allowedRoleIds }) => {
  const { user } = useAuth()
  const location = useLocation()

  const Permission = user.roleId ? allowedRoleIds.includes(user.roleId) : false

    if (!user.isAuthenticated || !Permission) {
        console.log('ud no tiene acceso')
        return <Navigate replace state={{from: location}} to="/home" />;
    } else {
        return <>{children}</>;
    }
};

export default ProtectedRoute
