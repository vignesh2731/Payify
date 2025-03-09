import React from "react"
import {Link} from "react-router-dom"
export function BottomText({text,to,buttonText}){
    return <div className="pl-34">
        <span>{text}</span>
        <Link className="underline" to={to}>{buttonText}</Link>
    </div>
}