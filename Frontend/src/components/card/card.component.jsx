//Componets

//Commons imports
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { addFav, removeFav } from '../redux/actions/actions';
import { useDispatch } from 'react-redux';
import imagedefault from '../../images/default.jpg'
import '@fortawesome/fontawesome-free/css/all.css'
//Styles
import styles from './card.module.css';
import { useSelector } from 'react-redux';






function Card(props) {
    const { name, id, image, openModal } = props
    const [IsFav, setIsFav] = useState(false)
    const dispatch=useDispatch()
    const myFavorites=useSelector(state=>state.myFavorites)
    const comics=[]
    useEffect(() => {
        myFavorites && myFavorites.forEach((fav) => {
            if (fav.id === id) {
                setIsFav(true);
            }
        });
    }, [myFavorites, id]);

    const handleFavorite = (event) => {
        event.preventDefault();
        if (IsFav) {
            setIsFav(false);
            dispatch(removeFav(id));
        } else {
            setIsFav(true);
            console.log(comics)
            dispatch(addFav({ name, image, id,comics }));
        }
    }

    return (

        <div className={styles.DivCard}>
                <div className={styles.Divimg}>
                    <img onClick={() => { openModal(id) }} src={image ? image : imagedefault} alt={name} />
                </div>
                {
                IsFav ? (
                    <button className={styles.buttonFavorite} onClick={handleFavorite}><i class="fa-solid fa-star fa-xl"></i></button>
                ) : (
                    <button className={styles.buttonFavorite} onClick={handleFavorite}>{<i class="fa-regular fa-star fa-xl"></i>}</button>
                )
            }
                <div className={styles.Divtext}>
                    <h2 >{name}</h2>
                </div>
        </div>

    );
}

export default Card