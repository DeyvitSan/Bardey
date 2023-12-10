import axios from "axios";
import { useEffect, useState } from "react";

const TableProductos = () => {

    const [producto, setProducto] = useState([])
    const [nombre, setNombre] = useState('')
    const [precio, setPrecio] = useState('')

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

    const handleChangeNombre = (event) => {
        setNombre(event.target.value);
      };
      
    const handleChangePrecio = (event) => {
        setPrecio(event.target.value);
      };

    const handleCreateUser = () => {
        const newUser = {
            nombre: nombre,
            precio: precio
          };
        const apiUrl = "http://localhost:3001/api/producto";
        axios.post(apiUrl, newUser)
        .then((response => {
            console.log(response.data)
        }))
    }
        

    return(
        <div className="flex flex-col">
            <div className="bg-[#FFF] w-[130vh] h-[76vh] rounded-lg shadow-2xl">
                <table className="w-full h-full flex flex-col items-center">
                    <thead className="w-full flex items-center justify-start ml-[140px]">
                        <tr className="flex gap-[175px] mt-6">
                            <th className="font-semibold text-center text-base">ID</th>
                            <th className="font-semibold text-center text-base">Nombre</th>
                            <th className="font-semibold text-center text-base">Precio</th>
                            <th className="font-semibold text-center text-base">Acciones</th>
                        </tr>
                    </thead>
                    <tbody className="w-full flex-col">

                        {producto.map(producto => {
                            return (
                                <>
                                    <tr className="flex ml-[75px] pt-4 gap-[90px] mr-5" key={producto.id_producto}>
                                        <td className="font-medium text-center text-sm">{producto.id_producto}</td>
                                        <td className="font-medium text-center text-sm ml-10">{producto.nombre}</td>
                                        <td className="font-medium text-center text-sm ml-14">${producto.precio}</td>
                                        <td className="flex flex-row gap-5 ml-24 justify-end">
                                            <button className="bg-red-500 w-16 h-7 text-[#fff] text-sm font-medium rounded-md shadow-2xl">Eliminar</button>
                                        </td>
                                    </tr>
                                </>
                            )
                        })}

                    </tbody>
                </table>
            </div>
            <div className="flex justify-between mt-20 pb-14">
                <div>
                    <h2 className="text-3xl font-medium pb-5">Agregar Producto</h2>
                    <div className="flex gap-3">
                        <input type="text" value={nombre} onChange={handleChangeNombre} className="border-2 border-[#F4F4F4] rounded-sm w-[24vh] pl-2 h-12 font-light" placeholder="Nombre"/>
                        <input type="number" value={precio} onChange={handleChangePrecio} className="border-2 border-[#F4F4F4] rounded-sm w-[24vh] pr-2 pl-2 h-12 font-light" placeholder="Precio"/>
                    </div>
                    <div className="flex justify-center">
                        <button className="text-[#FFF] bg-[#000] mt-5 w-44 h-10 font-medium hover:scale-105 hover:duration-300" onClick={handleCreateUser}>Crear producto</button>
                    </div>
                </div>
                <div>
                    <h2 className="text-3xl font-medium pb-5">Editar Producto</h2>
                    <input type="text" className="border-2 border-[#F4F4F4] rounded-sm w-[50vh] pr-10 pl-2 h-12 font-light" placeholder="Nombre"/>
                    <div className="flex flex-row gap-3 mt-5">
                        <input type="number" className="border-2 border-[#F4F4F4] rounded-sm w-[24vh] pr-1 pl-2 h-12 font-light" placeholder="Precio"/>
                        <input type="number" className="border-2 border-[#F4F4F4] rounded-sm w-[24vh] pr-1 pl-2 h-12 font-light" placeholder="ID"/>
                    </div>
                    <div className="flex justify-center">
                        <button className="text-[#FFF] bg-[#000] mt-5 w-44 h-10 font-medium hover:scale-105 hover:duration-300">Editar producto</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TableProductos;