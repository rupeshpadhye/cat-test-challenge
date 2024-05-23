import axios from 'axios';
import { Card } from '../types';

let response = {
  data: [
    { type: 'bank-draft', title: 'Bank Draft', position: 0 },
    { type: 'bill-of-lading', title: 'Bill of Lading', position: 1 },
    { type: 'invoice', title: 'Invoice', position: 2 },
    { type: 'bank-draft-2', title: 'Bank Draft 2', position: 3 },
    { type: 'bill-of-lading-2', title: 'Bill of Lading 2', position: 4 },
  ],
};

export const API_BASE_URL = '/api';

export const getCards = () => Promise.resolve(response); //axios.get(`${API_BASE_URL}/cards`);

export const syncCards = (cards: Card[]) => {
  setTimeout(() => {
    console.log('inside timeout');
    response.data = cards;
  }, 1000);
};
//axios.post(`${API_BASE_URL}/cards`, { cards });
