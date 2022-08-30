import React from 'react'
import casteloSabuk from './img/castelo-sabuk-profundezas-calabouco.png'
import cidadeBicheon from './img/cidade-bicheon.png'
import montanhaLunula from './img/montanha-lunula-sangue.png'
import planiceSerpentes from './img/planice-vale-serpentes.png'
import provinciaSabuk from './img/provincia-sabuk.png'
import valeGinko from './img/vale-ginko.png'
import valeSerpentes from './img/vale-serpentes.png'
import './AreasComuns.css'
import { useState } from 'react'
import { useEffect } from 'react'

export default function AreasComuns() {

    const [imagem, setimagem] = useState(cidadeBicheon)

    return (
        <>
            <h2 className='acH2'>Áreas Comuns</h2>
            <ul className='listaImgAc'>
                <li onClick={() => setimagem(cidadeBicheon)}>Cidade de Bicheon</li>
                <li onClick={() => setimagem(valeGinko)}>Vale Ginkco</li>
                <li onClick={() => setimagem(valeSerpentes)}>Vale das Serpentes</li>
                <li onClick={() => setimagem(planiceSerpentes)}>Planicie das Serpentes</li>
                <li onClick={() => setimagem(montanhaLunula)}>Montanha da Lunula</li>
                <li onClick={() => setimagem(provinciaSabuk)}>Provincia de Sabuk</li>
                <li onClick={() => setimagem(casteloSabuk)}>Castelo de Sabuk</li>
            </ul>
            <div className='palcoMapaAc'>
                <figure className='boxImgAc' >
                    <img className='imgAc' src={imagem} />

                </figure>
            </div>

        </>
    )
}
