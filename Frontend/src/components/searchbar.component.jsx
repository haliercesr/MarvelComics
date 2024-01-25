//Styles
import style from './searchbar.module.css';
import imagelogo from '../images/logomarvel.png';
import starimage from '../images/estrellavacia.png'
import '@fortawesome/fontawesome-free/css/all.css'

function SearchBar(props) {

    return (<div className={style.searchbarContainer}>
            <img src={imagelogo} alt='logo' className={style.logoBar} />
            <div className={style.separadorVertical}></div>
            <button>{<i class="fa-solid fa-magnifying-glass"></i>}</button>
            <input type="search" placeholder='Buscar' ></input>
            <div className={style.starBar}><i class="fa-regular fa-star"></i></div>
           
        </div>);
}

export default SearchBar;

