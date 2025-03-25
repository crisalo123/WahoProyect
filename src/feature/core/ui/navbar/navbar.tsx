

import DropList from '../dropList'

export const Navbar: React.FC = () => {
  // const { logout, user } = useAuth()

  return (
    <nav className=' w-auto absolute top-5 left-4 '>
      <div className='col-span-1  '>
          <DropList />
          </div> 
    </nav>
  )
}
