import { Outlet } from "react-router-dom";
import SideBar from "../Dashboard/SideBar";
import { Helmet } from "react-helmet-async";


const Dasboard = () => {
    return (
        <div>
            <Helmet>
                <title>Beress||Dashboard</title>
            </Helmet>
            <SideBar></SideBar>

         
 
        </div>
    );
};

export default Dasboard;