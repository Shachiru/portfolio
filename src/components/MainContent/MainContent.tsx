import {Route, Routes, useLocation} from "react-router-dom";
import {AnimatePresence} from "framer-motion";
import {Home} from "../../pages/Home/Home.tsx";
import {About} from "../../pages/About/About.tsx";
import {Projects} from "../../pages/Projects/Projects.tsx";
import {Contact} from "../../pages/Contact/Contact.tsx";

export function MainContent() {
    const location = useLocation();

    return (
        <main className="flex-1 bg-gray-900">
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>
            </AnimatePresence>
        </main>
    );
}