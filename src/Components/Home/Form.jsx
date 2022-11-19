import React, { useState } from 'react'

const Form = ({setDados}) => {
    const [description, setDescription] = useState('')
    const [number, setNumber] = useState('')
    const [valueSelect, setValueSelect] = useState('')
    
    function handleSubmit(event) {
        event.preventDefault()

        const data = {
            description,
            number, 
            valueSelect
        }
        
        setDados(oldDados => [...oldDados, data])
        
        setDescription('')
        setNumber('')
        setValueSelect('')
    }

    
    return (
    <form onSubmit={handleSubmit} className='form-home'>
        <div className='df-column'>
            <label className='label-descricao' htmlFor="descricao">Descrição</label>
            <input value={description} onChange={event => setDescription(event.target.value)} className='input-descricao' type="text" id="descricao" placeholder='Digite aqui'/>
        </div>
        <span className='span'>Ex: Compra de roupas</span>
        <div className='div-input-select'>
            <div className='div-input-valor'>
                <label className='label-valor' htmlFor="valor">Valor</label>
                <input value={number} onChange={event => setNumber(event.target.value)} className='input-valor' type="text" id="valor" />
                <span className='rs'>R$</span>
            </div>
            <div className='div-select'>
                <label className='label-select' htmlFor="valor">Tipo de Valor</label>
                <select value={valueSelect} onChange={event => setValueSelect(event.target.value)} className='select'>
                    <option hidden>Selecione</option>
                    <option value="Entrada">Entrada</option>
                    <option value="Despesa">Despesa</option>
                </select>
            </div>
        </div>        
        <button type='submit' className='btn-form'>Inserir Valor</button>
        
    </form>
    
  )

}

export default Form
