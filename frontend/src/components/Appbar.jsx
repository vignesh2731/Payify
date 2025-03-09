import { Title } from "./Title";
import { Users } from "./Users";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function Appbar() {
    const navigate = useNavigate();
    const [balance, setBalance] = useState(0);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/signin");
            return;
        }

        axios.get("http://localhost:3000/api/v1/account/balance", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => {
            setBalance(res.data.balance.toFixed(2));
        }).catch(() => {
            navigate("/signin");
        });
    }, []);

    const handleLogout = () => {
        const confirmLogout = window.confirm("Are you sure you want to logout?");
        if (confirmLogout) {
            localStorage.removeItem("token");
            navigate("/signin");
        }
    }

    return (
        <div>
            <div className="flex justify-between pl-20 pr-10 p-1 shadow-sm">
                <div className="pl-7 pt-7"><Title label={"..."} /></div>
                <div className="flex pt-6">
                    <div className="text-gray-400 font-bold">
                        Your Balance: <b>${balance}</b>
                    </div>
                    <div 
                        className="text-black-500 font-bold cursor-pointer"
                        onClick={handleLogout}
                    >
                        &nbsp; &nbsp;Logout
                    </div>
                </div>
            </div>

            <div className="text-xl pt-5 pr-10 pl-10">
                <Users />
            </div>
        </div>
    );
}
