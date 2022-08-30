import React from 'react'
import Mapa from './components/mapa/Mapa'
import './App.css'
import Rotas from './routes/Rotas'
import MenuMapas from './components/menuMapas/MenuMapas'

export default function App() {
    return (
        <>
            <MenuMapas />
            <Rotas />
        </>
    )
}
