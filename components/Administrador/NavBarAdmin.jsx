import Image from 'next/image'

const NavBarAdmin = () => {
    return(
        <nav className="flex flex-col items-center bg-black h-screen w-64 pt-10">
            <Image src="/logo.svg" width={186} height={186}/>
            <div className='flex flex-col items-center gap-16 pt-28'>
                <a className='text-[#FFF] font-medium' href="">Productos</a>
                <a className='text-[#FFF] font-medium' href="">Citas</a>
            </div>
            <div className='pt-72'>
                <button className='bg-[#EF3E3E99] text-[#FFF] w-40 h-9 hover:scale-105 hover:duration-300'>Cerrar sesión</button>
            </div>
        </nav>
    )
}

export default NavBarAdmin;