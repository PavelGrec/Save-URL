import React from 'react'
import {AiTwotoneSetting} from 'react-icons/ai'

const SettingButtonOfBody = ({setActiveSetBody,closeAll}) => {
  function prevent(e){
    e.preventDefault()
    closeAll()
    setActiveSetBody(true)

  }
  
  return (
    <a href='https://google.com' className='settingButton' onClick={(e)=>prevent(e)}>
      <AiTwotoneSetting/>
    </a>
  )
}

export default SettingButtonOfBody