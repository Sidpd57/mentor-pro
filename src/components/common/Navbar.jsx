function Navbar(){
    return(
        <nav className="nav d-flex container">
            <h3 className="nav__brand">Mentor Pro</h3>
            <ul className="nav__list d-flex">
                <li className="nav__item"><a href="" className="nav__link">Home</a></li>
                <li className="nav__item"><a href="" className="nav__link">Mentorship</a></li>
                <li className="nav__item"><a href="" className="nav__link">Profile</a></li>
                <li className="nav__item"><a href="" className="nav__link">Message</a></li>
                <li className="nav__item"><a href="" className="nav__link login">Login</a></li>
            </ul>
        </nav>
    )
}

export default Navbar