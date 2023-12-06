import { Header } from "@/components/Landing/Header";
import Inicio from "@/components/Landing/Inicio";
import Productos from "@/components/Landing/Productos";
import Servicios from "@/components/Landing/Servicios";

const Home = () => {
  return (
    <div className="w-full h-full">
      <Header/>
      <Inicio/>
      <Productos/>
      <Servicios/>
    </div>
  )
}

export default Home;

