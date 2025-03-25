import { Navbar } from "../../ui/navbar"
import { Wrapper } from "../../ui/wrapper"


export const Header: React.FC = () => {

  //  clase para dar un border oscuro shadow-coolGray-800
  return (
    <header className=' sticky  bg-[#ec1c24]   md:text-black md:bg-white top-0 shadow z-[49] bg-primaryBackground'>
      <Wrapper >
        <Navbar />
      </Wrapper>
    </header>
  )
}
