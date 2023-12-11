// Brecho.js
import React, { useState, useEffect } from 'react';
import styles from './brecho.module.scss';
import { roupas } from './brecho.mock';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Modal from './itemModal/itemModal';

export default function Brecho() {
  const [roupasExibidas, setRoupasExibidas] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [itemSelecionado, setItemSelecionado] = useState(null);
  const [selected, setSelected] = useState('')
  useEffect(() => {
    setRoupasExibidas(Object.values(roupas).flatMap(Object.values));
    setSelected('todos')
  }, []);

  const handleExibirTodos = () => {
    setRoupasExibidas(Object.values(roupas).flatMap(Object.values));
    setSelected('todos')
  };

  const handleExibirInferiores = () => {
    setRoupasExibidas(Object.values(roupas.Inferiores));
    setSelected('saias')
  };

  const handleExibirSuperiores = () => {
    setRoupasExibidas(Object.values(roupas.Superiores));
    setSelected('tops')
  };

  const handleOpenModal = (item) => {
    setModalOpen(true);
    setItemSelecionado(item);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setItemSelecionado(null);
  };

  const buttonStyle = {
    display: 'none'
  };

  const properties = {
    prevArrow: <button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" /></svg></button>,
    nextArrow: <button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z" /></svg></button>
  }


  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperSelections}>
        <button className={`${styles.btnSelecions} ${selected === 'todos' ? styles.selected2 : ''}`}onClick={handleExibirTodos}>Exibir Todos</button>
        <button className={`${styles.btnSelecions} ${selected === 'saias' ? styles.selected2 : ''}`} onClick={handleExibirInferiores}>Saias</button>
        <button className={`${styles.btnSelecions} ${selected === 'tops' ? styles.selected2 : ''}`} onClick={handleExibirSuperiores}>Tops</button>
      </div>
      {modalOpen && (
        <Modal onClose={handleCloseModal} item={itemSelecionado} />
      )}
      <div className={styles.wrapperGrid}>
        {roupasExibidas.map((roupa, index) => (
          <div
            onClick={() => handleOpenModal(roupa)}
            key={index}
            className={styles.wrapperItem}
          >
            {roupa.fotos > 1 ?
              <Slide {...properties} className={styles.imagem}>

                <div
                  key={1}
                  className={styles.divSlider}
                  style={{ backgroundImage: `url(${`https://github.com/gwtovitor/Lidiabzz-front/blob/main/public/Roupas/${roupa.id}/1.jpg?raw=true`})` }}
                />
                <div
                  key={2}
                  className={styles.divSlider}
                  style={{ backgroundImage: `url(${`https://github.com/gwtovitor/Lidiabzz-front/blob/main/public/Roupas/${roupa.id}/2.jpg?raw=true`})` }}
                />

              </Slide> : <div
                key={1}
                className={styles.divSlider}
                style={{ backgroundImage: `url(${`https://github.com/gwtovitor/Lidiabzz-front/blob/main/public/Roupas/${roupa.id}/1.jpg?raw=true`})` }}
              />
            }

            <span className={styles.title}>{roupa.nome}</span>
            <span className={styles.descricao}>{roupa.descricao}</span>
            <span className={styles.valor}>{roupa.valor}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
