//Commons imports
import { useNavigate, useLocation } from 'react-router';
//Style
import imagelogo from '../../images/logomarvel.png';
import '@fortawesome/fontawesome-free/css/all.css'
import style from './searchbar.module.css'
import { useEffect } from 'react';

function ViewDetail({ linkImage, myFavorites }) {
    const navigate = useNavigate()

    useEffect(() => {

    }, [linkImage])

    return (<>
        <img onClick={() => { navigate('/home') }} src={imagelogo} alt='logo' className={style.logoBar} />
        <div className={style.separadorVertical}></div>
        <input
            value={linkImage}
        />
        {myFavorites.length > 0 && <span >{myFavorites.length}</span>}
        <button onClick={() => { navigate('/favourite') }}
            className={style.starBar}>
            <i class={ myFavorites.length > 0? "fa-solid fa-star fa-xl":"fa-regular fa-star fa-xl"}></i>
    </button >
    </>);
}

export default ViewDetail;