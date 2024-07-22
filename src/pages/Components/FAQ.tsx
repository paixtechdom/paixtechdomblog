import { useState } from "react"
import { Questions } from "../../assets/Constants"
import { Parallax } from "../../assets/components/Parallax"


export const 
FAQ = () => {
    const [ currentQuestion, setCurrentQuestion ] = useState(Questions[0].id)
    // react-helmet-async 
    return(
        <section id="FAQ" className="center flex-col py-[9ch] w-full">   
            <div className="center flex-col w-11/12 lg:w-10/12 xl:w-9/12 overflow-hidden mt-9">
                <Parallax id={'faq'} className={'w-full mb-[7vh] lg:w-9/12'}>
                    <h3 className="text-3xl w-full text-orange">Frequently Asked Questions (FAQ) </h3>

                </Parallax>

            
                <div className="center flex-col w-full gap-9 lg:w-9/12">
                    {
                        Questions.map((question, i) => (
                            <div key={i} className={`flex h-full w-full `}>
                                  <Parallax id={`questions${question.title[0]}${question.title[1]}`} className={'flex gap-2 w-full'}>

                                <div className={`flex flex-col w-full gap-3 border-b border-blue-900 p- 4 overflow-hidden h-fit`}>
                                    <div className="flex justify-between items-start gap-9 cursor-pointer"
                                        onClick={() => setCurrentQuestion(question.id == currentQuestion ? '' : question.id)}>
                                        <h3 className="text-orange text-opacity-90 text-xl">
                                            {question.title}
                                        </h3>
                                        <i className={`bi bi-${currentQuestion == question.id ? 'chevron-up eye-slash-fill' : 'chevron-down eye-fill'} text-2xl text-orange cursor-pointer bord er border-blue-600 center`} ></i>
                                    </div>


                                    <p className={`text-gray-100 tracking-wide leading-relaxed text-[15px] transition-all duration-500 bg-black bg-opacity-40 px-5 ${currentQuestion == question.id ? 'py-5' : 'h-0'}`}>{question.desc}</p>
                                </div>
                                </Parallax>
                            </div>
                        ))
                    }
                </div>


            </div>

        </section>
    )
}


