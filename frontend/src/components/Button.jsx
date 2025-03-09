import { useNavigate } from "react-router-dom"
export function Button({title,onClick})
{
    return <div className="pt-5"> 
        <button onClick={onClick} className="text-center bg-black text-white w-50  h-10 rounded cursor-pointer">
        {title}
    </button>
    </div>
}