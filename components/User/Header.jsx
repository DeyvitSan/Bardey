import Image from 'next/image'

const Header = () => {
    return(
        <div className="w-full h-32 bg-black flex justify-between items-center">
            <div>
                <Image 
                width={256}
                height={256}
                src="/logo.svg"/>
            </div>
            <div>
                <button className='text-[#FFFFFF] bg-[#EF4D4D99] text-sm w-32 h-8 mr-14'>Cerrar sesión</button>
            </div>
        </div>
    )
}

export default Header;