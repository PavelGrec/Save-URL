//Zaseknul jsem se u filrovani cards na plose

import './App.css';
import { useState,useEffect } from 'react';
import Cards from './components/Cards';
import Nav from './components/Nav';
import AppSetting from './components/AppSetting';
import { MdLightbulbOutline } from 'react-icons/md';
// import sumo from './function';
// useEffect(()=>setCards())
function App() {
  const [activeForm,setActiveForm] = useState(false)
  const [activeChangeCard,setActiveChangeCard] = useState(false)
  const [activeSetBody,setActiveSetBody] = useState(false)
  const [ShowType, setShowType] = useState('Vše')
  const [blank,setBlank]=useState('_blank')
  const [bodycolor,setBodycolor] = useState('#4f0e3c')
  const [id,setId]=useState(1003)
  const [cards, setCards] =useState([
    {id:1000,text:'seznam.cz',url:'https://www.seznam.cz/',type:'Média',color:'#b80e02',bgcolor:'#ffffff'},
    // {id:1001,text:'Atlas.cz',url:'https://atlas.centrum.cz/',type:'Média',color:'#093f80',bgcolor:'#abd1ff'},
    // {id:1002,text:'goole.cz',url:'https://www.youtube.com/',type:'Socialní',color:'#ffffff',bgcolor:'#b80e02'},
  ])

  useEffect(()=>
  
  {if(cards.length===0){

    if(JSON.parse(localStorage.getItem('cards'))!==null)
    return setCards(JSON.parse(localStorage.getItem('cards')))
    // if(JSON.parse(localStorage.getItem('id'))!==null)
    //   {{setId(JSON.parse(localStorage.getItem('Id')))}}
    // if(JSON.parse(localStorage.getItem('bodycolor'))!==null)
    //   {setBodycolor(JSON.parse(localStorage.getItem('bodycolor')))}
    }
    if(id===1003){
      if(JSON.parse(localStorage.getItem('id'))!==null){
        setId(JSON.parse(localStorage.getItem('Id')))
  
      }
    }
   
  }
  )

  function logIn(){
    
  }
  document.querySelector('body').style.backgroundColor=bodycolor

  function addUrl (newtext,newurl,newtype,newcolor,newbgcolor){
    setId(id+1)
    localStorage.setItem('id',JSON.stringify(id+1))
    const newUrl = {id:id,text:newtext,url:newurl,type:newtype,color:newcolor,bgcolor:newbgcolor}
    setCards([newUrl,...cards])
    sort()
    localStorage.setItem('cards',JSON.stringify([newUrl,...cards]))
  }

  function bin(e,bbb){
    e.preventDefault()
    closeAll()
    const newbros = cards.filter(x=>x.id!==bbb)
    setCards(newbros)
    localStorage.setItem('cards',JSON.stringify(newbros))
}
  function closeAll(e){
    setActiveForm(false)
    setActiveChangeCard(false)
    setActiveSetBody(false)
  }
  function compare(a,b) {
    if ( a.text < b.text ){return -1;}
    if ( a.text > b.text ){return 1;}
    return 0;}
  //sorts
  const [whatSort, setWhatSort] = useState('key')

  // function sortKey(){CardsShow.sort((a,b)=>a.id-b.id)}
  // function sortKeyReverse(){CardsShow.sort((a,b)=>b.id-a.id)}
  // function sortName(){CardsShow.sort(compare)}

  function sort(){
    if(whatSort==='key'){cards.sort((a,b)=>a.id-b.id)}
    if(whatSort==='name'){cards.sort(compare)}
    if(whatSort==='keyRev'){cards.sort((a,b)=>b.id-a.id)}
  }

  useEffect(sort)

  // whatSort==='key'&&sortKey()
  // whatSort==='name'&&sortName()
  // whatSort==='keyRev'&&sortKeyReverse()

  // sortKeyReverseactive&&sortKeyReverse()
  // sortNameactive&&sortName()

  return (
    <div className="App">
      <Nav 
        setActiveForm={()=>setActiveForm(true)} 
        addUrl={addUrl}
        activeForm={activeForm}
        setActiveSetBody={setActiveSetBody}
        closeAll={closeAll}
        cards={cards}
        ShowType={ShowType}
        setShowType={setShowType}
        
        />
      <Cards 
        cards={cards}
        addUrl={addUrl}
        setActiveChangeCard={()=>setActiveChangeCard(true)} 
        activeChangeCard={activeChangeCard}
        setCards={setCards}
        blank={blank}
        closeAll={closeAll}
        bin={bin}
        ShowType={ShowType}
        />

        {activeSetBody&&<AppSetting
        setBlank={setBlank}
        blank = {blank}
        setActiveSetBody={setActiveSetBody}
        setBodycolor={setBodycolor}
        bodycolor={bodycolor}
        closeAll={closeAll}
        setWhatSort={setWhatSort}
        whatSort={whatSort}
        ShowType={ShowType}
        setShowType={ShowType}
        />}
        
    </div>
  );
}

export default App;
