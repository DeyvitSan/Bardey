import Card from "./Card";

const Productos = () => {
    return(
        <div className="flex flex-col bg-[#E4E2E2] pt-10 gap-10">
            <div className="flex flex-row justify-center">
                <div className="flex flex-col items-center gap-3">
                    <h2 className="flex flex-col text-center font-medium">
                        <span className="text-lg">Nuestros productos</span>
                        <span className="text-5xl">Más vendidos</span>
                    </h2>
                    <div className="w-36 h-[3px] bg-black"></div>
                </div>
            </div>
            <div className="flex flex-col">
                <h2 className="text-2xl font-medium ml-32">Para el cabello</h2>
                <div className="flex flex-row pt-10 gap-14 w-[150vh] h-[42vh] ml-32">
                    <Card nombre="Crema para el cabello" precio="149" img="/producto1.svg"/>
                    <Card nombre="Crema para el cabello" precio="149" img="/producto1.svg"/>
                    <Card nombre="Crema para el cabello" precio="149" img="/producto1.svg"/>
                    <Card nombre="Crema para el cabello" precio="149" img="/producto1.svg"/>
                    <Card nombre="Crema para el cabello" precio="149" img="/producto1.svg"/>
                </div>
            </div>
            <div className="flex flex-col">
                <h2 className="text-2xl font-medium ml-32">Para la barba</h2>
                <div className="flex flex-row pt-10 gap-14 w-[150vh] h-[42vh] ml-32">
                    <Card nombre="Crema para el cabello" precio="149" img="/producto1.svg"/>
                    <Card nombre="Crema para el cabello" precio="149" img="/producto1.svg"/>
                    <Card nombre="Crema para el cabello" precio="149" img="/producto1.svg"/>
                    <Card nombre="Crema para el cabello" precio="149" img="/producto1.svg"/>
                    <Card nombre="Crema para el cabello" precio="149" img="/producto1.svg"/>
                </div>
            </div>
        </div>
    )
}

export default Productos;