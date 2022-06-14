import SettingButton from './SettingButton'


const Card = ({card,setActiveChangeCard,activeChangeCard,changeCard,setchanging,blank,closeAll}) => {
  return (
    <div className='card radius'>
        <SettingButton 
            card={card} 
            setActiveChangeCard={setActiveChangeCard}
            activeChangeCard={activeChangeCard}
            changeCard={changeCard}
            setchanging={setchanging}
            closeAll={closeAll}
            />
        <a href={card.url} target={blank} rel="noreferrer">
            
            <h3 style={{backgroundColor:card.bgcolor,color:card.color}} className='cardName' >{card.text}</h3>
        </a>
    </div>
  )
}
//_blank,_self,_parent
export default Card