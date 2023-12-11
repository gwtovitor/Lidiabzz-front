// Fora da função Brecho
import styles from './itemModal.module.scss'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Modal({ onClose, item }) {
    if (!item) return null;
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    const imagens = [
        `../../../public/Roupas/${item.id}/1.jpg`,
        `../../../public/Roupas/${item.id}/2.jpg`

    ]

    const goToWpp = (roupa) => {
        const url = `https://api.whatsapp.com/send?phone=5581988820701&text=Ola%20gostei%20do%20item%20:%20${roupa.nome} ${item.descricao} ${item.valor} `;
        window.open(url, '_blank');

    }

    return (
        <div className={styles.divWrapper}>
            <div className={styles.modalOverlay} onClick={onClose}>
                <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                    {item.fotos > 1 ? <Carousel
                        arrows={true}
                        autoPlaySpeed={3000}
                        autoPlay={true}
                        draggable
                        infinite
                        responsive={responsive} className={styles.imagem}>
                        {imagens.map((imagem, index) => (
                            <img key={index} src={imagem} alt={`Imagem ${index + 1}`} />
                        ))}

                    </Carousel > : <img src={`../../../public/Roupas/${item.id}/1.jpg`}></img>}

                    <div className={styles.wrapperInfo}>
                        <span className={styles.modalTitle}>{item.nome}</span>
                        <span className={styles.modalDescricao}>{item.descricao}</span>
                        <span className={styles.modalValor}>{item.valor}</span>
                        <button onClick={() => { goToWpp(item) }} className={styles.btnComprar}>Comprar agora !</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
