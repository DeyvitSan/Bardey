const Table = () => {
    return(
        <div className="bg-[#FFF] w-[132vh] h-[76vh] rounded-lg shadow-2xl">
            <table className="w-full h-full flex flex-col items-center">
                <thead className="w-full mt-5 mr-20">
                    <tr className="flex justify-center gap-[74px]">
                        <th className="font-semibold text-center">ID</th>
                        <th className="font-semibold text-center">Nombre</th>
                        <th className="font-semibold text-center">Apellido P.</th>
                        <th className="font-semibold text-center">Apellido M.</th>
                        <th className="font-semibold text-center">Teléfono</th>
                        <th className="font-semibold text-center ml-[40px]">Correo</th>
                    </tr>
                </thead>
                <tbody className="w-full mt-3 ml-[115px]">
                    <tr className="flex">
                        <td className="font-normal text-center">1</td>
                        <td className="font-normal text-center ml-[78px]">Gerardo</td>
                        <td className="font-normal text-center ml-[80px]">Gonzalez</td>
                        <td className="font-normal text-center ml-[110px]">Ruiz</td>
                        <td className="font-normal text-center ml-[88px]">9612801999</td>
                        <td className="font-normal text-center ml-[70px]">isai@gmail.com</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table;