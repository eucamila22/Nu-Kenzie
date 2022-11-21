import React from 'react'
import LogoNuHeader from '../../assets/LogoNuHeaders.svg'

const Header = ({setRenderPage}) => {

  return (
    <div className='div-master-header-home'>
      <div>
        <img src={LogoNuHeader} alt="" />
        <button className='btn-header-home' onClick={() => setRenderPage(false)}>Início</button>
      </div>
    </div>
  )
}

export default Header
