import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { HiOutlineMenu} from 'react-icons/hi'
import { RiCloseLine } from 'react-icons/ri'

import { logo } from '../assets'
import { links } from '../assets/constants'

const NavLinks = ({ handleClick}) => (
  <div className='mt-10'>
    {links.map((link) => (
      <NavLink 
      key={link.name}
      to={link.to}
      className="flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-[#e0aaff]"
      onClick={() => handleClick && handleClick()}>
        <link.icon className="w-6 h-6 mr-2"/>
        {link.name}
      </NavLink>
    ))}
  </div>
)

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <div className='md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#10002b]'>
        <h1 className='font-bold text-4xl text-[#9d4edd] text-left drop-shadow-2xl-4xl-white'>Moopsify</h1>
        <NavLinks />
      </div>
      <div className='absolute md:hidden block top-6 right-3'> 
        {mobileMenuOpen ? (
          <RiCloseLine className='w-6 h-6 text-white mr-2' onClick={() => setMobileMenuOpen(false)}/>
        ): <HiOutlineMenu className='w-6 h-6 text-white mr-2' onClick={() => setMobileMenuOpen(true)}/>}
      </div>
      <div className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#3c096c] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${mobileMenuOpen ? 'left-0' : '-left-full'}`}>
      <h1 className='font-bold text-4xl text-purple-700 text-left drop-shadow-lg'>Moopsify</h1>
        <NavLinks handleClick={() => setMobileMenuOpen(false)}/>
      </div>
    </>
  )
};

export default Sidebar;
