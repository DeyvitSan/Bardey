import axios from "axios";
import { useEffect, useState } from "react";

const Table = () => {

    const [user, setUser] = useState([])

    useEffect(() => {
        const apiUrl = "http://localhost:3001/api/cita";
        axios.get(apiUrl)
            .then(({ data }) => {
                setUser(data.data)
            })
            .catch(error => {
                console.error(error);
            });
    },);

    return(
        <div className="bg-[#FFF] w-[150vh] h-[76vh] rounded-lg shadow-2xl">
            <table className="w-full h-full flex flex-col items-center">
                <thead className="w-full flex items-center justify-start ml-20">
                    <tr className="flex gap-[75px] mt-5">
                        <th className="font-semibold text-center text-xs">ID</th>
                        <th className="font-semibold text-center text-xs">Nombre</th>
                        <th className="font-semibold text-center text-xs">Apellido P.</th>
                        <th className="font-semibold text-center text-xs">Apellido M.</th>
                        <th className="font-semibold text-center text-xs">Teléfono</th>
                        <th className="font-semibold text-center text-xs">Correo</th>
                        <th className="font-semibold text-center text-xs ml-16">Fecha</th>
                        <th className="font-semibold text-center text-xs ml-16">Hora</th>
                    </tr>
                </thead>
                <tbody className="w-full flex-col">


                    {user.map(cita => {



                        return (
                            <>
                                <tr className="flex ml-10 pt-4 gap-[20px] mr-5" key={cita.id_cita}>
                                    <td className="font-normal text-center text-xs">{cita.id_cita}</td>
                                    <td className="font-normal text-center text-xs ml-16">{cita.nombre}</td>
                                    <td className="font-normal text-center text-xs ml-14">{cita.apellido_paterno}</td>
                                    <td className="font-normal text-center text-xs ml-20">{cita.apellido_materno}</td>
                                    <td className="font-normal text-center text-xs ml-16">{cita.telefono}</td>
                                    <td className="font-normal text-center text-xs ml-5">{cita.correo}</td>
                                    <td className="font-normal text-center text-xs ml-5">{cita.fecha}</td>
                                    <td className="font-normal text-center text-xs ml-10">{cita.hora}</td>
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