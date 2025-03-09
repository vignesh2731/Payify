export function Fields({label,placeholder,onChange}){
    return <div className="">
        <div className="font-bold pb-3">
            {label}
        </div>
        <div className="pb-3">
        <input onChange={onChange} className="border rounded w-100 h-10 pl-3 " placeholder={placeholder}/>
        </div>
    </div>
}