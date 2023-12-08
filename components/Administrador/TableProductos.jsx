const TableProductos = () => {
    return(
        <div className="bg-[#FFF] w-[130vh] h-[76vh] rounded-lg shadow-2xl">
            <table className="w-full h-full flex flex-col items-center">
                <thead className="w-full flex items-center justify-start ml-[140px]">
                    <tr className="flex gap-[105px] mt-6">
                        <th className="font-semibold text-center text-base">ID</th>
                        <th className="font-semibold text-center text-base">Nombre</th>
                        <th className="font-semibold text-center text-base">Precio</th>
                        <th className="font-semibold text-center text-base">Acciones</th>
                    </tr>
                </thead>
                <tbody className="w-full flex-col">
                    <tr className="flex ml-10 pt-4 gap-[20px] mr-5">
                        <td className="font-normal text-center text-xs"></td>
                        <td className="font-normal text-center text-xs ml-16"></td>
                        <td className="font-normal text-center text-xs ml-14"></td>
                        <td className="flex flex-row gap-5">
                            <button className="bg-green-500 p-2 h-10 text-[#fff] font-medium rounded-md shadow-2xl">Agregar</button>
                            <button className="bg-sky-400 p-2 h-10 text-[#fff] font-medium rounded-md shadow-2xl">Editar</button>
                            <button className="bg-red-500 p-2 h-10 text-[#fff] font-medium rounded-md shadow-2xl">Eliminar</button>
                        </td>
                    </tr>       
                </tbody>
            </table>
        </div>
    )
}

export default TableProductos;