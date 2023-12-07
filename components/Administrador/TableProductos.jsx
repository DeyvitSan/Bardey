const TableProductos = () => {
    return(
        <div className="bg-[#FFF] w-[132vh] h-[76vh] rounded-lg shadow-2xl">
            <table className="w-full h-full flex flex-col items-center">
                <thead className="w-full mt-5">
                    <tr className="flex justify-start ml-20">
                        <th className="font-semibold text-center">ID</th>
                        <th className="font-semibold text-center">Nombre</th>
                        <th className="font-semibold text-center">Precio</th>
                        <th className="font-semibold text-center">Acciones</th>
                    </tr>
                </thead>
                <tbody className="w-full mt-3">
                    <tr className="flex justify-start ml-[84px]">
                        <td className="font-normal text-center">1</td>
                        <td className="font-normal text-center">Crema para cabello</td>
                        <td className="font-normal text-center">$149</td>
                        <td className="font-normal text-center]"></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TableProductos;