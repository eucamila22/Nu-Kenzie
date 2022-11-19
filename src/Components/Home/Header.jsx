import React from 'react'
import LogoNuHeader from '../../assets/LogoNuHeaders.svg'

const Header = ({setState}) => {

  return (
    <div className='div-master-header-home'>
      <img src={LogoNuHeader} alt="" />
      <button className='btn-header-home' onClick={() => setState(false)}>Início</button>
    </div>
  )
}

export default Header
