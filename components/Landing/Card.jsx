import Image from 'next/image'

const Card = ({nombre,precio, img}) => {
    return(
        <div className="w-52 h-60 flex flex-col items-center bg-[#E4E2E2] hover:scale-110 hover:duration-300">
            <Image width={180} height={180} src={img}/>
            <h2 className="text-[#000000] flex flex-col text-center text-sm font-semibold">
                <span className="">{nombre}</span>
                <span className="">${precio}</span>
            </h2>
        </div>
    )
}

export default Card