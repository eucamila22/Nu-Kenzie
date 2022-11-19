import React from 'react'
import NoCardDiv from './NoCardDiv'

const NavAside = ({setFilTer, dados}) => {
  return (
    <div className='div-master-nav-aside'>
      <div className='nav-aside'>
        <p>Resumo financeiro</p>
        <div className="btn-nav-aside">
          <button onClick={() => setFilTer('Todos')}>Todos</button>
          <button onClick={() => setFilTer('Entrada')}>Entrada</button>
          <button onClick={() => setFilTer('Despesa')}>Despesa</button>
        </div>
      </div>
      {
        dados.length === 0 && (<NoCardDiv dados={dados} />)
      }      
    </div>
  )
}

export default NavAside
