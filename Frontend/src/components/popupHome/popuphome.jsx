//Components
import Modal from 'react-modal';
import Comic from '../comic/comic';
//Commons imports
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { getCharacterById, getCharacterComics } from '../redux/actions/actions';
import { useDispatch, useSelector } from 'react-redux';
//Styles
import style from './popuphome.module.css';
import '@fortawesome/fontawesome-free/css/all.css';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        overflowY: 'auto',
    },
    overlay: {
        backgroundColor: ' rgba(41, 41, 41, 0.815)' // Fondo del overlay (fondo detrás del modal)
    },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

export const Popuphome = ({ allCharacters ,modalIsOpen, setIsOpen, openModal, closeModal, idCard }) => {
    let subtitle;
    const dispatch = useDispatch()
    const comics = useSelector(state => state.comics)
   // const dataChar = useSelector(state => state.character)
   const [dataChar,setDataChar]=useState()
    useEffect(() => {
        if (!comics.name) dispatch(getCharacterComics(idCard))
        //if (!dataChar.name) {dispatch(getCharacterById(idCard))}
    if(!dataChar || !dataChar.name){
        let char=allCharacters.filter(ch=>ch.id===idCard)
        setDataChar(char[0])
    }
      
    }, [modalIsOpen])

    
    function comicChar(comics) {
        return comics.map(char => {
            if(char.thumbnail){
            return <Comic
            key={char.id}
            idComic={char.id}
            image={char.thumbnail.path+'.'+char.thumbnail.extension}
            text={char.textObjects[0]?char.textObjects[0].text:null}
            title={char.title}
            creators={char.creators.items}
            idCard={idCard}
            name={dataChar.name}
            comics={dataChar.comics}
            />
            }
        })
    }

    function close() {
        closeModal()
        dispatch(getCharacterById(""))
        dispatch(getCharacterComics(""))
    }

    function Afterclose() {
        dispatch(getCharacterById(""))
        dispatch(getCharacterComics(""))
        setDataChar()
    }



    return (
        <div className={modalIsOpen ? style.pupopView : style.pupopNone}>
             <Modal
                isOpen={modalIsOpen}
                onAfterClose={Afterclose}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                shouldCloseOnOverlayClick={true}
            >
                <div className={style.conteinerPopupButtonExit}>
                    <button onClick={close}>X</button>
                </div>
                {dataChar && <div className={style.conteinerPopup}>
                    <h2 ref={(_subtitle) => (subtitle = _subtitle)}>{dataChar.name}</h2>
                    {comics && comics.length > 0 && comicChar(comics)}
                </div>}
            </Modal>
        </div>
    );
}



