"use client"

import NavBarAdmin from "@/components/Administrador/NavBarAdmin";
import Table from "@/components/Administrador/Table";

const Citas = () => {
    return(
        <div className="flex flex-row w-full h-full overflow-hidden">
            <NavBarAdmin/>
            <div className="flex flex-col ml-5 mt-20">
                <div className="flex flex-row justify-between">
                    <div>
                        <h2 className="text-3xl font-medium pb-5">Lista de citas</h2>
                    </div>
                    <div className="flex gap-5 mr-20">
                        <button className="bg-sky-400 p-2 h-10 text-[#fff] font-medium rounded-md shadow-2xl">Editar</button>
                        <button className="bg-red-500 p-2 h-10 text-[#fff] font-medium rounded-md shadow-2xl">Eliminar</button>
                    </div>
                </div>
                <Table/>
            </div>
        </div>
    )
}

export default Citas;