//Commons imports
import { useNavigate, useLocation } from 'react-router';
//Style
import imagelogo from '../../images/logomarvel.png';
import '@fortawesome/fontawesome-free/css/all.css'
import style from './searchbar.module.css'

function ViewHome({ handleChange, searchString }) {
    const navigate = useNavigate()

    return (<>
        <img onClick={() => { navigate('/home') }} src={imagelogo} alt='logo' className={style.logoBar} />
        <div className={style.separadorVertical}></div>
        <button >
            {<i class="fa-solid fa-magnifying-glass"></i>}
        </button>
        <input
            type="search"
            placeholder='Buscar'
            onChange={(e) => handleChange(e)}
            value={searchString}
        />
        <button onClick={() => { navigate('/favourite') }} className={style.starBar}><i class="fa-regular fa-star fa-xl"></i></button>
    </>);
}

export default ViewHome;