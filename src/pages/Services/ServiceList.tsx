import { Parallax } from '../../assets/components/Parallax'
import { ServicesInfo } from '../../assets/Constants'
import { GridSlider } from '../Components/GridSlider'


export const ServiceList = () => {
    return(
        <section id='servicelist' className="center flex-col pt-[9ch]">
            <div className="w-11/12 lg:10/12 xl:w-9/12 grid grid-cols-1 md:grid-cols-2">
                <Parallax id={'serviced'}>
                    <h2 className="text-orange text-4xl">Our Services</h2>
                </Parallax>
                    
            </div>     
            <GridSlider data={ServicesInfo}/>
        </section>
    )
}