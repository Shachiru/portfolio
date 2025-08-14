import './App.css'
import {Route, Routes} from "react-router-dom";
import {DefaultLayout} from "./components/DefaultLayout/DefaultLayout.tsx";

function App() {

    return (
        <>
            <Routes>
                <Route path="/*" element={<DefaultLayout/>}/>
            </Routes>
        </>
    )
}

export default App
