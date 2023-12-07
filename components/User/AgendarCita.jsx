const AgendarCita = () => {
    return(
        <div className="flex flex-col gap-5">
            <h2 className="font-normal text-6xl">Agendar cita</h2>
            <div className="flex flex-col gap-3">
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
                    <input type="date" />
                    <select>
                        <option value=""></option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default AgendarCita;