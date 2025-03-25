
import { getList } from "./createDocumentService"
import { arrayModules } from "../const/modules"
import { useEffect, useState } from "react"


type Props = {
  moduleRour: string

}


export const useGetList = ({ moduleRour }: Props) => { 
    const [dataList, setDataList] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const newUrlGet = arrayModules.find(module => module.name === moduleRour)

    const getData = async () => {
        setIsLoading(true)
       try { 

        const resp  = await getList({},
        newUrlGet?.pathGet as string
    ) 
        setDataList(resp)
       } catch (error) {
        
       } finally{
        setIsLoading(false)
       }

    }

    useEffect(() => {
        getData()
    }, [newUrlGet?.pathGet])
    



  return {
    dataList,
    isLoading
        

  }

}