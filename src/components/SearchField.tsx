import * as React from "react";
import { useState, memo, useMemo } from "react";
import s from "./SearchField.module.css";

const { search_field, drop_down, search_form, drop_down_menu } = s;

interface Props {
  getCountriesByName: Function;
  setSize: Function;
  setInputValue: Function;
  inputValue: string;
}

const SearchFieldComponent: React.FC<Props> = ({
  getCountriesByName,
  setSize,
  setInputValue,
  inputValue,
}) => {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setInputValue(e.target.value);
    getCountriesByName(e.target.value);
  }
  console.log(inputValue);
  return (
    <form className={search_form}>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        className={search_field}
      />

      <SizeList setSize={setSize} />
    </form>
  );
};

export const SearchField = memo(SearchFieldComponent);

const SizeList: React.FC<{ setSize: Function }> = memo(({ setSize }) => {
  const [isShowMenu, setIsShowMenu] = useState<boolean>(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setSize(+e.target.value);
  }

  function handleMouseOver(): void {
    setIsShowMenu((prev: Boolean) => !prev);
  }

  const menuArr = ["10", "20", "50"];

  const menu = useMemo(
    () =>
      menuArr.map((num) => {
        return (
          <div key={`input-${num}`} className={drop_down_menu}>
            <input
              id={num}
              type="radio"
              value={num}
              name="size"
              onChange={handleChange}
            ></input>
            <label htmlFor={num}>{num}</label>
          </div>
        );
      }),
    [menuArr, handleChange]
  );

  return (
    <div onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOver}>
      <div className={drop_down}>list size</div>
      <div>{isShowMenu ? menu : undefined}</div>
    </div>
  );
});
