import { DragEvent, useState } from 'react';
import { Card, SwapCardsType } from '../types';

const useCardDragDrop = ({
  cards,
  onDrop,
}: {
  cards: Card[];
  onDrop: (params: SwapCardsType) => void;
}) => {
  const [dragId, setDragId] = useState<string>();

  const handleDrag = (ev: DragEvent<HTMLDivElement>) => {
    setDragId(ev.currentTarget.id);
  };

  const handleDrop = (ev: DragEvent<HTMLDivElement>) => {
    if (ev.stopPropagation) {
      ev.stopPropagation();
    }

    const dragCard = cards.find((card) => card.type === dragId);
    const dropCard = cards.find((card) => card.type === ev.currentTarget.id);

    if (dragCard && dropCard) {
      onDrop({ from: dropCard, to: dragCard });
    }
  };

  return {
    handleDrag,
    handleDrop,
  };
};

export default useCardDragDrop;
