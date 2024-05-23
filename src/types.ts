export type Card = {
  type: string;
  title: string;
  position: number;
  image?: string;
};

export type SwapCardsType = {
  from: Pick<Card, 'type' | 'position'>;
  to: Pick<Card, 'type' | 'position'>;
};
