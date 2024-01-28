//Components
import Modal from 'react-modal';
import Comic from '../comic/comic';
//Commons imports
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { getCharacterById, getCharacterComics } from '../redux/actions/actions';
import { useDispatch, useSelector } from 'react-redux';
//Styles
import style from './popupfavorites.module.css';
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

export const Popupfavorites = ({ modalIsOpen, setIsOpen, openModal, closeModal, idCard }) => {
    let subtitle;
    const dispatch = useDispatch()
    const myFavorites = useSelector(state => state.myFavorites)
    const dataChar = useSelector(state => state.character)
    useEffect(() => {
        if (!dataChar.name) dispatch(getCharacterById(idCard))
        return () => {
        }
    }, [modalIsOpen])


    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function comicChar(myFavorites) {
        let char = myFavorites.filter(char => char.id === idCard) //personaje
        let listComics = char[0].comics    //comics del personaje
        return listComics.map(li => <Comic
            key={li[1]}   //KEY                       falta mejorar el filtrado de la informacion
            idComic={li[1]}      //ID                  que me da el backend para que no quede asi,
            title={li[2]}   //TITLE
            creators={li[3]}//CREATORS
            image={li[4]}   //IMAGE
            text={li[5]}       //TEXT
            idCard={idCard}
        />)

    }

    function close() {
        closeModal()
        dispatch(getCharacterById(""))
        dispatch(getCharacterComics(""))
    }

    function Afterclose() {
        dispatch(getCharacterById(""))
        dispatch(getCharacterComics(""))
    }



    return (
        <div className={modalIsOpen ? style.pupopView : style.pupopNone}>
            {dataChar.name && <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onAfterClose={Afterclose}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                shouldCloseOnOverlayClick={true}
            >
                <div className={style.conteinerPopupButtonExit}>
                    <button onClick={close}>X</button>
                </div>
                <div className={style.conteinerPopup}>
                    <h2 ref={(_subtitle) => (subtitle = _subtitle)}>{dataChar.name}</h2>
                    {myFavorites && myFavorites.length > 0 && comicChar(myFavorites)}
                </div>
            </Modal>}
        </div>
    );
}



