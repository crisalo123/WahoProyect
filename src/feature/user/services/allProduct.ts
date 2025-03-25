import useSWR  from 'swr'

const fetcher = (url: string) => fetch(url).then((res) => res.json());
export function useGetProductAll() {
  const { data, error, isLoading, mutate } = useSWR(
    'https://fakestoreapi.com/products',
    fetcher)


  return {
    data,
    error,
    isLoading,
    mutate
  }
}


export function useGetProductAllDetaill(
 id:number
) {
  const { data, error, isLoading, mutate } = useSWR(
    `https://fakestoreapi.com/products/${id}`,
    fetcher)


  return {
    data,
    error,
    isLoading,
    mutate
  }
}