import axios from "axios";
import { useEffect, useState } from "react";

const Table = () => {

    const [user, setUser] = useState([])

    useEffect(() => {
        const apiUrl = "http://localhost:3001/api/cliente";
        axios.get(apiUrl)
            .then(({ data }) => {
                setUser(data.data)
            })
            .catch(error => {
                console.error(error);
            });
    },);

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


                    {user.map(cliente => {



                        return (
                            <>
                                <tr className="flex pt-4" key={cliente.id_cliente}>
                                    <td className="font-normal text-center">{cliente.id_cliente}</td>
                                    <td className="font-normal text-center ml-[78px]"></td>
                                    <td className="font-normal text-center ml-[80px]"></td>
                                    <td className="font-normal text-center ml-[110px]"></td>
                                    <td className="font-normal text-center ml-[88px]"></td>
                                    <td className="font-normal text-center ml-[70px]"></td>
                                </tr>
                            </>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Table;