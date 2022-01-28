// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'
const apiRoot = 'http://localhost:5005';

export const getRestaurants = () => axios.get(`${apiRoot}/restaurants`);
export const getRestaurantById = restaurantId => axios.get(`${apiRoot}/restaurants/${restaurantId}`);