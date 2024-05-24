import cs from './Grid.module.css';
import type { Card, SwapCardsType } from '../../types';
import Item from './item';
import useCardDragDrop from '../../hooks/useCardDragDrop';
import Header from './Header';

const Grid = ({
  cards = [],
  handleCardSwap,
}: {
  cards: Card[];
  handleCardSwap: (params: SwapCardsType) => void;
}) => {
  const { handleDrag, handleDrop } = useCardDragDrop({
    cards,
    onDrop: (params: SwapCardsType) => {
      handleCardSwap(params);
    },
  });

  return (
    <>
      <Header />
      <div className={cs.wrapper}>
        {cards.map((d) => (
          <Item
            key={`key-${d.type}`}
            card={d}
            handleDrag={handleDrag}
            handleDrop={handleDrop}
          />
        ))}
      </div>
    </>
  );
};

export default Grid;
