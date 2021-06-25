// key constants
export const ESC_KEY = 27;
// endpoints
const API_URL = 'https://norma.nomoreparties.space/api/'
export const GET_INGREDIENTS_URL = API_URL + "ingredients";
export const POST_ORDER_URL = API_URL + "orders";
// tabs
export enum TABS_VALUE {
    BUNS = 'BUNS',
    SAUCES = 'SAUCES',
    TOPPINGS = 'TOPPINGS',
}