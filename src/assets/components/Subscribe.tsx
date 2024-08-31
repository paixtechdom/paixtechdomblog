import { useContext } from "react"
import { AppContext } from "../../App"
import { Button } from "./Button"

export const Subscribe = () => {
    const { setShowSubscribeForm }= useContext<any>(AppContext)

    return(
        <div className="center flex-col fixed top-0 left-0 w-full z-[40] mt -[12vh]">
            <div className="w-full lg:w-9/12 xl:w-10/12 flex flex-col"> 
                <iframe className="w-full min-h-[80vh]" src="https://39c6fb7d.sibforms.com/serve/MUIFAAQydXPyx5SAu71F6nidmmxdSqM68VitZVvE4xJC1kNBLQ03mnP0LIUpTmSZ7BKGtMkrxjd1dN_wzkmPUWn95QPcUNIpes3cmWfaL9Gd7JKJ8HkWyvu9hKXJPtk5ZGYODqOTzIU4yWfwR5hiIqQziHKlN8-ajf5UkzHEgf0Fp45x6EPkjjyroRslCmEiHK9eImW_LNKBzUS7"></iframe>    

                <Button 
                text="Close"
                func={() => setShowSubscribeForm(false)}
                className="w-fit mt-9"
                icon="x-circle-fill text-xl"
                />
            </div>
        </div>
    )
}

