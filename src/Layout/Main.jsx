import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";

const Main = () => {
    return (
        <div className="flex">
            <Sidebar></Sidebar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;