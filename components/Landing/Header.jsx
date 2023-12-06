import Image from "next/image";

export const Header = () => {
    return(
        <header className="w-full h-32 flex items-center justify-between bg-black">
            <div className="ml-10">
                <Image 
                width={256}
                height={256}
                src="/logo.svg"/>
            </div>
            <div className="flex items-center gap-20">
                <div className="flex gap-10">
                    <a className="text-[#FFFFFF] hover:border-b-2 hover:scale-105 hover:duration-300 text-sm font-light" href="">Inicio</a>
                    <a className="text-[#FFFFFF] hover:border-b-2 hover:scale-105 hover:duration-300 text-sm font-light" href="">Productos</a>
                    <a className="text-[#FFFFFF] hover:border-b-2 hover:scale-105 hover:duration-300 text-sm font-light" href="">Servicios</a>
                    <a className="text-[#FFFFFF] hover:border-b-2 hover:scale-105 hover:duration-300 text-sm font-light" href="">Contactanos</a>
                </div>
                <div>
                    <button className="bg-[#5257B3] h-10 w-28 text-white text-sm mr-20 hover:scale-105 hover:duration-300">Iniciar sesión</button>
                </div>
            </div>
        </header>
    )
}