import styles from './card.module.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.css'
import imagedefault from '../../images/default.jpg'



function Card(props) {
    const { name, id, image } = props
    const[IsFav,setIsFav]=useState(false)
    const handleFavorite=(event)=>{
       
     }
     console.log(image)

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
                    <img src={image?image:imagedefault} alt={name} />
                </div>
                <div className={styles.Divtext}>
                    <h2 >{name}</h2>
                </div>
            </Link>

        </div>

    );
}

export default Card