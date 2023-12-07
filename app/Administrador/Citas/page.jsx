import NavBarAdmin from "@/components/Administrador/NavBarAdmin";
import Table from "@/components/Administrador/Table";

const Citas = () => {
    return(
        <div className="flex flex-row w-full h-full overflow-hidden">
            <NavBarAdmin/>
            <div className="ml-16 mt-20">
                <h2 className="text-3xl font-medium pb-5">Lista de usuarios</h2>
                <Table/>
            </div>
        </div>
    )
}

export default Citas;