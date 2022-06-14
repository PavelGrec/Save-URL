import { useState } from 'react'
import {ImCross} from 'react-icons/im'
import {MdDelete} from 'react-icons/md'

const ChangeCard = ({bin,cards,changing,setCards,setActiveChangeCard,closeAll}) => {
    const card = cards.find(x=>x.id===changing)
    const others = cards.filter(x=>x.id!==changing)
    const id = card.id
    const [newtext,setnewtext]=useState(card.text)
    const [newurl,setnewurl]=useState(card.url)
    const [newtype,setnewtype]=useState(card.type)
    const [newcolor,setnewcolor]=useState(card.color)
    const [newbgcolor,setnewbgcolor]=useState(card.bgcolor)

    

    function prevSub (e){
        const newOne = {id:id,text:newtext,url:newurl,type:newtype,color:newcolor,bgcolor:newbgcolor}
        e.preventDefault()
        // console.log(id);
        setCards([newOne,...others])
        localStorage.setItem('cards',JSON.stringify([newOne,...others]))
        setActiveChangeCard()
        closeAll()
    }
    function formcross(e){
        e.preventDefault()
        closeAll()
    }
    
  return (
    <div>
        <form className='form radius'>
            <div className='smallnav'>
                <a href='0' className='cross' onClick={(e)=>formcross(e)}><ImCross/></a>
                <a href='0' className='cross' onClick={(e)=>bin(e,changing)}><MdDelete/></a>
            </div>

            <label htmlFor="newtext">Vlož poznámku:</label>
            <input typeof='text' className='radius' id='newtext' value={newtext} type="text" placeholder='text' onChange={(e)=>setnewtext(e.target.value)}/>

            <label htmlFor="newurl">Vložit url Adresu:</label>
            <input typeof='text' className='radius' id='newurl' value={newurl} type="text" placeholder='URL adresa' onChange={(e)=>setnewurl(e.target.value)}/>

            <label htmlFor="newtype">Zaměření</label>
            <select className="radius" id='newtype' type="text" value={newtype} onChange={(e)=>setnewtype(e.target.value)}>
                <option value="media">Media</option>
                <option value="news">Zprávy</option>
                <option value="social">Sociální sítě</option>
                <option value="intrest">Zajimvosti</option>
                <option value="forlate">Na později</option>
            </select>

            <label htmlFor="newcolor">Barva písma:</label>
            <input className='radius' id='newcolor' type="color" value={newcolor} onChange={(e)=>setnewcolor(e.target.value)}/>

            <label htmlFor="newbgcolor">Barva Pozadí:</label>
            <input className='radius' id='newbgcolor' type="color" value={newbgcolor} onChange={(e)=>setnewbgcolor(e.target.value)}/>

            <input className='radius' type="submit" onClick={prevSub}/>
        </form>
        
    </div>
  )
}

export default ChangeCard