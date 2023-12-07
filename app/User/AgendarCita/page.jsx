"use client"
import Footer from "@/components/Landing/Footer";
import AgendarCita from "@/components/User/AgendarCita";
import Header from "@/components/User/Header";
import NavBar from "@/components/User/NavBar";

const UsuarioAgendarCita = () => {
    return(
        <div>
            <Header/>
            <NavBar/>
            <AgendarCita/>
            <Footer/>
        </div>
    )
}

export default UsuarioAgendarCita;