import React from 'react'
import { Link } from 'react-router-dom'
import './MenuMapas.css'

export default function MenuMapas() {
    return (
        <div className="topnav">

            <Link to="/">Home</Link>
            <Link to="/ac">Áreas Comuns</Link>
            <a href='#'>Centro Espiritual</a>
            <a href='#'>Área de Fantasia</a>
            <a href='#'>Deserto de Fantasia</a>
            <a href='#'>Vales Ocultos</a>

        </div>
    )
}
