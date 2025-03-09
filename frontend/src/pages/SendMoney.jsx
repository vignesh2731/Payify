import { useState } from "react";
import { Fields } from "../components/Fields";
import { Title } from "../components/Title";
import {useSearchParams} from "react-router-dom"
import axios from "axios";
export function SendMoney()
{
    const [searchParams]=useSearchParams();
    const id=searchParams.get("id");
    const [amount,setAmount]=useState(0);
    const name=searchParams.get("name");
    return <div className="h-screen bg-slate-300 flex justify-center items-center">
        <div className="bg-white w-[80%] sm:w-[50%] md:w-[40%] lg:w-[30%] rounded-2xl pb-10">
                <div className="text-center">
                    <Title label={"Send Money"}></Title>
                </div>
            <div className="flex items-center mt-10 pl-6">
                <div className="flex justify-center items-center w-12 h-12 bg-green-400 rounded-full">
                    <img
                    src={`https://api.dicebear.com/9.x/initials/svg?seed=${name[0]}`}
                    className="h-[90%] w-[90%] rounded-full"
                    />
                </div>
                <div className="font-bold text-xl  ml-3">{name}</div>
            </div>
            <div className="mt-1 pl-25">
                <span className="block font-semibold text-sm self-start">
                    Amount (in RS)
                </span>
                
            </div>
            <div className="pl-7">
                <Fields onChange={(e)=>{
                    setAmount(e.target.value);
                }} placeholder={"Enter amount"}></Fields>
            </div>
            <div className="pl-30 pt-10">
                <button onClick={()=>{
                    axios.post("http://localhost:3000/api/v1/account/transfer",{
                        to:id,
                        amount:amount
                    },{
                        headers:{
                            Authorization : "Bearer " + localStorage.getItem("token")
                        }
                    })
                }} className="bg-green-400 rounded-2xl h-17 w-50 ">Initiate Transfer</button>
            </div>
        </div>
    </div>
}