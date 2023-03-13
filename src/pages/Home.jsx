import React from 'react'
import LogoNu from '../assets/LogoNu.svg'
import IllustrationDiv from '../../src/assets/illustration.svg'

const Home = ({ setRenderPage }) => {
    return (
        <div className='container-home'>
            <div className='description-home'>
                <img src={LogoNu} alt='Logo Nu Kenzie' />
                <p>Centralize o controle das suas finanças</p>
                <p className=''>de forma rápida e segura</p>
                <button className='btn-initial' onClick={() => setRenderPage(true)}>
                    Iniciar
                </button>
            </div>
            <div className='img-home'>
                <img src={IllustrationDiv} alt='' />
            </div>
        </div>
    )
}

export default Home
