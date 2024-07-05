import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createHashRouter, RouterProvider } from "react-router-dom";
import Home from './Pages/Home/Home.jsx';

const router = createHashRouter([
    {
        path: "./Pages/Home/Home.jsx",
        element: <Home />,
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
