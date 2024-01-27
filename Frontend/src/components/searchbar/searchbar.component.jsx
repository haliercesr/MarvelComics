//Component imports
import ViewHome from './viewHome';
import ViewFavourite from './viewFavourite';
import ViewDetail from './ViewDetail';
//Commons imports
import { useNavigate,useLocation } from 'react-router';
//Styles
import style from './searchbar.module.css';

function SearchBar({handleChange,searchString,linkImage}) {
    const location = useLocation();

    return (<div className={style.searchbarContainer}>
          {location.pathname === '/home' && <ViewHome handleChange={handleChange} searchString={searchString}/>}
          {location.pathname === '/favourite' && <ViewFavourite/>}
          {location.pathname.includes('/detailcomic/') && <ViewDetail linkImage={linkImage}/>}
        </div>);
}

export default SearchBar;

