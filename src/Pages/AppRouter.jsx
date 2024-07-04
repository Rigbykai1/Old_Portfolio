import { Routes, Route } from "react-router-dom";
import SobreMi from "./SobreMi/SobreMi";
import Contacto from "./Contacto/Contacto";
import Proyectos from "./Proyectos/Proyectos";
import Home from "./Home/Home";
import CryptWord from "./Proyectos/CryptWord/CryptWord";
import NotesApp from "./Proyectos/NotesApp/NotesApp";
import ImageCompresor from "./Proyectos/ImageCompresor/ImageCompresor";

const AppRouter = () => {
    const Origin = "user-portfolio-iota.vercel.app"
    return (
        <Routes>
            <Route path={`${origin}/`} element={<SobreMi />} />
            <Route path={`${origin}/SobreMi`} element={<SobreMi />} />
            <Route path={`${origin}/Contacto`} element={<Contacto />} />
            <Route path={`${origin}/Proyectos`} element={<Proyectos />} />
            <Route path={`${origin}/Home`} element={<Home />} />
            <Route path={`${origin}/CryptWord`} element={<CryptWord />} />
            <Route path={`${origin}/NotesApp`} element={<NotesApp />} />
            <Route path={`${origin}/ImagesCompresor`} element={<ImageCompresor />} />
        </Routes>
    );
};

export default AppRouter;
