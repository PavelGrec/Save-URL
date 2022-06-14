import React from 'react'
import { useEffect } from 'react'

const AddButton = ({setActiveForm,closeAll}) => {


  function open(){
    closeAll()
    setActiveForm()


  }
  return (
    <button onClick={open} className='addButton radius'>
        Přidat
    </button>
  )
}

export default AddButton