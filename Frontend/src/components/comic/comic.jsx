//Commons imports
import { useNavigate } from 'react-router-dom';
//Style
import style from './comic.module.css';


function Comic(props) {
const{thumbnail,id,title,textObjects}=props
const navigate = useNavigate()

const detailComic = () => {
    navigate(`/detailcomic/${id}`)
}

    return (
        <div onClick={detailComic} className={style.comicsChar}>
            {thumbnail && <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={title} />}
            <div className={style.comicsCharText}>
                <span>{title}<i class="fa-regular fa-star fa-xl"></i></span>
                {textObjects && textObjects.length > 0 && <p>{textObjects[0].text}</p>}
            </div>
        </div>
    );
}

export default Comic;