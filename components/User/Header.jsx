"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation';

const Header = () => {

    const router = useRouter();

    return(
        <div className="w-full h-32 bg-black flex justify-between items-center">
            <div className='ml-10'>
                <Image 
                width={180}
                height={180}
                src="/logo.svg"/>
            </div>
            <div>
                <button className='text-[#FFFFFF] bg-[#EF4D4D99] text-sm w-32 
                                    h-8 mr-14 hover:scale-105 
                                    hover:duration-300' onClick={() => {
                                        router.push("/")
                                    }}>Cerrar sesión</button>
            </div>
        </div>
    )
}

export default Header;