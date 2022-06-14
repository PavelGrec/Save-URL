import React, { useState } from 'react'
import {ImCross} from 'react-icons/im'

const Form = ({addUrl,closeAll}) => {
    const [newtext,setnewtext]=useState('')
    const [newurl,setnewurl]=useState('')
    const [newtype,setnewtype]=useState('Media')
    const [newcolor,setnewcolor]=useState('#ffffff')
    const [newbgcolor,setnewbgcolor]=useState('#e60000')

    const [ok, setOk] = useState(true)

    function prevSub (e){
        
        setOk(true)
        e.preventDefault()
        {newtext!=='' && setOk(true)}
        //  vyresit podminku
        console.log(newtype);
        newtext!==''&&newurl!==''&&addUrl(newtext,newurl,newtype,newcolor,newbgcolor)
        newtext!==''&&newurl!==''&&setnewtext('')
        newtext!==''&&newurl!==''&&setnewurl('')
        newtext!==''&&newurl!==''&&setnewtype('Media')
        newtext!==''&&newurl!==''&&setnewcolor('#ffffff')
        newtext!==''&&newurl!==''&&setnewbgcolor('#e60000')
        newtext!==''&&newurl!==''&&closeAll()
        newtext!==''&&newurl!==''&&setOk(false)

    }
    function formcross(e){
        e.preventDefault()
        closeAll()
    }

  return (
    <div>
        <form className='form radius' onSubmit={prevSub}>
            <div className='smallnav'>
                <a href='0' className='cross' onClick={(e)=>formcross(e)}><ImCross/></a>
            </div>
            <label htmlFor="newtext">Vložit poznámku:</label>
            <input typeof='text' className='radius' id='newtext' value={newtext} type="text" placeholder='text' onChange={(e)=>setnewtext(e.target.value)}/>

            <label htmlFor="newurl">Vložit url Adresu:</label>
            <input typeof='text' className='radius' id='newurl' value={newurl} type="text" placeholder='URL adresa' onChange={(e)=>setnewurl(e.target.value)}/>

            <label htmlFor="newtype">Zaměření</label>
            <select className="radius" id='newtype' type="text" value={newtype} onChange={(e)=>setnewtype(e.target.value)}>
                <option value="Média">Media</option>
                <option value="Zprávy">Zprávy</option>
                <option value="Socialní">Sociální sítě</option>
                <option value="Zajímavosti">Zajimvosti</option>
                <option value="Na později">Na později</option>
            </select>

            <label htmlFor="newcolor">Barva písma:</label>
            <input className='radius' id='newcolor' type="color" value={newcolor} onChange={(e)=>setnewcolor(e.target.value)}/>

            <label htmlFor="newbgcolor">Barva Pozadí:</label>
            <input className='radius' id='newbgcolor' type="color" value={newbgcolor} onChange={(e)=>setnewbgcolor(e.target.value)}/>

            <input className='radius' type="submit"/>
        </form>
        
    </div>
  )
}
export default Form