import Image from 'next/image'

const AgendarCita = () => {
    return(
        <div className="flex flex-row justify-around gap-5 w-full h-full">
            <div className="flex flex-col basis-1/2">
                <h2 className="font-normal text-6xl ml-[125px]">Agendar cita</h2>
                <div className="flex flex-col pt-8 ml-40 gap-6">
                    <input className="pl-2 border-[1px] border-[#41414140] rounded-sm w-[450px] h-12" type="text" placeholder="Nombre(s)" />
                    <div className="flex gap-5">
                        <input className="pl-2 border-[1px] border-[#41414140] rounded-sm w-[215px] h-12" type="text" placeholder="Apellido paterno" />
                        <input className="pl-2 border-[1px] border-[#41414140] rounded-sm w-[215px] h-12" type="text" placeholder="Apellido materno" />
                    </div>
                    <div className="flex gap-5">
                        <input className="pl-2 border-[1px] border-[#41414140] rounded-sm w-[215px] h-12" type="email" placeholder="Correo eletrónico" />
                        <input className="pl-2 border-[1px] border-[#41414140] rounded-sm w-[215px] h-12" type="text" placeholder="Teléfono" />
                    </div>
                    <div className="flex gap-5">
                        <input type="date" className="pl-2 text-[#9CA3B1] border-[1px] border-[#41414140] w-[215px] h-12"/>
                        <select className="text-[#9CA3B1] pl-1 border-[1px] border-[#41414140] w-[215px] h-12">
                            <option className="" value="" disabled selected>Horario</option>
                            <option value=""></option>
                        </select>
                    </div>
                    <div className="flex flex-row justify-center pt-6 pb-20">
                        <button className="font-normal text-[#FFF] bg-black w-48 h-12">Agendar mi cita</button>
                    </div>
                </div>
            </div>
            <div className="basis-1/2 ml-20 mt-[-40px]">
                <Image src="/ImgCita.svg" width={520} height={520}/>
            </div>
        </div>
    )
}

export default AgendarCita;