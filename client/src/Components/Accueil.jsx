import Footer from "./Footer/Footer";
import Header from "./Headers/Header";
import Tunnel from "./Tunnel/Tunnel";
import {Suspense} from "react"
import Lights from "./Light/Lights";

export default function Accueil() {
    return (
        <>
            <Header/>
            <Lights/>
            <Suspense fallback={null}>
                <Tunnel/>
            </Suspense>
            <Footer/>
        </>
    );
}
