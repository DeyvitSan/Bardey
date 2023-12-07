import NavBarAdmin from "@/components/Administrador/NavBarAdmin";
import TableProductos from "@/components/Administrador/TableProductos";


const Productos = () => {
    return(
        <div className="flex flex-row w-full h-full overflow-hidden">
            <NavBarAdmin/>
            <div className="ml-16 mt-20">
                <h2 className="text-3xl font-medium pb-5">Lista de productos</h2>
                <TableProductos/>
            </div>
        </div>
    )
}

export default Productos;