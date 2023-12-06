import Image from 'next/image'

const Footer = () => {
    return(
        <footer className="flex flex-row justify-between w-full h-40 overflow-hidden bg-[#141414] items-center">
            <div className="flex flex-col items-start ml-20">
                <div className="flex flex-row justify-around">
                    <div className="">
                        <Image className='' width={250} height={250} src="/logo.svg"/>
                    </div>
                </div>
                <div className="ml-8">
                    <h2 className='text-[#FFFFFF] mr-9 font-light'>Copyright © 2023</h2>
                </div>
                <div className='pt-2 ml-8'>
                    <h4 className='text-[#FFFFFF] font-thin text-xs'>Tú eres nuestra prioridad</h4>
                </div>
            </div>
            <div className="flex flex-col items-end mt-16 pr-20">
                <div className="flex flex-row"></div>
                <div className='w-[100vh] h-[1px] bg-[#FFFFFF]'></div>
                <div className="flex flex-row">
                    <h4 className='text-[#FFFFFF] pt-4 font-thin'>Siguenos en nuestras redes sociales</h4>
                    <div className="flex flex-row pt-3 pl-10 gap-5">
                        <Image width={30} height={30} src="/Twitter.svg"/>
                        <Image width={30} height={30} src="/Link.svg"/>
                        <Image width={30} height={30} src="/GitHub.svg"/>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;