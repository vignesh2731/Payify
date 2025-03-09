import { BottomText } from "../components/BottomText";
import { Button } from "../components/Button";
import { Fields } from "../components/Fields";
import { SubTitle } from "../components/SubTitle";
import { Title } from "../components/Title";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export function Signin() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");  

    return (
        <div className="h-screen bg-slate-300 flex justify-center items-center relative">
            <div className="absolute top-4 left-4">
                <img src="/logo.png" className="h-25" alt="Payify Logo" />
            </div>
            <div className="bg-white w-[80%] sm:w-[50%] md:w-[40%] lg:w-[30%] rounded-2xl pb-10">
                <div className="text-center">
                    <Title label={"Sign in"} />
                    <SubTitle label={"Enter your credentials to access your account"} />
                </div>
                <div className="pl-7 pt-7">
                    <Fields 
                        label={"Username"} 
                        placeholder={"john@gmail.com"} 
                        onChange={(e) => setUsername(e.target.value)} 
                    />
                    <Fields 
                        label={"Password"} 
                        placeholder={"*******"} 
                        type="password" 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                </div>
                {error && (
                    <div className="text-red-500 text-center font-semibold mt-3">
                        {error}
                    </div>
                )}
                <div className="flex justify-center">
                    <Button onClick={async () => {
                        try {
                            const response = await axios.post("http://localhost:3000/api/v1/user/signin", {
                                username,
                                password
                            });
                            localStorage.setItem("token", response.data.token);
                            navigate("/");
                        } catch (err) {
                            setError("Invalid Credentials. Please try again.");
                        }
                    }} title={"Sign in"} />
                </div>
                <BottomText text={"Don't have an account? "} to={"/signup"} buttonText={"Signup"} />
            </div>
        </div>
    );
}
