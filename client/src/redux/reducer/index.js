const initialState = {
  country: [],
  details: [],
  filters: [],
  activity: [],
};

function rootReducer(state = initialState, action) {
  let country = state.country;
  let orderedCountries = [...state.country];

  switch (action.type) {
    case "GET_COUNTRIES":
      return {
        ...state,
        country: action.payload,
        countryFilter: action.payload,
        filters: action.payload,
      };

    case "CREATE_ACTIVITY":
      return {
        ...state,
      };
    case "SEARCH_COUNTRY":
      let countryFound = country.filter(
        (e) => action.payload.toLowerCase() === e.name.toLowerCase()
      );
      return {
        ...state,
        country: countryFound,
      };

    case "GET_COUNTRY":
      return {
        ...state,
        country: action.payload,
        details: action.payload,
      };

    case "GET_ACTIVITIES":
      return {
        ...state,
        activity: action.payload,
      };

    case "FILTER_BY_ACTIVITY":
      let filterActivity = country.filter((e) => action.payload === e.name);
      return {
        ...state,
        country: filterActivity,
      };
    case "FILTER_BY_CONTINENT":
      let filterContinent;

      let filterCountry = state.country.filter(
        (i) => i.continent === action.payload
      );
      let filterfilter = state.filters.filter(
        (i) => i.continent === action.payload
      );
      if (filterCountry.length === 0) filterContinent = filterfilter;
      else filterContinent = filterCountry;
      return {
        ...state,
        country: filterContinent,
      };

    case "ORDER_BY_ALPHA":
      action.payload === "A-z"
        ? (orderedCountries = orderedCountries.sort((a, b) =>
            a.name > b.name ? 1 : a.name < b.name ? -1 : 0
          ))
        : (orderedCountries = orderedCountries.sort((a, b) =>
            a.name < b.name ? 1 : a.name > b.name ? -1 : 0
          ));

      return {
        ...state,
        country: orderedCountries,
      };

    case "ORDER_BY_POPULATION":
      action.payload === "MaxPopulation"
        ? (orderedCountries = orderedCountries.sort((a, b) =>
            a.population < b.population
              ? 1
              : a.population > b.population
              ? -1
              : 0
          ))
        : (orderedCountries = orderedCountries.sort((a, b) =>
            a.population > b.population
              ? 1
              : a.population < b.population
              ? -1
              : 0
          ));
      return {
        ...state,
        country: orderedCountries,
      };
    case "RESET":
      return {
        ...state,
        country: [],
        details: [],
      };
    default:
      return state;
  }
}
export { rootReducer };
