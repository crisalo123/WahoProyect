import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  Button
} from "@/feature/core/ui"
import { IoIosMenu } from "react-icons/io"; // Asegúrate de importar correctamente
import { arrayModules } from "../const/modules";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";




export default function DropList() {

  const navigate = useNavigate();



  const handleNavigate = (module: string) => {
    navigate(`/home/${module}`);
  }

  const [openMenu, setOpenMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);


  const handleOpenMenu = () => {
    setOpenMenu(!openMenu)
  }
 



     useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth < 768);
        };
    
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);

  

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="px-4 py-2 bg-primary-700 text-white rounded md:text-lg w-33 ">
        <IoIosMenu className="  font-medium   "  size={130} />  {!isMobile ? 'Menu' : ''}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-72 max-h-screen h-full overflow-y-auto pb-3">
        {arrayModules.map((module) => (
          <DropdownMenuItem className="hover:!bg-primary-100 hover:!text-white cursor-pointer " key={module.id} onClick={() => handleNavigate(module.name)}>
             { `Modulo de ${module.name}  `}
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
