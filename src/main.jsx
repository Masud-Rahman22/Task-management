import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Router from './Routes/Router.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import { Toaster } from 'react-hot-toast';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DndProvider backend={HTML5Backend}>
    <QueryClientProvider client={queryClient}>
    <AuthProvider><RouterProvider router={Router} /></AuthProvider>
    </QueryClientProvider>
    </DndProvider>
    <Toaster position='top-right'></Toaster>
  </React.StrictMode>,
)
