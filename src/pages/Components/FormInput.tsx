export const FormInput = ({label, icon, value, setValue, type}) => {
    return(
        <div className="flex flex-col w-full relative text-gray-100 text-sm z-0 gap-4">
        <label htmlFor="" className="bg-transparent px-4 flex items-center gap-3">
        {
            icon !== '' ? 
            <i className={`bi bi-${icon}`}></i> : ''
        } 
        {label} 
            </label>

        <div className="flex border border-blue-900 rounded-2xl shadow-lg center w-full overflow-hidden">
            <input type={type} placeholder="" className="bg-transparent bg-opacity-70 w-full p-3 py-4 px-6 outline-none focus:initial" value={value} onChange={(e) => setValue(e.target.value)} required/>
            

        </div>
    </div>
    )
}
