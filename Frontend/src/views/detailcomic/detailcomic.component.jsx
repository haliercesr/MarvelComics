import { useEffect, useState } from 'react';
import style from './detailcomic.module.css'
import { useParams } from 'react-router';
import { URLSERVER } from '../../../configURL';
import axios from 'axios';

function Detailcomic(props) {
    const [comic, setComic] = useState({})
    const { id } = useParams();

    useEffect(() => {
        !comic.id && axios(`${URLSERVER}/characters/comics/${id}`)
            .then((data) => { setComic(data.data[0]) })
            .catch(error => window.alert("error"))
        console.log(comic)
    }, [id, comic])

    return (<>
        {comic.id && <div className={style.contenedorDetailcomic}>
            <div className={style.ImagenComic}>
                <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} />
            </div>
            <div className={style.descriptionComic}>
                <h1>{comic.title}</h1>
                <h3>{`Published: ${comic.dates[0].date}`}</h3>
                {comic.creators.items.map(char => {
                    return <h3>{`${char.role}: ${char.name}`}</h3>
                })}
                <p>{comic.textObjects[0].text}</p>
            </div>

        </div>}
    </>)
}

export default Detailcomic