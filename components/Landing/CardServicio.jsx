const CardServicio = ({nombre, descripcion, precio}) => {
    return(
        <div className="flex flex-row justify-between gap-14 pt-5 pb-2 hover:scale-105 hover:duration-300">
            <div className="flex flex-col">
                <h2 className="font-medium text-2xl">{nombre}</h2>
                <p className="text-xs ml-1">{descripcion}</p>
            </div>
            <div className="flex items-center">
                <h2 className="font-semibold text-3xl">${precio}</h2>
            </div>
        </div>
    )
}

export default CardServicio;