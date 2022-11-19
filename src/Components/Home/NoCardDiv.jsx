import React from 'react'
import NoCard from '../../assets/NoCard.svg'


const NoCardDiv = ({dados}) => {
  return (
    <div className="no-card">
        <p>Você ainda não possui nenhum lançamento</p>
        <img src={NoCard} alt="" />
    </div>
  )
}

export default NoCardDiv
