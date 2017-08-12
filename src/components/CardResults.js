import React from 'react'
import CardResult from './CardResult'

const CardResults = ({cards}) => (
    <div>
        {cards.map((card, index)=>(
            <CardResult 
                key={card.id}
                index={index}
                card={card}
            />
        ))}
    </div>
)

export default CardResults