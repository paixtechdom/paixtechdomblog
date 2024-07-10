
// import { Link } from "react-router-dom"

import { NewsLetter } from "./NewsLetter"



const Footer = () => {
    return(
        <footer className="w-full center flex-col bg-secondary pt-[10vh] lg:pt-[15vh] border-t border-primary">
            <NewsLetter />
            <div className="justify-center w-full items-center text-center flex flex-col gap-3 mt-[10vh] py-6 text-white">
                <p className="w-full lg:w-fit">Copyright © {new Date().getFullYear()}</p>

                <p className="w-full lg:w-fit">All Rights Reserved </p>
            </div>
        </footer>
    )
}

export default Footer