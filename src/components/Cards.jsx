import React, { useState } from 'react'
import Card from './Card'
import ChangeCard from './ChangeCard'


const Cards = ({bin,cards,setActiveChangeCard,activeChangeCard,addUrl,
  setCards,blank,closeAll,ShowType}) => {

    const [changing,setchanging] = useState('')
    



  return (
    <div className='cards'>

        {cards.filter(x=>{if(ShowType==='Vše'){return cards} return x.type===ShowType})
        
        .map((x)=>
        <Card 
            key={x.id} 
            card={x} 
            setActiveChangeCard={setActiveChangeCard} 
            activeChangeCard={activeChangeCard}
            setchanging={setchanging}
            blank={blank}
            closeAll={closeAll}
            />
        )}
        {activeChangeCard&&<ChangeCard
        cards={cards}
        setActiveChangeCard={setActiveChangeCard}
        addUrl={addUrl}
        changing={changing}
        setCards={setCards}
        closeAll={closeAll}
        bin={bin}

        />}
    </div>
  )
}

export default Cards