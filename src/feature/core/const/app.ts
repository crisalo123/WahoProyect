export const session = {
    idleTime: 10 * 60 * 1000,
    autoRefresh: 10 * 60 * 1000
  } as const


  export const SERVER_BASE_URL = import.meta.env.VITE_BASE_SERVER_URL as string
  export const API_BASE_URL = `${SERVER_BASE_URL}/api/v1`

  export const PUBLIC_URL = import.meta.env.VITE_PUBLIC_URL as string