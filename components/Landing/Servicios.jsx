const Servicios = () => {
    return(
        <div className="flex flex-col bg-[#FFFFFF] pt-10 gap-10">
            <div className="flex flex-row justify-center">
                <div className="flex flex-col items-center gap-3">
                    <h2 className="flex flex-col text-center font-medium">
                        <span className="text-lg">Nuestros</span>
                        <span className="text-5xl">Servicios</span>
                    </h2>
                    <div className="w-36 h-[3px] bg-black"></div>
                </div>
            </div>
            <div className="flex flex-row justify-center gap-56 pt-12">
                <div className="flex flex-col items-center">
                    <h2 className="text-[#000000] text-5xl font-medium pb-3">CABELLO</h2>
                    <div className="bg-black w-72 h-[3px]"></div>
                    <div className="pt-12 flex flex-col divide-y divide-[#2A2A2A]">

                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <h2 className="text-[#000000] text-5xl font-medium pb-3">BARBA</h2>
                    <div className="bg-black w-72 h-[3px]"></div>
                </div>
            </div>
        </div>
    )
}

export default Servicios;