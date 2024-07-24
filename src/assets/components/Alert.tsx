import { FC, useEffect } from 'react'
import './Alert.css'
import { BiX } from 'react-icons/bi'


interface AlertInterface {
    alertMessage: string,
    setShowAlert: Function,
    alertType: string,
    showAlert: boolean
}

    export const Alert:FC<AlertInterface> = ({alertMessage, setShowAlert, alertType,showAlert }) =>{

    useEffect(() => {
        if(showAlert){
            setTimeout(() => {
                setShowAlert(false)
            }, 3000);
        }
    }, [showAlert])

    return(
      

        <div className={`fixed z-[500] transition-all duration-500 ease-in-out ${showAlert ? "bottom-[5vh] lg:bottom-[10vh]" : "-bottom-[15vh]"}  left-0 w-full center h-[10vh] lg:h-[12vh]`}>
            <div className={`bg-primary bg-opacity-40 backdrop-blur-2xl w-11/12 md:w-9/12 lg:w-7/12 xl:w-5/12 rounded-xl flex items-center justify-between h-full shadow-xl px-3
            border-b-[5px] lg:border-b-[10px] ${
            alertType == "success" ? "border-green-700" : "border-red-700"
            }
            `}>
            <p className="text-white lg:text-lg text-wrap">
                {alertMessage}
            </p>

            <BiX onClick={() => {
                setShowAlert(false)
            }} className="rounded-full bg-gray-200 mx-4 h-8 w-8 cursor-pointer text-zinc-700"/>

            </div>
        </div>
    )
}