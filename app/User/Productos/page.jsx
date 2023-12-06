"use client"
import Footer from "@/components/Landing/Footer";
import Header from "@/components/User/Header";
import NavBar from "@/components/User/NavBar";
import Productos from "@/components/User/Productos";


const UserProductos = () => {
    return(
        <div className="w-full h-full">
            <Header/>
            <NavBar/>
            <Productos/>
            <Footer/>
        </div>
    )
}

export default UserProductos;