//Commons imports
import { useNavigate, useLocation } from 'react-router';
//Style
import imagelogo from '../../images/logomarvel.png';
import '@fortawesome/fontawesome-free/css/all.css'
import style from './searchbar.module.css'

function ViewHome({myFavorites, handleChange, searchString }) {
    const navigate = useNavigate()

    return (<>
        <img onClick={() => { navigate('/home') }} src={imagelogo} alt='logo' className={style.logoBar} />
        <div className={style.separadorVertical}></div>
        <button >
            {<i className="fa-solid fa-magnifying-glass"></i>}
        </button>
        <input
            type="search"
            placeholder='Buscar'
            onChange={(e) => handleChange(e)}
            value={searchString}
        />
        {myFavorites.length>0 && <span >{myFavorites.length}</span>}
        <button
            onClick={() => { navigate('/favourite') }}
            className={style.starBar}>
            <i className={ myFavorites.length > 0? "fa-solid fa-star fa-xl":"fa-regular fa-star fa-xl"}></i>
        </button>
    </>);
}

export default ViewHome;