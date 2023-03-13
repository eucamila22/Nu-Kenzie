import React, { useState } from 'react'

const Form = ({ setDados }) => {
    const [description, setDescription] = useState('')
    const [number, setNumber] = useState('')
    const [valueSelect, setValueSelect] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()

        const data = {
            description,
            number,
            valueSelect,
        }

        setDados((oldDados) => [...oldDados, data])

        setDescription('')
        setNumber('')
        setValueSelect('')
    }

    return (
        <form onSubmit={handleSubmit} className='form-home'>
            <div className='container-form'>
                <div className='box'>
                    <label htmlFor='description'>Descrição</label>
                    <input
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                        className='input'
                        type='text'
                        id='description'
                        placeholder='Digite aqui'
                    />
                </div>

                <span className='span'>Ex: Compra de roupas</span>

                <div className='box-value-option'>
                    <div className='box'>
                        <label htmlFor='value'>Valor (R$)</label>
                        <input
                            value={number}
                            onChange={(event) => setNumber(event.target.value)}
                            className='input'
                            type='text'
                            id='value'
                            placeholder='Digite aqui'
                        />
                    </div>

                    <div className='box'>
                        <label htmlFor='option'>Tipo de Valor</label>
                        <select
                            value={valueSelect}
                            onChange={(event) => setValueSelect(event.target.value)}
                            className='select'
                            id='option'
                        >
                            <option hidden>Selecione</option>
                            <option value='Entrada'>Entrada</option>
                            <option value='Despesa'>Despesa</option>
                        </select>
                    </div>
                </div>

                <button type='submit' className='btn-insert-value'>
                    Inserir Valor
                </button>
            </div>
        </form>
    )
}

export default Form
