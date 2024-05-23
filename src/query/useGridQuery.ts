import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getCards, syncCards } from '../api';
import { Card, SwapCardsType } from '../types';
import { useSynchedAtAtom, useSynchedAtom } from '../atoms/useSyncAtom';

export const GRID_QUERIES = {
  GET_ALL_CARDS: 'GET_ALL_CARDS',
};

const getCardsAPI = async (): Promise<{
  data: Card[];
}> => {
  const response = await getCards();
  if (response?.data) {
    response.data.forEach((c) => {
      //@ts-ignore
      c.image = `https://cataas.com/cat?random=${c.position}`;
    });
  }
  return response;
};

const syncCardsAPI = async (cards: Card[]) => {
  const data = await syncCards(cards);
  return data;
};

export const useGetGridCards = () =>
  useQuery({
    queryKey: [GRID_QUERIES.GET_ALL_CARDS],
    queryFn: getCardsAPI,
  });

export const useSwapCards = () => {
  const queryClient = useQueryClient();
  const [, setSynched] = useSynchedAtom();

  return useMutation({
    mutationFn: (params: SwapCardsType) => {
      const { from, to } = params;
      const dragBoxOrder = from.position;
      const dropBoxOrder = to.position;

      //@ts-ignore
      const { data: cards } = queryClient.getQueryData([
        GRID_QUERIES.GET_ALL_CARDS,
      ]);

      const newCardState = cards
        .map((card: Card) => {
          if (card.type === from.type) {
            card.position = dropBoxOrder;
          }
          if (card.type === to.type) {
            card.position = dragBoxOrder;
          }
          return card;
        })
        .sort((a: Card, b: Card) => a.position - b.position);

      return newCardState;
    },
    onSuccess: (data) => {
      setSynched(false);
      queryClient.setQueryData([GRID_QUERIES.GET_ALL_CARDS], {
        data,
      });
    },
  });
};

export const useSyncCards = () => {
  const [isSynced, setSynched] = useSynchedAtom();
  const [, setSynchedAt] = useSynchedAtAtom();

  return useMutation({
    mutationFn: syncCardsAPI,
    onSuccess: () => {
      console.log('came in success');
      if (!isSynced) {
        setSynched(true);
        setSynchedAt(new Date());
      }
    },
  });
};
