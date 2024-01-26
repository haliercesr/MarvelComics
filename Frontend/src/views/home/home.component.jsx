//components
import Card from '../../components/card/card.component';
import { Popuphome } from '../../components/popupHome/popuphome';
import SearchBar from '../../components/searchbar/searchbar.component';
//Commons imports
import { useDispatch, useSelector } from 'react-redux';
import { getCharacters } from '../../components/redux/actions/actions';
import { useEffect, useState } from 'react';
//Styles
import style from './home.module.css';



function Home(props) {
  const dispatch = useDispatch()
  const allCharacters = useSelector(state => state.allCharacters)
  const [modalIsOpen, setIsOpen] = useState(false);
  const [idCard, setIdCard] = useState("");
  const [searchString, setSearchString] = useState('')

  const handleChange = (e) => {
    e.preventDefault();
    setSearchString(e.target.value)
  };

  function openModal(id) {
    setIsOpen(true);
    setIdCard(id)
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    if (allCharacters.length === 0) dispatch(getCharacters())
  }, [])

  const cards = (allCharacters) => {
    let search=allCharacters.filter(char=> {
    let name=char.name.trim().toLowerCase()
    return name.startsWith(searchString.toLowerCase()
    )})

    let cardsview=search===""?allCharacters:search;

    if(search.length===0){return <p>No hay resultados..</p>}

    return cardsview.map(char => <Card
      key={char.id}
      id={char.id}
      name={char.name}
      image={`${char.thumbnail.path}.${char.thumbnail.extension}`}
      openModal={openModal}
    />)
  }

  return (<>
    <SearchBar  handleChange={handleChange} searchString={searchString} />
    <div className={style.contenedorHome}>
      <Popuphome idCard={idCard} closeModal={closeModal} modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} openModal={openModal}></Popuphome>
      {allCharacters && allCharacters.length > 0 && cards(allCharacters)}
    </div>
  </>)
}

export default Home