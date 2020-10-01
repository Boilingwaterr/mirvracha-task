import * as React from "react";
import { useMemo, memo } from "react";

interface Props {
  list: [];
  listSize: number;
}

const MainContentComponent: React.FC<Props> = ({ list, listSize }) => {
  const countryList = useMemo(
    () =>
      list.map(({ name }, index) => {
        if (index <= listSize - 1) {
          return <p key={name}>{name}</p>;
        }
        return undefined;
      }),
    [list, listSize]
  );

  return <>{countryList}</>;
};

export const MainContent = memo(MainContentComponent);
