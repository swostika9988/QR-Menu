import React from 'react'
import Logo from '../assets/logo.png'
import { Bars3Icon} from '@heroicons/react/24/solid'

const Header = () => {
    let Links =[
        {name: 'Home', link: '/'},
        {name: 'QR Menu', link: '/'},
        {name: 'Subscription Plans', link: '/'},
        {name: 'Updates', link: '/'},
        {name: 'Demo Video', link: '/'},
    ]
  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
        <div className='sm:px-12 py-0 px-10 md:flex justify-between items-center bg-white '>
        <div className='cursor-pointer items-center'>
        
  <img src={Logo} alt="Logo" className='w-45 h-20 text-blue'/>
</div>
<div className='w-7 h-7 absoluteright-8 top-6 cursor-pointer md:hidden'>
    <div className='w-7 h-7 absolute right-8 top-6 cursor-pointer'>
        <Bars3Icon className='btn bg-red-700 text-white rounded'/>
        
   
    </div>

</div>
<ul className='md:flex pl-9 md:pl-0'>
    {
        Links.map(link =>(
        <li className='font-semibold my-7 md:my-0 md:ml-6'>
            <a href='/'>{link.name}</a>
        </li>))
    }
    <button className='btn bg-red-600 hover:bg-blue-900 text-white py-1 px-3 md:ml-8 rounded md:static'>Register</button>
    <button className='btn border border-red-600 hover:bg-blue-900 bg-white text-red-600 py-1 px-3 md:ml-8 rounded md:static'>
    Login
</button>
</ul>
        </div>
    </div>
  )
}

export default Header