import { data as localData } from "../mocks/data";

const initialState = {
  language: 'en',
  darkMode: false,
  content: null,
  loading: true,
  error: null
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LANGUAGE':
      return {
        ...state,
        language: action.payload,
        content: state.allData ? state.allData[action.payload] : null
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        allData: action.payload,
        content: action.payload[state.language],
        loading: false
      };
    case 'FETCH_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload,
        content: localData[state.language]
      };
    case 'TOGGLE_DARK_MODE':
      return {
        ...state,
        darkMode: action.payload
      };
    default:
      return state;
  }
};