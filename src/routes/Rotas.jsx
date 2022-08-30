import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AreasComuns from '../components/areasComuns/AreasComuns'
import Home from '../components/home/Home'

export default function Rotas() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/ac" element={<AreasComuns />} />
            </Routes>
        </>
    )
}