import {ImCross} from 'react-icons/im'
const AppSetting = ({setBlank,blank,setBodycolor,bodycolor,closeAll,setWhatSort,whatSort}) => {
    const body = document.querySelector(`body`)
    // body.style.backgroundColor=`${bodycolor}`
// const [sortopt, setsortopt] = useState('key')

    function prevent(e){
        e.preventDefault()
        localStorage.setItem('bodycolor',JSON.stringify(bodycolor))
        closeAll()
    }
    function formcross(e){
        e.preventDefault()
        closeAll()
    }
    

  return (
    <form className='form radius' onSubmit={prevent}>
        <div className='smallnav'>
            <a href='0' className='cross' onClick={(e)=>formcross(e)}><ImCross/></a>
        </div>
        <label htmlFor="backgroundOfPage">Pozadí stránky</label>
        <input type="color" id='backgroundOfPage' className='radius' value={bodycolor} onChange={(e)=>setBodycolor(e.target.value)}/>

        <label htmlFor="whereShowPage">Kde otevřít odkaz?</label>
        <select className='radius' id='whereShowPage' value={blank} onChange={(e)=>setBlank(e.target.value)}>
            <option value="_blank">V novém okně</option>
            <option value="_parent">Na pozadí</option>
        </select>
        <label htmlFor="KindOfSort">Seřazení odkazů?</label>
        <select onChange={(e)=>setWhatSort(e.target.value)} className="radius" id="KindOfSort" value={whatSort}>
            <option value="key">Od nejstarších</option>
            <option value="keyRev">Od nejnovějších</option>
            <option value="name">Podle abecedy</option>
        </select>

        <input className='submit radius' type="submit" value="Potvrdit"/>
    </form>
  )
}

export default AppSetting