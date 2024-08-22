import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home'
import Comprar from './Components/Comprar/Comprar.jsx';
import Anunciar from './Components/Anunciar/Anunciar.jsx';
import Alugar from './Components/Alugar/Alugar.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
        {index: true, element: <Home/>},
        {path: "comprar", element: <Comprar/>},
        {path: "alugar", element: <Alugar/>},
        {path: "anunciar", element: <Anunciar/>},
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
