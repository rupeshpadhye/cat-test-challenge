import { DragEvent, Suspense, useState } from 'react';
import { Card } from '../../../types';
import { LazyImage } from '../../../components/LazyImage';
import cs from './Item.module.css';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Spinner from '../../../components/Spinner';

type CardProps = {
  card: Card;
  handleDrag: (e: DragEvent<HTMLDivElement>) => void;
  handleDrop: (e: DragEvent<HTMLDivElement>) => void;
};

const Item = ({ card, handleDrag, handleDrop }: CardProps) => {
  const [modalContent, setModal] = useState<Card | null>(null);

  const onOpenModal = (card: Card) => setModal(card);
  const onCloseModal = () => setModal(null);

  return (
    <>
      {modalContent ? (
        <Modal open={!!modalContent} onClose={onCloseModal} center>
          <h2>{modalContent?.title}</h2>
          <LazyImage
            src={
              modalContent?.image ||
              `https://cataas.com/cat?random=${modalContent?.position}`
            }
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </Modal>
      ) : null}
      <div
        id={card.type}
        draggable={true}
        onDragOver={(ev) => ev.preventDefault()}
        onDragStart={handleDrag}
        onDrop={handleDrop}
        className={cs.card}
        onClick={(e) => {
          e.preventDefault();
          onOpenModal(card);
        }}
      >
        <div className={cs.card_title}>{card.title}</div>
        <div className={cs.body}>
        <Suspense fallback={<div className={cs.loading_pic}><Spinner size="medium" /> </div>}>
          <LazyImage
            src={card.image || `https://cataas.com/cat?random=${card.position}`}
            className={cs.img}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </Suspense>
        </div>
       
      </div>
    </>
  );
};

export default Item;
