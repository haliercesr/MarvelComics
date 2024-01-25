import styles from './card.module.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.css'
import hulk from '../../images/hulk.jpeg'



function Card(props) {
    const { name, id, image } = props
    const[IsFav,setIsFav]=useState(false)
    const handleFavorite=(event)=>{
       
     }

    return (

        <div className={styles.DivCard}>
            <Link to={`/detailcomic/${id}`}>
                {
                    IsFav ? (
                        <button className={styles.buttonFavorite} onClick={handleFavorite}>❤️</button>
                    ) : (
                        <button className={styles.buttonFavorite} onClick={handleFavorite}>{<i class="fa-regular fa-star fa-xl"></i>}</button>
                    )
                }
                <div className={styles.Divimg}>
                    <img src={hulk} alt='' />
                </div>
                <div className={styles.Divtext}>
                    <h2 >Hulk</h2>
                </div>
            </Link>

        </div>

    );
}

export default Card