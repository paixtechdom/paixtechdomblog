import { Prices } from "../../assets/Constants"



export const Packages = () => {
    return(
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 w-full gap-9">
            {
                Prices.map((price, i: number) => (
                    <div key={i} className="flex flex-col w-full border border-blue-900 rounded-2xl overflow-hidden">
                        <div className="w-full bg-gradient-to-l from-[rgba(0,0,10)] via-[rgba(0,0,24)] to-[rgba(0,0,10)] border-b border-blue-900 text-center center flex-col gap-2 text-xl text-blue-600 p-[5vh]">
                            <div className="flex gap-4 text-blue-200">
                                <i className={`bi bi-${price.icon}`}></i>
                                <h3 className="">{price.title}</h3>
                            </div>
                            <div className="flex items-end justify-center">
                                <p className="text-4xl"><i className="bi bi-currency-dollar"></i>{price.price}</p>
                                <p className="text-sm">(min)</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-5 p-3 tracking-wide leading-relaxed text-sm py-5">
                            {
                                price.features.map((feature, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className="h-4 w-4 center mt-1">
                                            <i className={`i bi-${price.icon}   text-blue-600 bg-gray-2 00 rounded-full`}></i>
                                        </div>

                                        <p className="w-10/12">
                                            {feature}
                                        </p>
                                    </div>
                                ))
                            }
                        </div>


                    </div>
                ))
            }
        </div>
    )
}
