import { Outlet } from "react-router-dom";
import { Header } from "./Header/Header";
import { Nav } from "./Nav/Nav";
import { Footer } from "./Footer/Footer";

export function Layout() {
    return (<>
    <Header />
    <Nav />
    <Outlet />
    <Footer />
</>);
}