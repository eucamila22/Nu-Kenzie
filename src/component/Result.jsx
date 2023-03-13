import React from 'react'

const Result = ({ index, element, dados }) => {
    return (
        <div className='box-result'>
            <div className='result'>
                <p className='total-value-legend'>Valor Total</p>
                <p key={index} className='value'>
                    R$
                    {dados.reduce((acc, act) => {
                        return act.valueSelect === 'Entrada'
                            ? act.number * 1 + acc
                            : acc - act.number * 1
                    }, 0)}
                </p>
            </div>
            <span>O valor se refere ao saldo</span>
        </div>
    )
}

export default Result
