import React from 'react'
import {AiTwotoneSetting} from 'react-icons/ai'

const SettingButton = ({card, setActiveChangeCard,setchanging,setActiveSetBody,closeAll}) => {
  function prevent(e){
    e.preventDefault()
    closeAll()
    setActiveChangeCard()
    setchanging(card.id)
  }
  
  return (
    <a href='https://google.com' className='settingButton' onClick={(e)=>prevent(e)}>
      <AiTwotoneSetting/>
    </a>
  )
}

export default SettingButton