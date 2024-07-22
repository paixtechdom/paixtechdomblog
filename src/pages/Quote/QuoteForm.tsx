import { FC, useContext, useState } from "react"
import { AppContext } from "../../App"
import { FormInput } from "../Components/FormInput"
import { ServicesInfo } from "../../assets/Constants"
import axios from "axios"
import { Parallax } from "../../assets/components/Parallax"

export const QuoteForm = () => {
    const { setShowAlert, setAlertMessage, setAlertType, subject, setSubject } = useContext<any>(AppContext)


    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ message, setMessage ] = useState('')
    const [ service, setService ] = useState('')
    const [ nameError, setNameError ] = useState(false)
    const [ messageError, setMessageError ] = useState(false) 
    const [ isLoading, setIsLoading ] = useState(false) 

    const submitQuote = async (e : any) => {
        e.preventDefault()
        setIsLoading(true)
        const newName: any = name.split(' ').join('')
        const newMessage:any = message.split(' ').join('')
        if(newName.length < 5 || newName == 0){
            setNameError(true)
            setMessageError(false)
        }else if(newMessage.length < 5 || newMessage == 0){
            setMessageError(true)
            setNameError(false)
        }else{
            setMessageError(false)
            setNameError(false)

            const serviceId = 'service_xhn7c5e';
            const templateId = 'template_seeyysd';
            const publicKey = 'OB73Vlg7iLdz4EZD6';
         
            const data = {
                service_id: serviceId ,
                template_id: templateId,
                user_id: publicKey,
                 template_params: {
                    from_name: name,
                    from_email: email,
                    to_name: 'Oluwaferanmi Peace',
                    message: 
                    'SUBJECT  - ' + subject + ' -                        ' + 
                    'RELATED SERVICE  - ' + service + ' -                         ' + 
                    'MESSAGE - ' + message 
                }
            };
            await axios.post("https://api.emailjs.com/api/v1.0/email/send", data)
            .then(() => {
            setShowAlert(true)
            setAlertType('success')
            setIsLoading(false)
            setAlertMessage('Message sent successfully!')
            setName('')
            setEmail('')
            setMessage('')
            setService('')
        })
        .catch(() =>{
            setShowAlert(true)
            setIsLoading(false)
            setAlertType('error')
            setAlertMessage('Error sending message')
        })
     }
    }



    return(
        <form className="flex justify-center w-full " onSubmit={submitQuote}>
        
        <div className="w-11/12 lg:w-10/12 my-4 flex flex-col gap-7">
            <Parallax id='sendusamessage'>
                <h2 className="text-4xl text-orange -600">Get a quote now</h2>
            </Parallax>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <Parallax id={'formname'} className={'w-full'}>
                    <>
                    <FormInput label={'Name'} icon={'person-fill'} value={name} setValue={setName} type={'text'}/>
                    {
                        nameError ? 
                        <p className="text-red-600 p-2 px-4">Name is too short</p> : ''
                    }
                    </>
                </Parallax>

                <Parallax id={'formemail'} className={'w-full'}>
                    <FormInput label={'Email'} icon={'envelope-fill'} value={email} setValue={setEmail} type={'email'}/>
                </Parallax>

                <Parallax id={'forsubject'} className={'w-full'}>
                    <FormInput label={'Subject'} icon={'file-text'} value={subject} setValue={setSubject} type={'text'}/>
                </Parallax>
                
                <Parallax id={'selectservice'}>
                    <SelectOptions value={service} setValue={setService}/>
                </Parallax>
            </div>


            <Parallax id={'formmessage'} className={'w-full'}>
                <>
                    <div className="flex flex-col w-full relative text-gray-100 text-sm z-0 gap-4">
                    <label htmlFor="" className="bg-transparent px-4 flex items-center gap-3">
                    <i className={`bi bi-chat-dots-fill `}></i> 
                    
                    Message
                    </label>

                    <div className="flex border border-blue-900 rounded-2xl shadow-lg center w-full overflow-hidden">
                        <textarea placeholder="" className="bg-transparent bg-opacity-70 w-full p-3 pt-5 px-6 outline-none focus:initial" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
                        
                    </div>                
                    </div>

                    {
                        messageError ? 
                        <p className="text-red-600 p-2 px-4">Message is too short</p> : ''
                    }
                </>
            </Parallax>

            <Parallax id={'formsubmit'} className={'w-full'}>
                <button type="submit" disabled={isLoading} className={` bg-gradient-to-l from-[rgba(0,0,10)] via-[rgba(0,0,24)] to-[rgba(0,0,10)]  w-full pt-5 px-6 outline-none border border-blue-900 text-orange -600 rounded-2xl transition-all duration-1000 gap-3 text-xl p-3 center ${isLoading ? 'cursor-not-allowed' : 'cursor-pointer hover:scale-90'} focus:initial`}>
                    {
                        isLoading ? 'Processing...' : 'Submit'
                    }
                    {
                        isLoading ? '' : 
                    <i className="bi bi-cursor-fill"></i>
                    }

                </button>
            </Parallax>
        </div>
        </form>  
    )
}



const SelectOptions:FC<any> = ({value, setValue}) => {
    return(
        <div className="flex flex-col w-full relative text-gray-100 text-sm z-0 gap-4">
            <label htmlFor="" className="bg-transparent px-4 flex items-center gap-3">
                <i className={`bi bi-hdd-stack-fill`}></i> 
                Related Service
            </label>

            <div className="flex border border-blue-900 rounded-2xl shadow-lg center w-full overflow-hidden p-3 py-5 px-6">
                <select name="" id="" value={value} onChange={e => setValue(e.target.value)} className={`bg-transparent bg-opacity-70 w-full outline-none focus:initial flex ${value == '' ? 'text-gray-300' : ''}`} required>
                    <option value={''} className="outline-none bg-black text-gray-500 mb-2 pb-3" >Select a related service</option>

                    {
                        ServicesInfo.map((service, i)=> (
                            <option key={i} value={service.title} className="outline-none bg-black text-gray-200">{service.title}</option>
                        ))
                    }
                </select>
            </div>
        </div>
    )
}