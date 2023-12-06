import Image from 'next/image'

const Inicio = () => {
    return(
        <div className="my-background bg-image bg-center flex justify-center items-center gap-24 pt-12 pb-14 w-full h-full">
            <div className="flex flex-col gap-10">
                <h2 className="text-[55px] leading-[60px]">
                    <span className="text-[#FFFFFF]">Llévate la experiencia <br /> de nuestro </span>
                    <span className="text-[#9D9D9D]">excelente <br /> servicio</span>
                </h2>
                <p className="text-[#FFFFFF] font-thin">
                    Bienvenido a Bardey, contamos con múltiples servicios para ti, recuerda que <br /> 
                    Bardeytú eres nuestra prioridad
                </p>
                <div className="w-56 h-10 flex items-center relative cursor-pointer hover:scale-105 hover:duration-300">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                        <div className="absolute bg-[#9D9D9D] w-12 h-12 rounded-full hover:w-56 transition-width duration-300 ml-2"></div>
                    </div>
                    <div className='flex items-center gap-4' >
                        <h2 className='text-[#FFFFFF] relative z-10 pt-2 font-medium '>Agenda tú cita!</h2>
                        <Image className='z-30 mt-2' width={30} height={30} src="/flecha.svg"/>
                    </div>
                </div>
            </div>
            <div>
                <Image className='' width={396} height={396} src="/InicioImg.svg"/>
            </div>
        </div>
    )
}

export default Inicio;