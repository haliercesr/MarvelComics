//Commons imports
import { useNavigate, useLocation } from 'react-router';
//Style
import imagelogo from '../../images/logomarvel.png';
import '@fortawesome/fontawesome-free/css/all.css'
import style from './searchbar.module.css'

function ViewFavourite({myFavorites}) {
    const navigate = useNavigate()

    return (<>
        <img onClick={() => { navigate('/home') }} src={imagelogo} alt='logo' className={style.logoBar} />
        <div className={style.separadorVertical}></div>
        <button
            className={style.starBar}
            id={style.btViewFavourite}
            onClick={() => { navigate('/home') }}>
            {<i class="fa-solid fa-reply fa-xl"></i>}
        </button>
        {<span >{myFavorites.length}</span>}
        <button
            onClick={() => { navigate('/favourite') }}
            className={style.starBar}
            id={style.starBarviewFavourite}>
            <i class={ myFavorites.length > 0? "fa-solid fa-star fa-xl":"fa-regular fa-star fa-xl"}></i>
        </button>
    </>);
}

export default ViewFavourite;