import styles from './brecho.module.scss'
import { roupas } from './brecho.mock'
export default function Brecho() {
    const roupasArray = Object.values(roupas);

    return (
        <div className={styles.wrapper}>
            <div>
                <button></button>
                <button></button>
                <button></button>
            </div>
            <div className={styles.wrapperGrid}>
                {roupasArray.map((roupa,index) => (
                    <div key={index} className={styles.wrapperItem}>
                        <img width={130} src={`../../../public/Roupas/${roupa.id}/1.jpg`}></img>
                        <h2>{roupa.nome}</h2>
                        <span>{roupa.descricao}</span>
                        <span>{roupa.valor}</span>
                        
                    </div>
                ))}
            </div>
        </div>
    );
}