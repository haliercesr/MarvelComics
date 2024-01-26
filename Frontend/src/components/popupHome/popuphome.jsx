//Components
import Modal from 'react-modal';
//Commons imports
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { getCharacterById,getCharacterComics } from '../redux/actions/actions';
import { useDispatch,useSelector } from 'react-redux';
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

export const Popuphome = ({ modalIsOpen, setIsOpen, openModal, closeModal, idCard }) => {
    let subtitle;
    const dispatch=useDispatch()
    const comics=useSelector(state=>state.comics)
    const dataChar=useSelector(state=>state.character)
    useEffect(() => {
       if(!comics.name) dispatch(getCharacterComics(idCard))
       if(!dataChar.name) dispatch(getCharacterById(idCard))
        return () => {
        }
    }, [modalIsOpen])


    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function comicChar(comics) {
        return comics.map(char => {
            return <div className={style.comicsChar}>
                {char.thumbnail && <img src={`${char.thumbnail.path}.${char.thumbnail.extension}`} alt={char.title} />}
                <div className={style.comicsCharText}>
                    <span>{char.title}<i class="fa-regular fa-star fa-xl"></i></span>
                    {char.textObjects && char.textObjects.length > 0 && <p>{char.textObjects[0].text}</p>}
                </div>
            </div>
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
                    {comics && comics.length > 0 && comicChar(comics)}
                </div>

            </Modal>}
        </div>
    );
}



