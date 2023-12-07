"use client"
import axios from 'axios';
import Image from 'next/image'
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const AgendarCita = () => {

    const router = useRouter()

    const [nombre, setNombre] = useState('');
    const [apellidoP, setApellidoP] = useState('');
    const [apellidoM, setApellidoM] = useState('');
    const [correo, setCorreo] = useState('');
    const [telefono, setTelefono] = useState('');
    const [fecha, setFecha] = useState('');
    const [filtro, setFiltro] = useState('');
    const [idCliente, setIdCliente] = useState('');
    

    const handleNombreChange = (event) => {
        setNombre(event.target.value);
      };

      const handleApellidoPChange = (event) => {
        setApellidoP(event.target.value);
      };
      const handleApellidoMChange = (event) => {
        setApellidoM(event.target.value);
      }; 

      const handleCorreoChange = (event) => {
        setCorreo(event.target.value);
      };  

      const handleTelefonoChange = (event) => {
        setTelefono(event.target.value);
      }; 
      
      const handleFechaChange = (event) => {
        setFecha(event.target.value);
      }; 

      const handleHoraChange = (event) => {
        setFiltro(event.target.value);
      };

      const handleIdChange = (event) => {
        setIdCliente(event.target.value);
      };
      
      const handleCrearCita = () => {
        const newUser = {
            nombre: nombre,
            apellido_paterno: apellidoP,
            apellido_materno: apellidoM,
            correo: correo,
            telefono: telefono,
            fecha: fecha,
            hora: filtro,
            id_cliente: idCliente
          };
        axios.post('http://localhost:3001/api/cita', newUser)
            .then((response => {
                console.log(response.data.data)
                alert('Cita creada correctamente')
                router.push("/User/Productos")
            }))
    }

    return(
        <div className="flex flex-row justify-around gap-5 w-full h-full">
            <div className="flex flex-col basis-1/2">
                <h2 className="font-normal text-6xl ml-[125px]">Agendar cita</h2>
                <div className="flex flex-col pt-8 ml-40 gap-6">
                    <input className="pl-2 border-[1px] border-[#41414140] rounded-sm w-[450px] h-12" 
                    type="text" 
                    placeholder="Nombre(s)" 
                    value={nombre}
                    onChange={handleNombreChange}/>
                    <div className="flex gap-5">
                        <input 
                        className="pl-2 border-[1px] border-[#41414140] rounded-sm w-[215px] h-12" 
                        type="text" 
                        placeholder="Apellido paterno" 
                        value={apellidoP}
                        onChange={handleApellidoPChange}/>
                        <input 
                        className="pl-2 border-[1px] border-[#41414140] rounded-sm w-[215px] h-12" 
                        type="text" 
                        placeholder="Apellido materno" 
                        value={apellidoM}
                        onChange={handleApellidoMChange}/>
                    </div>
                    <div className="flex gap-5">
                        <input 
                        className="pl-2 border-[1px] border-[#41414140] rounded-sm w-[215px] h-12" 
                        type="email" 
                        placeholder="Correo eletrónico" 
                        value={correo}
                        onChange={handleCorreoChange}/>
                        <input 
                        className="pl-2 border-[1px] border-[#41414140] rounded-sm w-[215px] h-12" 
                        type="text" 
                        placeholder="Teléfono" 
                        value={telefono}
                        onChange={handleTelefonoChange}/>
                    </div>
                    <div className="flex gap-5">
                        <input 
                        type="date" 
                        className="pl-2 text-[#9CA3B1] border-[1px] border-[#41414140] w-[215px] h-12"
                        value={fecha}
                        onChange={handleFechaChange}/>
                        <select className="text-[#9CA3B1] pl-1 border-[1px] border-[#41414140] w-[215px] h-12">
                            <option className="" value={filtro} onChange={handleHoraChange} disabled selected>Horario</option>
                            <option value="11:00">11:00</option>
                            <option value="12:00">12:00</option>
                            <option value="13:00">13:00</option>
                            <option value="14:00">14:00</option>
                            <option value="15:00">15:00</option>
                            <option value="16:00">16:00</option>
                            <option value="17:00">17:00</option>
                            <option value="18:00">18:00</option>
                            <option value="19:00">19:00</option>
                            <option value="20:00">20:00</option>
                        </select>
                    </div>
                    <div>
                        <input type="text" value={idCliente} onChange={handleIdChange} placeholder="Personas" 
                              className='pl-2 border-[1px] border-[#41414140] rounded-sm w-[450px] h-12'/>
                    </div>
                    <div className="flex flex-row justify-center pt-6 pb-20">
                        <button className="font-normal text-[#FFF] bg-black w-48 h-12"
                        onClick={handleCrearCita}>Agendar mi cita</button>
                    </div>
                </div>
            </div>
            <div className="basis-1/2 ml-20 mt-[-40px]">
                <Image src="/ImgCita.svg" width={520} height={520}/>
            </div>
        </div>
    )
}

export default AgendarCita;