import {NavBar} from "../NavBar/NavBar.tsx";
import {MainContent} from "../MainContent/MainContent.tsx";
import {Footer} from "../Footer/Footer.tsx";

export function DefaultLayout() {
    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col">
            <NavBar/>
            <MainContent/>
            <Footer/>
        </div>
    );
}