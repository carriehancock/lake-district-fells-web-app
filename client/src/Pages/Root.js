import { Outlet } from "react-router-dom"
import Header from "../Components/Layout/Header"

function RootLayout() {

    return (
    <>
        <Header/>
        <Outlet/>
    </>
    
    ) 
};

export default RootLayout;