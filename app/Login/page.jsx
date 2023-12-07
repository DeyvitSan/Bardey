"use client"
import { useState } from 'react';
import Image from 'next/image'
import MostrarContraseña from '../../public/MostrarContraseña.svg'
import OcultarContraseña from '../../public/OcultarContraseña.svg'
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Page = () => {

    const router = useRouter()

    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return(
        <div className="flex flex-row justify-center w-full h-screen overflow-hidden">
            <div className='basis-1/2'>
                <Image src="/ImgLogin.png" width={500} height={500} layout='responsive'/>
            </div>
            <div className='basis-1/2 mt-24'>
                <div className='flex justify-center items-center'>
                    <div className='flex flex-col items-center'>
                        <Image src="/logo2.svg" width={200} height={200}/>
                        <h2 className='text-3xl font-medium pt-5'>Bienvenido de vuelta</h2>
                        <p className='font-light pt-2'>Ingresa tus datos para entrar.</p>
                        <div className="flex justify-center pt-10 pb-5">
                            <input 
                            type="text" 
                            placeholder="Ingresa tú correo" 
                            className="h-12 w-[50vh] border-2 border-[#F4F4F4] rounded-sm pl-2 font-light"
                            />
                        </div>
                        <div className="flex justify-center relative">
                            <input
                                className="border-2 border-[#F4F4F4] rounded-sm w-[50vh] pr-10 pl-2 h-12 font-light"
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Ingresa tú contraseña"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute inset-y-0 ml-[45vh] flex items-center cursor-pointer"
                            >
                                <Image
                                src={showPassword ? MostrarContraseña : OcultarContraseña}
                                alt={showPassword ? 'Mostrar Contraseña' : 'Ocultar Contraseña'}
                                className="w-5 h-5"
                                />
                            </button>
                        </div>
                        <div className='pt-10'>
                            <button className='bg-[#000000] text-[#ffffff] w-[50vh] h-[6vh] 
                                                font-medium rounded-sm hover:scale-105 
                                                hover:duration-300' onClick={() => {
                                                    router.push("/User/Productos")
                                                }}>
                                                    Iniciar sesión
                            </button>
                        </div>
                        <div className='pt-16'>
                            <p>¿No tienes cuenta aún? <Link className='font-semibold' href="/Registro">Registrate aquí</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page;