// key constants
export const ESC_KEY = 27;
// endpoints constants
const API_URL = 'https://norma.nomoreparties.space/api/'
const API_AUTH_URL =  API_URL + 'auth/'

export const GET_INGREDIENTS_URL = API_URL + "ingredients";
export const POST_ORDER_URL = API_URL + "orders";
export const POST_REGISTER_URL = API_AUTH_URL + "register";
export const POST_LOGIN_URL = API_AUTH_URL + "login";
export const POST_LOGOUT_URL = API_AUTH_URL + "logout";
export const POST_TOKEN_URL = API_AUTH_URL + "token";
export const GET_PATCH_USER_DATA_URL = API_AUTH_URL + "user";
export const POST_PASSWORD_RESTORE_URL = API_URL + "password-reset";
export const POST_PASSWORD_RESTORE_RESET_URL = API_URL + "password-reset/reset";

// tabs constants
export enum TABS_VALUE {
    BUNS = 'BUNS',
    SAUCES = 'SAUCES',
    TOPPINGS = 'TOPPINGS',
}

// token constants
export const AUTH_EXPIRATION_TIME = 1200
export const AUTH_TOKEN_EXPIRED_MESSAGE = "jwt malformed";