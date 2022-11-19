import React from 'react'

const Result = ({index, element, dados}) => {
  return (
    
    <div className='div-master-result'>
        <div>
        <p className='texto-valor'>Valor Total</p>
        <span>O valor se refere ao saldo</span>
        </div>
        <div>
          <p key={index} className='total'>R$ {dados.reduce((acc, act) => acc + Number(act.number), 0)}</p>
        </div>
    </div>
    
  )
}

export default Result
