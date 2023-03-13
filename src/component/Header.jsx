import React from 'react'
import LogoNuHeader from '../assets/LogoNuHeaders.svg'

const Header = ({ setRenderPage }) => {
    return (
        <div className='container-header'>
            <img src={LogoNuHeader} alt='' />
            <button className='btn-initial-header' onClick={() => setRenderPage(false)}>
                Início
            </button>
        </div>
    )
}

export default Header
