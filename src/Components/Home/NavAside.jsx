import React from 'react'

const NavAside = ({setFilTer, }) => {
  
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
    </div>
  )
}

export default NavAside
