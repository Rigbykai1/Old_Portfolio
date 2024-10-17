import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createHashRouter, RouterProvider } from "react-router-dom";
import Home from './Pages/Home/Home.jsx';
import Proyectos from './Pages/Proyectos/Proyectos.jsx';
import Contacto from './Pages/Contacto/Contacto.jsx';
import AppLayout from './Pages/AppLayout.jsx';
import NotesApp from './Pages/Proyectos/NotesApp/NotesApp.jsx';
import CryptWord from './Pages/Proyectos/CryptWord/CryptWord.jsx';
import ImageCompresor from './Pages/Proyectos/ImageCompresor/ImageCompresor.jsx';
import Servicios from './Pages/Servicios/Servicios.jsx';

const router = createHashRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Servicios",
        element: <Servicios />,
      },
      {
        path: "/Contacto",
        element: <Contacto />,
      },
      {
        path: "/Proyectos",
        element: <Proyectos />,
      },
      {
        path: "/NotesApp",
        element: <NotesApp />,
      },
      {
        path: "/CryptWord",
        element: <CryptWord />,
      },
      {
        path: "/ImageCompresor",
        element: <ImageCompresor />,
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)