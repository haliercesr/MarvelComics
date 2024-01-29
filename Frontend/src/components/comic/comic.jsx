//Commons imports
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { addFav, addFavComic, removeFavComic } from '../redux/actions/actions';
import { useDispatch, useSelector } from 'react-redux';
//Style
import style from './comic.module.css';


function Comic(props) {

    const { image, idComic, title, text, creators, idCard,name,comics} = props

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [IsFav, setIsFav] = useState(false)
    const myFavorites = useSelector(state => state.myFavorites)

    useEffect(() => {
        if(myFavorites){
        let char = myFavorites.filter(char => char.id === idCard) //personaje
        
        if (char[0]) {
            let listComics = char[0].comics //lista de comics
            listComics.length > 0 && listComics.forEach((li) => {  //con esto comparo cada comic y me fijo si ya esta en favoritos
                if (li[1] === idComic) {                  //si ya esta en favoritos, la estrella se pone oscura
                    setIsFav(true);
                }
            });
        }
    }
    }, [myFavorites, idComic]);

    const detailComic = () => {
        navigate(`/detailcomic/${idComic}`)
    }

    const handleFavorite = async (event) => {
        event.preventDefault();
        if (IsFav) {
            setIsFav(false);
            dispatch(removeFavComic(idCard, idComic));
        } else {
            setIsFav(true);
            const fav = myFavorites.find(char => char.id === idCard);
            let id=idCard
            if(!fav) {
                await dispatch(addFav({ name, image, id}))
            }
            dispatch(addFavComic({ idCard, title, image, idComic, creators, text }));
        }
    }

    return (
        <div className={style.comicsChar}>
            {image && <img onClick={detailComic} src={image} alt={title} />}
            <div className={style.comicsCharText}>
                <span>{title}
                    {
                        IsFav ? (
                            <button className={style.btFavComic} onClick={handleFavorite}><i className="fa-solid fa-star fa-xl"></i></button>
                        ) : (
                            <button className={style.btFavComic} onClick={handleFavorite}>{<i className="fa-regular fa-star fa-xl"></i>}</button>
                        )
                    }
                </span>
                {text && text.length > 0 && <p>{text}</p>}
            </div>
        </div>
    );
}

export default Comic;