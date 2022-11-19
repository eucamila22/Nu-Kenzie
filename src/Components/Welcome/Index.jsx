import React from 'react'
import ImageDiv from './ImageDiv'
import LogoNu from '../../assets/LogoNu.svg'

const Index = ({setState}) => {
  return (
    <div className='div-welcome App'>
        <div className='div-text'>
            <img src={LogoNu} alt="Logo Nu Kenzie" />     
            <p className='description-welcome'>Centralize o controle das suas finanças</p>
            <p>de forma rápida e segura</p>
            <button className='initial' onClick={() => setState(true)}>Iniciar</button>
        </div>
        <div>
            <ImageDiv />
        </div>
    </div>
  )
}

export default Index
