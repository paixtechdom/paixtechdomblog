import { useContext, useState } from "react"
import { AppContext } from "../../App"
import { FormInput } from "../Components/FormInput"
import axios from "axios"
import { Parallax } from "../../assets/components/Parallax"

export const ContactForm = () => {
    const { setShowAlert, setAlertMessage, setAlertType, subject, setSubject } = useContext<any>(AppContext)


    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ message, setMessage ] = useState('')
    const [ nameError, setNameError ] = useState(false)
    const [ messageError, setMessageError ] = useState(false) 
    const [ isLoading, setIsLoading ] = useState(false) 


    const handleSubmit = async (e: any) =>{
        e.preventDefault()
        setIsLoading(true)
        const newName :any = name.split(' ').join('')
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
                    'SUBJECT  - ' + subject + ' - ' + 
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
            setSubject('')
        })
        .catch(() =>{
            setIsLoading(false)
            setShowAlert(true)
            setAlertType('error')
            setAlertMessage('Error sending message')
        })
     }
    }


    return(

        <form className="flex justify-center w-full " onSubmit={handleSubmit}>
        
        <div className="lg:w-10/12 w-11/12 my-4 flex flex-col gap-7">
            <Parallax id='sendusamessage'>
                <h2 className="text-4xl text-orange -600">Send Us a message now</h2>
            </Parallax>
            <Parallax id={'formname'} className={'w-full'}>
                <>
                <FormInput label={'Name'} icon={'person-fill'} value={name} setValue={setName} type={'text'}/>
                {
                    nameError ? 
                    <p className="text-red-600 p-2 px-4">Name is too short</p> : ''
                }
                </>
            </Parallax>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

                <Parallax id={'formemail'} className={'w-full'}>
                    <FormInput label={'Email'} icon={'envelope-fill'} value={email} setValue={setEmail} type={'email'}/>
                </Parallax>

                <Parallax id={'forsubject'} className={'w-full'}>
                    <FormInput label={'Subject'} icon={'file-text'} value={subject} setValue={setSubject} type={'text'}/>
                    
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
                <button type="submit" disabled={isLoading} className={` bg-gradient-to-l from-[rgba(0,0,10)] via-[rgba(0,0,24)] to-[rgba(0,0,10)] pt-5 px-6 outline-none border border-blue-900 text-orange -600 rounded-2xl w-full transition-all duration-1000 gap-3 text-xl p-3 center cursor-pointer hover:scale-90 focus:initial ${isLoading ? 'cursor-not-allowed' : 'cursor-pointer hover:scale-90'}`}>
                    {
                        isLoading ? 'Sending...' : 'Send Message'
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


