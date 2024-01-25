import style from './home.module.css'
import Card from '../../components/card/card.component'
import { useDispatch,useSelector } from 'react-redux'
import { getCharacters } from '../../components/redux/actions/actions'
import { useEffect } from 'react'


function Home (props){
    const dispatch=useDispatch()
    const allCharacters=useSelector(state=>state.allCharacters)

    useEffect(()=>{
     if(allCharacters.length===0)dispatch(getCharacters())
    },[])
    
    const cards=(allCharacters)=>{
        return allCharacters.map(char=><Card
        key={char.id}
        id={char.id}
        name={char.name}
        image={`${char.thumbnail.path}.${char.thumbnail.extension}`}        
        />)
    }

    return(<div className={style.contenedorHome}>
     
     {allCharacters && allCharacters.length>0 && cards(allCharacters)}

    </div>)
}

export default Home