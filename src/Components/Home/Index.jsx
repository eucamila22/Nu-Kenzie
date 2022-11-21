import React, { useState } from 'react'
import Form from './Form'
import Header from './Header'
import Result from './Result'
import NavAside from './NavAside'
import ListCard from './ListCard'
import NoCardDiv from './NoCardDiv'


const Index = ({setRenderPage}) => {
    const [dados, setDados] = useState([])
    const [filTer, setFilTer] = useState('Todos')

    const filtered = dados.filter(elem => {
        if(filTer === 'Todos') {
            return true
        }else {
            return elem.valueSelect === filTer
        }
    })

    function handleRemove(dadoCard) {
        const filteredCard = dados.filter(card => card.description !== dadoCard)
        setDados(filteredCard)
    }

    return (
        <div>
            <div>
                <Header setRenderPage={setRenderPage}/>
            </div>
            <div className='container'>
                <div>
                    <Form setDados={setDados}/>
                    {
                        dados.length !== 0 && (<Result dados={dados}/>)
                    } 
                    
                </div>
                <div>
                <NavAside setFilTer={setFilTer} dados={dados}/>
                
                {
                    
                    filtered.map((dado, index) => (
                        <ListCard
                            key={index}
                            description={dado.description}
                            number={dado.number}
                            valueSelect={dado.valueSelect}
                            handleRemove={() => handleRemove(dado.description)}
                        />
                    ))
                }
                {
                    filtered.length === 0 && (<NoCardDiv dados={dados} />)
                } 
                </div>           
            </div>
        </div>
    )
}

export default Index
