const LOAD = 'cart/LOAD';
const CREATE = 'cart/CREATE';
const UPDATE = 'cart/UPDATE';
const REMOVE = 'cart/REMOVE';

export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case 'cart/LOAD': {
      return state;
    }
    case 'cart/CREATE': {
      return [...state, { ...action.meal, count: action.count }];
    }
    case 'cart/UPDATE': {
      const newCart = state.map(cart => {
        if (cart.id === action.meal.id) {
          return { ...cart, count: cart.count + action.count };
        } else {
          return { ...cart };
        }
      });

      return newCart;
    }
    case 'cart/REMOVE': {
      return;
    }
    default:
      return state;
  }
}

export function loadCart() {
  return { type: LOAD };
}

export function createCart(meal, count) {
  return { type: CREATE, meal, count };
}

export function updateCart(meal, count) {
  return { type: UPDATE, meal, count };
}

export function removeCart() {
  return { type: REMOVE };
}
