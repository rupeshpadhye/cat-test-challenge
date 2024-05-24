import axios from 'axios';
import { Card } from '../types';



export const API_BASE_URL = import.meta.env.VITE_APP_BASE_URL || 'http://localhost:3001';

export const getCards = () => axios.get(`${API_BASE_URL}/v1/cards`);

export const syncCards = (cards: Card[]) => axios.post(`${API_BASE_URL}/v1/cards`, { cards }, );


