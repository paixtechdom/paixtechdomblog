import { BsBellFill } from "react-icons/bs"

export const NewsLetter = () => {
    return(
        <>
            <section className="flex flex-wrap gap-6 justify-between w-11/12 lg:w-10/12 xl:w-9/12">
                <div>
                    <h2 className="font-bold text-orange text-4xl">Subscribe to our newsletter</h2>
                    <p>Get fresh updates into your inbox to stay updated with trends tailored for you</p>

                </div>
                <form className="center flex-col md:flex-row items-center gap-4 w-full lg:w-fit lg:mt-9">
                    <input type="email" required placeholder="youremail@email.com" className="input w-full md:w-fit"/>
                    <button type="submit" className="flex items-center gap-4 btn bg-transparent border-blue-600">
                        <BsBellFill />
                        <span className="">Subscribe</span>
                        {/* buttondown, convertkit - for newsletter */}
                    </button>

                </form>
            </section>
        
        </>
    )
}