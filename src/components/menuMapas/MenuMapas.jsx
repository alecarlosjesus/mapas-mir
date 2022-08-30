import React from 'react'
import { Link } from 'react-router-dom'
import './MenuMapas.css'

export default function MenuMapas() {
    return (
        <div className="topnav">

            <Link to="/">Home</Link>
            <Link to="/ac">Áreas Comuns</Link>
            <a>Centro Espiritual</a>
            <a>Área de Fantasia</a>
            <a>Deserto de Fantasia</a>
            <a>Vales Ocultos</a>

        </div>
    )
}
