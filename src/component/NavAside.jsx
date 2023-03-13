import React from 'react'

const NavAside = ({ setFilTer }) => {
    return (
        <div className='box-filter'>
            <div className='title'>
                <p>Resumo financeiro</p>
                <div className='filter'>
                    <button onClick={() => setFilTer('Todos')}>Todos</button>
                    <button onClick={() => setFilTer('Entrada')}>Entrada</button>
                    <button onClick={() => setFilTer('Despesa')}>Despesa</button>
                </div>
            </div>
        </div>
    )
}

export default NavAside
