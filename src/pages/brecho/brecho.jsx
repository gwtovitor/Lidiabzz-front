import { useState, useEffect } from 'react';
import styles from './brecho.module.scss';
import { roupas } from './brecho.mock';

export default function Brecho() {
  const [roupasExibidas, setRoupasExibidas] = useState([]);

  useEffect(() => {
    setRoupasExibidas(Object.values(roupas).flatMap(Object.values));
  }, []);

  const handleExibirTodos = () => {
    setRoupasExibidas(Object.values(roupas).flatMap(Object.values));
  };

  const handleExibirInferiores = () => {
    setRoupasExibidas(Object.values(roupas.Inferiores));
  };

  const handleExibirSuperiores = () => {
    setRoupasExibidas(Object.values(roupas.Superiores));
  };

  return (
    <div className={styles.wrapper}>
      <div>
        <button onClick={handleExibirTodos}>Exibir Todos</button>
        <button onClick={handleExibirInferiores}>Apenas Inferiores</button>
        <button onClick={handleExibirSuperiores}>Apenas Superiores</button>
      </div>
      <div className={styles.wrapperGrid}>
        {roupasExibidas.map((roupa, index) => (
          <div key={index} className={styles.wrapperItem}>
            <img
              className={styles.imagem}
              width={130}
              src={`../../../public/Roupas/${roupa.id}/1.jpg`}
              alt={roupa.nome}
            />
            <span className={styles.title}>{roupa.nome}</span>
            <span className={styles.descricao}>{roupa.descricao}</span>
            <span className={styles.valor}>{roupa.valor}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
