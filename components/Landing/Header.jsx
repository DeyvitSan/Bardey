"use client"
import Image from "next/image";
import Link from "next/link";

export const Header = () => {

    const scrollToSectionProductos = (sectionId) => {
        const section = document.querySelector(sectionId);
        if (section) {
          const sectionPosition = section.getBoundingClientRect().top;
          const offsetPosition = sectionPosition - 0;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      };

      const handleClickProductos = (event) => {
        event.preventDefault();
        scrollToSectionProductos('#productos');
      };

    const scrollToSectionServicios = (sectionId) => {
        const section = document.querySelector(sectionId);
        if (section) {
          const sectionPosition = section.getBoundingClientRect().top;
          const offsetPosition = sectionPosition - 0;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      };

      const handleClickServicios = (event) => {
        event.preventDefault();
        scrollToSectionServicios('#servicios');
      };  

    return(
        <header className="w-full h-32 flex items-center justify-between bg-black">
            <div className="ml-10">
                <Image 
                width={180}
                height={180}
                src="/logo.svg"/>
            </div>
            <div className="flex items-center gap-20">
                <div className="flex gap-10">
                    <a className="text-[#FFFFFF] hover:border-b-2 hover:scale-105 hover:duration-300 text-sm font-light" >Inicio</a>
                    <a className="text-[#FFFFFF] hover:border-b-2 hover:scale-105 hover:duration-300 text-sm font-light cursor-pointer" onClick={handleClickProductos}>Productos</a>
                    <a className="text-[#FFFFFF] hover:border-b-2 hover:scale-105 hover:duration-300 text-sm font-light" onClick={handleClickServicios}>Servicios</a>
                </div>
                <div>
                    <Link href="/Login">
                        <button className="bg-[#5257B3] h-10 w-28 text-white text-sm mr-20 
                                            hover:scale-105 hover:duration-300" >
                                                Iniciar sesión
                        </button>
                    </Link>
                </div>
            </div>
        </header>
    )
}