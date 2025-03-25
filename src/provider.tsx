import React from 'react';
import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom';

import { Spinner } from './feature/core';
import { AuthProvider } from './feature/contex/AuthContext';

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
  <AuthProvider> 
  <BrowserRouter>
  <Suspense fallback={<Spinner className='fixed inset-0 flex items-center justify-center text-red-300' />}>{children}</Suspense></BrowserRouter>
  </AuthProvider>

  )
};
