import { NavLink } from 'react-router';

function Nav(){
    return(
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/mobiles'>Mobile</NavLink>
            <NavLink to='/laptops'>Laptops</NavLink>
            <NavLink to='/desktops'>Desktops</NavLink>
            <NavLink to='/users'>Users</NavLink>
        </nav>
    );
}

export {Nav};