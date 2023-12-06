import Card from "../Landing/Card";

const Productos = () => {
    return(
        <div className="flex flex-col">
            <div className="flex flex-col">
                <h2 className="text-2xl font-medium ml-32">Para el barba</h2>
                <div className="flex flex-row pt-6 gap-10 w-[158vh] h-[42vh] ml-20">
                    <div className="mt-5">
                        <Card nombre="Crema para el cabello" precio="149" img="/producto1.svg" />
                    </div>
                    <div className="mt-4">
                        <Card nombre="Crema para el cabello" precio="149" img="/producto2.svg" />
                    </div>
                    <div className="m-0 mt-6">
                        <Card nombre="Crema para el cabello" precio="149" img="/p3.svg" />
                    </div>
                    <div className="m-0 mt-9">
                        <Card nombre="Crema para el cabello" precio="149" img="/producto4.svg" />
                    </div>
                    <Card nombre="Crema para el cabello" precio="149" img="/p5.svg" />
                </div>
            </div>
            <div className="flex flex-col">
                <h2 className="text-2xl font-medium ml-32">Para el cabello</h2>
                <div className="flex flex-row pt-14 gap-10 w-[158vh] h-[42vh] ml-20">
                    <div className="mt-[-20px]">
                        <Card nombre="Crema para el cabello" precio="149" img="/p6.svg"/>
                    </div>
                    <div className="mt-[-26px]">
                        <Card nombre="Crema para el cabello" precio="149" img="/p7.svg"/>
                    </div>
                    <div className="mt-[-3px]">
                        <Card nombre="Crema para el cabello" precio="149" img="/p8.svg"/>
                    </div>
                    <div className="">
                        <Card nombre="Crema para el cabello" precio="149" img="/p9.svg"/>
                    </div>
                    <div className="mt-[-33px]">
                        <Card nombre="Crema para el cabello" precio="149" img="/p10.svg"/>
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <h2 className="text-2xl font-medium ml-32">Para el barba</h2>
                <div className="flex flex-row pt-6 gap-10 w-[158vh] h-[42vh] ml-20">
                    <div className="mt-5">
                        <Card nombre="Crema para el cabello" precio="149" img="/producto1.svg" />
                    </div>
                    <div className="mt-4">
                        <Card nombre="Crema para el cabello" precio="149" img="/producto2.svg" />
                    </div>
                    <div className="m-0 mt-6">
                        <Card nombre="Crema para el cabello" precio="149" img="/p3.svg" />
                    </div>
                    <div className="m-0 mt-9">
                        <Card nombre="Crema para el cabello" precio="149" img="/producto4.svg" />
                    </div>
                    <Card nombre="Crema para el cabello" precio="149" img="/p5.svg" />
                </div>
            </div>
        </div>
    )
}

export default Productos;