import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BottomText } from "../components/BottomText";
import { Button } from "../components/Button";
import { Fields } from "../components/Fields";
import { SubTitle } from "../components/SubTitle";
import { Title } from "../components/Title";
import axios from "axios";

export function SignUp(){
    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const navigate=useNavigate();


    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            navigate("/");  
        }
    }, []);

    return (
        <div className=" h-screen bg-slate-300 flex justify-center items-center">
            <div className="bg-white w-[80%] sm:w-[50%] md:w-[40%] lg:w-[30%] rounded-2xl pb-8">
                <div className="flex flex-col justify-center text-center pb-6">
                    <Title label={"SignUp"} />
                    <SubTitle label={"Enter your information to create an account"} />
                </div>
                <div className="pl-7 pb-5 pt-5">
                    <Fields onChange={e=>setFirstName(e.target.value)} label={"FirstName"} placeholder={"John"} />
                    <Fields onChange={e=>setLastName(e.target.value)} label={"LastName"} placeholder={"Cena"} />
                    <Fields onChange={e=>setUsername(e.target.value)} label={"Email"} placeholder={"xyz@gmail.com"} />
                    <Fields onChange={e=>setPassword(e.target.value)} label={"Password"} placeholder={"*********"} />
                    <div className="flex justify-center">
                        <Button onClick={async()=>{
                            try {
                                const response = await axios.post("http://localhost:3000/api/v1/user/signup",{
                                    username,
                                    password,
                                    firstName,
                                    lastName
                                });
                                localStorage.setItem("token",response.data.token);
                                navigate("/");
                            } catch(err) {
                                console.error("Signup failed", err);
                                navigate("/signin");
                            }
                        }} title={"Signup"} />
                    </div>
                </div>
                <BottomText text={"Already have an account? "} to={"/signin"} buttonText={"Login"} />
            </div>
        </div>
    );
}
