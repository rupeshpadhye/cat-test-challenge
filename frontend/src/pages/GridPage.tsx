import { SwapCardsType } from './../types';
import Grid from './../containers/grid';
import { useGetGridCards, useSwapCards } from '../query/useGridQuery';
import Spinner from './../components/Spinner';

function GridPage() {
  const { data: response, isLoading } = useGetGridCards();
  const { mutate: swapCards } = useSwapCards();

  const handleCardSwap = (params: SwapCardsType) => {
    swapCards(params);
  };


  if (isLoading) {
    return (
      <div>
        <Spinner size="large" />
      </div>
    );
  }
  return (
    <>
      <Grid cards={response?.data || []} handleCardSwap={handleCardSwap} />
    </>
  );
}

export default GridPage;
