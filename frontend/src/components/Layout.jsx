import { Outlet } from "react-router-dom";

export function Layout() {
    return (
        <div className="relative">
            <div className="absolute top-4 left-4">
                <img src="/logo.png" className="h-25" alt="Payify Logo" />
            </div>
            <Outlet />
        </div>
    );
}
