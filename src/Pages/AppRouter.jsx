import { Routes, Route } from "react-router-dom";
import SobreMi from "./SobreMi/SobreMi";
import Contacto from "./Contacto/Contacto";
import Proyectos from "./Proyectos/Proyectos";
import Home from "./Home/Home";
import CryptWord from "./Proyectos/CryptWord/CryptWord";
import NotesApp from "./Proyectos/NotesApp/NotesApp";
import ImageCompresor from "./Proyectos/ImageCompresor/ImageCompresor";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<SobreMi />} />
            <Route path="/Sobremi" element={<SobreMi />} />
            <Route path="/Contacto" element={<Contacto />} />
            <Route path="/Proyectos" element={<Proyectos />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/CryptWord" element={<CryptWord />} />
            <Route path="/NotesApp" element={<NotesApp />} />
            <Route path="/ImageCompresor" element={<ImageCompresor />} />
        </Routes>
    );
};

export default AppRouter;
