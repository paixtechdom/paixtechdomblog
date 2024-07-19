import { useNavigate } from 'react-router-dom'
import { Parallax } from '../../assets/components/Parallax'
import { Button } from '../../assets/components/Button'

const steps = [
    {
        icon: 'pencil-fill',
        title: 'Identifying your needs',
        desc: "WWe begin by understanding your brand, products, services, and target audience to define your unique requirements."
    },
    {
        icon: 'search',
        title: 'Research',
        desc: "Next, we conduct thorough research tailored to your specific parameters, ensuring we gather valuable insights to inform our strategy."
    },
    {
        icon: 'credit-card-2-front-fill',
        title: 'Creating a prototype',
        desc: "Based on our research findings, we develop prototypes showcasing potential designs that resonate with both you and your target audience."
    },
    {
        icon: 'columns-gap',
        title: 'Design',
        desc: "Once the prototype is approved, we dive into the design phase, crafting a visually appealing website structure that effectively communicates your message. We pay close attention to details such as colors, fonts, and imagery."
    },
    {
        icon: 'code-slash',
        title: 'Development',
        desc: "For more complex needs like custom websites or e-commerce platforms, we move on to the development phase. Here, we ensure all functionalities are implemented flawlessly to meet your specific requirements."
    },
    {   
        icon: 'bug-fill',
        title: 'Testing and Deployment',
        desc: "Before deployment, we rigorously test your website to ensure all functionalities work seamlessly and address any potential security concerns. Once everything is in place, we deploy your website, making it accessible to your audience."
    }

]


export const Steps = () => {
    const navigate = useNavigate()
    return(
        <section id='How' className="center w-full flex-col pt-[20vh] overflow-hidden">
            <Parallax id={'howheader'} className={' w-11/12 lg:w-10/12 xl:w-9/12'}>
                <h2 className="text-2xl mb-5 font-bold tracking-wide text-blue-600">How we get it done for you</h2>
            </Parallax>

            <div className="flex flex-col w-11/12 lg:w-10/12 xl:w-9/12 lg:flex-row gap-[50px] overflow-hidden mt-9">
                
                <div className="flex flex-col w-full">
                    {/* <div className="flex flex-col h-full w-full md:w-10/12"> */}
                    <div className="grid md:grid-cols-2 w-full gap-x-9">
                        {
                            steps.map((step, i) => (
                                <div key={i} className={`flex h-full`}>
                                    <Parallax id={`steps${step.title[0]}${step.title[2]}${step.title[3]}`} className={'flex gap-2'}>
                                        <>
                                            <div className={`flex flex-col items-center lg:h-full w-1/12 gap-1`}>
                                                <p className="border border-blue-900 text-blue-300 h-8 w-8 center rounded-full">{i+1}</p>

                                                <div className="border-l border-dashed border-blue-900 h-4/5 w-[1px]"></div>
                                            </div>


                                            <div className={`flex flex-col w-full gap-3 ${
                                                i == steps.length - 1 ? 'mb-[2vh]' : 
                                                i == steps.length - 2 ? 'mb-[5vh] lg:mb-[2vh]' : 
                                                'mb-[5vh] lg:mb-[10vh] xl:mb-[12vh]'} rounded-2xl border border-blue-900 p-9`}>

                                                <h3 className="text-blue-600 text-xl">
                                                    {step.title}
                                                </h3>
                                                <p className='text-gray-300 tracking-wide leading-relaxed text-[15px]'>{step.desc}</p>
                                            </div>
                                        </>
                                    </Parallax>
                                </div>
                            ))
                        }
                        <div className="mt-5"></div>
                        <Button  text={'Get Sterted Now'} icon={'arrow-right'} func={() => navigate('/Contact')}/>
                    </div>
                </div>

            </div>

        </section>
    )
}


