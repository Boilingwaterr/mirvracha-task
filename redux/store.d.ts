export declare const setInputValue: (inputValue: string) => {
    type: string;
    inputValue: string;
};
export declare const setFetching: (isFetching: boolean) => {
    type: string;
    isFetching: boolean;
};
export declare const setSize: (value: number) => {
    type: string;
    value: number;
};
export declare const setCountries: (list: []) => {
    type: string;
    list: [];
};
export declare const getAllCountries: () => (dispatch: Function) => Promise<void>;
export declare const getCountriesByName: (value: string) => (dispatch: Function) => Promise<void>;
export declare const store: import("redux").Store<import("redux").CombinedState<{
    countries: {
        inputValue: string;
        list: any;
        listSize: number;
        error: string;
        isFetching: boolean;
    };
}>, import("redux").AnyAction> & {
    dispatch: unknown;
};
