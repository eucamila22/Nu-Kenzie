import React from 'react'
import Trash from '../../assets/trash.svg'

const ListCard = ({description, number, valueSelect, handleRemove}) => {

    if (valueSelect === "Entrada") {
        return (
             <div className="list">
            <ul>
                <li>
                    <div className="div-one">
                        <p>{description}</p>
                        <small>{valueSelect}</small>
                    </div>
                    <div className="div-two">
                        <p>R$ {number},00</p>
                    </div>
                    <div className="div-tree">
                        <button className='btn-trash' onClick={handleRemove}><img src={Trash} alt="" /></button>
                    </div>
                </li>
            </ul>
        </div>
        );
    }
   
    return (
        <div className="list-negative">
            <ul>
                <li>
                    <div className="div-one">
                        <p>{description}</p>
                        <small>{valueSelect}</small>
                    </div>
                    <div className="div-two">
                        <p>R$ {number},00</p>
                    </div>
                    <div className="div-tree">
                        <button className='btn-trash' onClick={handleRemove}><img src={Trash} alt="" /></button>
                    </div>
                </li>
            </ul>
        </div>
  )
}

export default ListCard
