import React, { useEffect } from "react";
import { connect } from "react-redux";
import { SearchField } from "./components/SearchField";
import { MainContent } from "./components/MainContent";
import {
  getCountriesByName,
  getAllCountries,
  setSize,
  setInputValue,
} from "./redux/store";
import { Preloader } from "./components/Preloader";
import s from "./App.module.css";

const { app, list_container } = s;

interface Props {
  list: [];
  error: string;
  listSize: number;
  isFetching: boolean;
  getAllCountries: Function;
  getCountriesByName: Function;
  setSize: Function;
  setInputValue: Function;
  inputValue: string;
}

interface State {
  countries: {
    list: [];
    error: string;
    listSize: number;
    isFetching: boolean;
    inputValue: string;
  };
}

const AppComponent: React.FC<Props> = ({
  list,
  listSize,
  isFetching,
  error,
  getAllCountries,
  getCountriesByName,
  setSize,
  setInputValue,
  inputValue,
}) => {
  useEffect(() => {
    getAllCountries();
  }, [getAllCountries]);

  return (
    <div className={app}>
      <SearchField
        getCountriesByName={getCountriesByName}
        setSize={setSize}
        setInputValue={setInputValue}
        inputValue={inputValue}
      />
      {!!error ? (
        <h1>{error}</h1>
      ) : (
        (isFetching && <Preloader />) ||
        (list && (
          <div className={list_container}>
            <MainContent list={list} listSize={listSize} />
          </div>
        ))
      )}
    </div>
  );
};

const mapStateToProps = (state: State) => {
  return {
    list: state.countries.list,
    error: state.countries.error,
    listSize: state.countries.listSize,
    isFetching: state.countries.isFetching,
    inputValue: state.countries.inputValue,
  };
};

export const App = connect(mapStateToProps, {
  getAllCountries,
  getCountriesByName,
  setSize,
  setInputValue,
})(AppComponent);
