import { useState } from 'react';
import Nav from './Nav';
import { Menu, X } from 'lucide-react';

export default function Header(){
    const [navOpen, setNavOpen] = useState(false);
    return(
        <header className='flex justify-between items-center p-4'>
            <div className='flex items-center gap-3 relative'>
                <div onClick={() => setNavOpen(!navOpen)}>
                    {
                        navOpen ? <X className='md:hidden' /> : <Menu className='md:hidden' />
                    }
                </div>
                <h1 className='text-2xl'>Nayems Canvas</h1>
                <Nav classNames={`space-y-2 absolute bg-gray-500 p-3 w-[200px] top-10 text-white transition-all duration-500 ${navOpen ? 'left-0' : '-left-60'}`} />
            </div>
            <Nav classNames='md:flex gap-3 hidden' />
            <button className='btn btn-primary btn-outline'>Say Hey</button>
        </header>
    );
}