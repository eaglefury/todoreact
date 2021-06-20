import { useState } from 'react';
import { CardContext } from '../contexts/cardcontext';
const CardProvider = ({ children }) => {
  const cardState = {
    cards: [],
    updateCards: (cardsToUpdate) => {
      if (Array.isArray(cardsToUpdate)) {
        cardsToUpdate.forEach((card) => {
          const cardIndex = cards.findIndex((x) => x.id === card.id);
          if (cardIndex === -1) {
            cards[cardIndex] = card;
          } else {
            cards.push(card);
          }
        });
        setCards(cards);
      }
    },
  };

  const [cards, setCards] = useState(cardState);

  return <CardContext.Provider value={cards}>{children}</CardContext.Provider>;
};

export default CardProvider;
