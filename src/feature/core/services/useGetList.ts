
import { getList } from "./createDocumentService"
import { arrayModules } from "../const/modules"
import { useEffect, useState } from "react"


type Props = {
  moduleRour: string
  searchId?: number | string

}


export const useGetList = <T>({ moduleRour ,searchId }: Props) => { 
    const [dataList, setDataList] = useState<T[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const newUrlGet = arrayModules.find(module => module.name === moduleRour)
    const paramFilter = newUrlGet?.pathGet
    const paramsFilterSpl = ('Id' + paramFilter?.split('/')[0]) 


    const getData = async () => {
        setIsLoading(true)
       try {  
        const filterParams: Record<string, string | number> = {};
        if (searchId) {
          filterParams[paramsFilterSpl] = searchId;
        }
        const resp = await getList<T>(filterParams as unknown as T, newUrlGet?.pathGet as string);
       setDataList(resp);
        setDataList(resp)
       } catch (error) {
        
       } finally{
        setIsLoading(false)
       }
    }

    useEffect(() => {
        getData()
    }, [newUrlGet?.pathGet, searchId])
    

  return {
    dataList,
    isLoading 
  }

}