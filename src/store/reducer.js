import { data } from "../mocks/data";

const initialState = {
  language: 'en',
  darkMode: false,
  content: data.en
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LANGUAGE':
      return {
        ...state,
        language: action.payload,
        content: data[action.payload]
      };
    case 'TOGGLE_DARK_MODE':
      return {
        ...state,
        darkMode: !state.darkMode
      };
    default:
      return state;
  }
};