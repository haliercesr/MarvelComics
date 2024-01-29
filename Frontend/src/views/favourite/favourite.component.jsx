//components
import Card from '../../components/card/card.component';
import { Popupfavorites } from '../../components/popupFavorites/popupfavorites';
//Commons imports
import { addFav } from '../../components/redux/actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
//Styles
import style from './favourite.module.css'


function Favourite(props) {
    const dispatch = useDispatch()
    const myFavorites = useSelector(state => state.myFavorites)
    const [modalIsOpen, setIsOpen] = useState(false);
    const [idCard, setIdCard] = useState("");


    function openModal(id) {
        setIsOpen(true);
        setIdCard(id)
    }

    function closeModal() {
        setIsOpen(false);
    }

    useEffect(() => {
        dispatch(addFav({id:0}))
    }, [])

    const cards = (myFavorites) => {
       
        return myFavorites.map(char => <Card
            key={char.id}
            id={char.id}
            name={char.name}
            image={char.image}
            openModal={openModal}
        />)
    }

    return (<div className={style.contenedorFavourite}>
        <div className={style.contenedorCardsFav}>
            <Popupfavorites idCard={idCard} closeModal={closeModal} modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} openModal={openModal}/>
            {myFavorites && myFavorites.length > 0 && cards(myFavorites)}
        </div>
    </div>)
}

export default Favourite