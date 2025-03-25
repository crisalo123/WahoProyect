export * from './input'
export * from './navbar'
export * from './login'


export interface RouteObject {
  path: string
  element: JSX.Element
  name?: string
  // Agrega más propiedades según sea necesario
}
