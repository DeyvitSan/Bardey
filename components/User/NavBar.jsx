const NavBar = () => {
    return(
        <nav className="w-full h-32 flex justify-start items-center gap-16 pl-32">
            <a className="text-[#000000] font-medium hover:border-b-2 hover:scale-105 hover:duration-300 hover:border-[#000000]" href="">Productos</a>
            <a className="text-[#000000] font-medium hover:border-b-2 hover:scale-105 hover:duration-300 hover:border-[#000000]" href="">Agendar una cita</a>
        </nav>
    )
}

export default NavBar;