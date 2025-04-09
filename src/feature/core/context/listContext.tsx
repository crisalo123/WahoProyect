import { createContext, useContext, useState } from "react";

// primero defino los tipos de datos que voy a usar en el contexto
type ListContextType = {
    cachedData: Record<string, any>;
    setCachedData: React.Dispatch<React.SetStateAction<Record<string, any>>>;
  };

// luego creo el contexto
const ListContext = createContext<ListContextType | undefined>(undefined);

// luego creo el provider
export const ListProvider = ({children}: {children: React.ReactNode}) => {
    const [cachedData, setCachedData] = useState<Record<string, any>>({})

    return (
         <ListContext.Provider value={{cachedData, setCachedData}}>
            {children}
         </ListContext.Provider>
    )
  
}


export const useListContext = () => {
   const context = useContext(ListContext);
   if (!context) {
    throw new Error("useListContext debe usarse dentro de un ListProvider");
  }
  return context;

}