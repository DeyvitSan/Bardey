import axios from "axios";
import { useEffect, useState } from "react";

const TableProductos = () => {

    const [producto, setProducto] = useState([])

    useEffect(() => {
        const apiUrl = "http://localhost:3001/api/producto";
        axios.get(apiUrl)
            .then(({ data }) => {
                setProducto(data.data)
            })
            .catch(error => {
                console.error(error);
            });
    },);

    return(
        <div className="bg-[#FFF] w-[130vh] h-[76vh] rounded-lg shadow-2xl">
            <table className="w-full h-full flex flex-col items-center">
                <thead className="w-full flex items-center justify-start ml-[140px]">
                    <tr className="flex gap-[105px] mt-6">
                        <th className="font-semibold text-center text-base">ID</th>
                        <th className="font-semibold text-center text-base">Nombre</th>
                        <th className="font-semibold text-center text-base">Precio</th>
                        <th className="font-semibold text-center text-base ml-28">Acciones</th>
                    </tr>
                </thead>
                <tbody className="w-full flex-col">

                {producto.map(producto => {
                    return(
                        <>
                            <tr className="flex ml-[75px] pt-4 gap-[20px] mr-5" key={producto.id_producto}>
                                <td className="font-medium text-center text-sm">{producto.id_producto}</td>
                                <td className="font-medium text-center text-sm ml-10">{producto.nombre}</td>
                                <td className="font-medium text-center text-sm ml-14">{producto.precio}</td>
                                <td className="flex flex-row gap-5 ml-32">
                                    <button className="bg-green-500 p-2 h-10 text-[#fff] font-medium rounded-md shadow-2xl">Agregar</button>
                                    <button className="bg-sky-400 p-2 h-10 text-[#fff] font-medium rounded-md shadow-2xl">Editar</button>
                                    <button className="bg-red-500 p-2 h-10 text-[#fff] font-medium rounded-md shadow-2xl">Eliminar</button>
                                </td>
                            </tr>       
                        </>
                    )
                })}

                </tbody>
            </table>
        </div>
    )
}

export default TableProductos;