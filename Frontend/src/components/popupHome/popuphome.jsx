import Modal from 'react-modal';
import React, { useEffect, useState } from 'react';
import style from './popuphome.module.css';
import axios from 'axios';
import '@fortawesome/fontawesome-free/css/all.css'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

export const Popuphome = ({ modalIsOpen, setIsOpen, openModal, closeModal, idCard }) => {
    let subtitle;
    const [dataChar, setData] = useState("")
    const [comics, setComics] = useState("")
    useEffect(() => {
        axios(`https://gateway.marvel.com/v1/public/characters/${idCard}?ts=1000&apikey=5f15e9db3871a39ded348aae25bfdffa&hash=b04eebb93204672cd6f26886dcf764e0`)
            .then(({ data }) => {
                if (data.data.results[0].name) {
                    setData(data.data.results[0]);
                } else {
                    window.alert('Error');
                }
            });
        axios(`https://gateway.marvel.com/v1/public/characters/${idCard}/comics?ts=1000&apikey=5f15e9db3871a39ded348aae25bfdffa&hash=b04eebb93204672cd6f26886dcf764e0`)
            .then(({ data }) => {
                if (data.data.results[0].id) {
                    setComics(data.data.results);
                } else {
                    window.alert('Error');
                }
            });
        return (() => {

        })
    }, [idCard])


    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function comicChar(comics) {
        return comics.map(char => {
            return <div className={style.comicsChar}>
                <img src={`${char.thumbnail.path}.${char.thumbnail.extension}`} alt={char.title} />
                <div className={style.comicsCharText}>
                    <span>{char.title}<i class="fa-regular fa-star fa-xl"></i></span>
                    {char.textObjects.length > 0 && <p>{char.textObjects[0].text}</p>}
                </div>
            </div>
        })
    }

    function close() {
        closeModal()
        setData("")
        setComics("")
    }



    return (
        <div className={modalIsOpen ? style.pupopView : style.pupopNone}>
                {dataChar.name && <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                    className={style.popupOverlay}
                    overlayClassName={style.popupContent}
                >
                    <div className={style.conteinerPopupButtonExit}>
                        <button className={style.closeButton} onClick={close}>X</button>
                    </div>
                    <div className={style.conteinerPopup}>
                        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>{dataChar.name}</h2>
                        {comics && comics.length > 0 && comicChar(comics)}
                    </div>

                </Modal>}
            </div>
    );
}



