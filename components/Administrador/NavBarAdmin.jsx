import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const NavBarAdmin = () => {

    const router = useRouter()

    return(
        <nav className="flex flex-col items-center bg-black h-[145vh] w-48 pt-10">
            <Image src="/logo.svg" width={156} height={156}/>
            <div className='flex flex-col items-center gap-16 pt-28'>
                <Link className='text-[#FFF] font-medium' href="/Administrador/Productos">Productos</Link>
                <Link className='text-[#FFF] font-medium' href="/Administrador/Citas">Citas</Link>
            </div>
            <div className='pt-72'>
                <button className='bg-[#EF3E3E99] text-[#FFF] w-32 h-9 
                                    hover:scale-105 hover:duration-300 text-sm'
                                    onClick={() => {
                                        router.push("/")
                                    }}>Cerrar sesión
                </button>
            </div>
        </nav>
    )
}

export default NavBarAdmin;