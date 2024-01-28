//Component imports
import ViewHome from './viewHome';
import ViewFavourite from './viewFavourite';
import ViewDetail from './ViewDetail';
//Commons imports
import { useNavigate,useLocation } from 'react-router';
import { useSelector } from 'react-redux';
//Styles
import style from './searchbar.module.css';
import { useEffect } from 'react';

function SearchBar({handleChange,searchString,linkImage}) {
    const location = useLocation();
    const myFavorites=useSelector(state=>state.myFavorites)

    useEffect(()=>{

    },[myFavorites])

    return (<div className={style.searchbarContainer}>
          {location.pathname === '/home' && <ViewHome myFavorites={myFavorites} handleChange={handleChange} searchString={searchString}/>}
          {location.pathname === '/favourite' && <ViewFavourite myFavorites={myFavorites} />}
          {location.pathname.includes('/detailcomic/') && <ViewDetail myFavorites={myFavorites} linkImage={linkImage}/>}
        </div>);
}

export default SearchBar;

