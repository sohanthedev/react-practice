import React, { useState } from 'react';
import LInk from './Link/LInk';
import { Bars3Icon ,XMarkIcon} from '@heroicons/react/24/solid'

const NaveBer = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        {id:1, name: 'Home', path: './home'},
        {id:2, name: 'Products', path: './products'},
        {id:3, name: 'Order', path: './order'},
        {id:4, name: 'About', path: './about'}
    ]
    return (
        <nav className='w-full'>
            <div onClick={() => setOpen(!open)} className="h-6 w-6 md:hidden" >
                {
                    open ? <XMarkIcon /> : <Bars3Icon />
                }
          </div>

            <ul className={`md:flex justify-center w-full md:static absolute duration-500 ease-in ${open ? 'top-6' : 'top-[-120px]'}`}>
                {
                    routes.map(route=> <LInk key={route.id} route={route}></LInk>)
                }
            </ul>
        </nav>
    );
};

export default NaveBer;