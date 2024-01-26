//components
import Card from '../../components/card/card.component';
import {Popuphome} from '../../components/popupHome/popuphome';
//Commons imports
import { useDispatch,useSelector } from 'react-redux';
import { getCharacters } from '../../components/redux/actions/actions';
import { useEffect,useState } from 'react';
//Styles
import style from './home.module.css';



function Home (props){
    const dispatch=useDispatch()
    const allCharacters=useSelector(state=>state.allCharacters)
    const [modalIsOpen, setIsOpen] = useState(false);
    const [idCard, setIdCard] = useState("");

    function openModal(id) {
      setIsOpen(true);
      setIdCard(id)
    }

    function closeModal() {
        setIsOpen(false);
      }

    useEffect(()=>{
     if(allCharacters.length===0)dispatch(getCharacters())
    },[])
    
    const cards=(allCharacters)=>{
        return allCharacters.map(char=><Card
        key={char.id}
        id={char.id}
        name={char.name}
        image={`${char.thumbnail.path}.${char.thumbnail.extension}`}
        openModal={openModal}        
        />)
    }

    return(<div className={style.contenedorHome}>
     <Popuphome idCard={idCard} closeModal={closeModal} modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} openModal={openModal}></Popuphome>
     {allCharacters && allCharacters.length>0 && cards(allCharacters)}

    </div>)
}

export default Home