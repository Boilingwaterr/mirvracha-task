import { api } from "./../api/api";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";

const SET_COUNTRIES = "SET_COUNTRIES";
const SET_SIZE = "SET_SIZE";
const SET_ERROR = "SET_ERROR";
const SET_FETCHING = "SET_FETCHING";
const SET_INPUT_VALUE = "SET_INPUT_VALUE";

let initialState = {
  inputValue: "",
  list: null,
  listSize: 50,
  error: "",
  isFetching: false,
};

interface Action {
  inputValue: string;
  type: string;
  list?: [];
  error?: string;
  value?: number;
  isFetching: boolean;
}

const countries = (state = initialState, action: Action) => {
  switch (action.type) {
    case SET_COUNTRIES:
      return {
        ...state,
        list: action.list,
      };

    case SET_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case SET_SIZE:
      return {
        ...state,
        listSize: action.value,
      };

    case SET_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };

    case SET_INPUT_VALUE:
      return {
        ...state,
        inputValue: action.inputValue,
      };

    default:
      return state;
  }
};

export const setInputValue = (inputValue: string) => {
  return {
    type: SET_INPUT_VALUE,
    inputValue,
  };
};

export const setFetching = (isFetching: boolean) => {
  return {
    type: SET_FETCHING,
    isFetching,
  };
};

export const setSize = (value: number) => {
  return {
    type: SET_SIZE,
    value,
  };
};

const setError = (error: string) => {
  return {
    type: SET_ERROR,
    error,
  };
};

export const setCountries = (list: []) => {
  return {
    type: SET_COUNTRIES,
    list,
  };
};

export const getAllCountries = () => {
  return async (dispatch: Function) => {
    dispatch(setFetching(true));
    const result = await api.getAllCountries();
    dispatch(setCountries(result));
    dispatch(setFetching(false));
  };
};

export const getCountriesByName = (value: string) => {
  return async (dispatch: Function) => {
    if (!!value.trim()) {
      dispatch(setFetching(true));
      const result = await api.getCountryByName(value);
      if (result.status === 404) {
        dispatch(setError(result.message));
        dispatch(setFetching(false));
      } else {
        dispatch(setError(""));
        dispatch(setCountries(result));
        dispatch(setFetching(false));
      }
    } else {
      getAllCountries();
    }
  };
};

let reducers = combineReducers({
  countries,
});

export const store = createStore(
  reducers,
  compose(applyMiddleware(thunkMiddleware))
);
