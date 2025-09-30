const navLinks = [
    {id: 0, name: 'home', link: '/'},
    {id: 1, name: 'about', link: '/about'},
    {id: 2, name: 'contact', link: '/contact'},
    {id: 3, name: 'projects', link: '/projects'},
    {id: 4, name: 'blogs', link: '/blogs'},
];

function Nav({classNames}){
    return(
        <nav>
            <ul className={classNames}>
                {
                    navLinks.map(link => <li key={link.id}><a href={link.link}>{link.name.slice(0,1).toUpperCase() + link.name.slice(1)}</a></li>)
                }
            </ul>
        </nav>
    );
}

export default Nav;