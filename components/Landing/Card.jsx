import Image from 'next/image'

const Card = ({nombre,precio, img}) => {
    return(
        <div className="w-52 h-60 flex flex-col items-center hover:scale-110 hover:duration-300">
            <Image width={150} height={150} src={img}/>
            <h2 className="text-[#000000] flex flex-col text-center text-sm font-semibold m-0 mt-5">
                <span className="">{nombre}</span>
                <span className="">${precio}</span>
            </h2>
        </div>
    )
}

export default Card