
import AddButton from './AddButton'
import Form from './Form'
import SettingButtonOfBody from './SettingButtonOfBody.jsx'


const Nav = (
  {setActiveForm,cards, activeForm,addUrl,setActiveSetBody,closeAll,ShowType,setShowType}
  ) => {

  return (
    <nav>
        <SettingButtonOfBody
            setActiveSetBody={setActiveSetBody}
            closeAll={closeAll}
            ShowType={ShowType}
            />
          
        <div className="navRight">
          <label htmlFor="searchOption">Zaměření</label>
          <select  id='searchOption' className='radius' value={ShowType} onChange={(e)=>setShowType(e.target.value)}>
            {
              ['Vše',...new Set(cards.map(x=>x.type))].map(x=><option key={Math.random()}>{x}</option>)
            }
          </select>

        </div>
        <div className="navLeft">
            <AddButton setActiveForm={setActiveForm} closeAll={closeAll}/>
            {activeForm&&<Form setActiveForm={setActiveForm} addUrl={addUrl} closeAll={closeAll}/>}
            
        </div>
    </nav>
  )
}

export default Nav