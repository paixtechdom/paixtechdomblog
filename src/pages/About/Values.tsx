import { Parallax } from "../../assets/components/Parallax"
import { ValuesInfo } from "../../assets/Constants"
import { GridSlider } from "../Components/GridSlider"



export const Values = () => {
    return(
        <section id='Values' className="center flex-col py-[9ch]">
            <div className="w-11/12 lg:10/12 xl:w-9/12 grid grid-cols-1 md:grid-cols-2">
                <Parallax id={'values'}>
                    <div className="text-orange text-4xl">Our Values</div>
                </Parallax>
                    
            </div>     
            <GridSlider data={ValuesInfo}/>
        </section>
    )
}