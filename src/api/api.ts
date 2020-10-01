export const api = {
  getAllCountries: async function () {
    return fetch("https://restcountries.eu/rest/v2/all")
      .then((result) => result.json())
      .catch((e) => {
        return new Error("Something went wrong. Pleae try again later.");
      });
  },
  getCountryByName: async function (value: String) {
    return fetch(`https://restcountries.eu/rest/v2/name/${value}`)
      .then((result) => result.json())
      .catch((e) => {
        return new Error("Something went wrong. Pleae try again later.");
      });
  },
};
