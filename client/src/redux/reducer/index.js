const initialState = {
  country: [],
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
      };

    case "GET_ACTIVITIES":
      return {
        ...state,
        activity: action.payload,
      };
    ////////////////////////////////////////////////////////////////
    case "FILTER_BY_ACTIVITY":
      let filterActivity = country.filter((e) => action.payload === e.name);
      console.log(action.payload);
      console.log(filterActivity);

      return {
        ...state,
        country: filterActivity,
      };

    case "FILTER_BY_CONTINENT":
      let filterContinent;
      country = state.country;
      switch (action.payload) {
        case "Americas":
          filterContinent = country.filter((e) => e.continent === "Americas");
          break;
        case "Asia":
          filterContinent = country.filter((e) => e.continent === "Asia");
          break;
        case "Africa":
          filterContinent = country.filter((e) => e.continent === "Africa");
          break;
        case "Europe":
          filterContinent = country.filter((e) => e.continent === "Europe");
          break;
        case "Oceania":
          filterContinent = country.filter((e) => e.continent === "Oceania");
          break;
        case "Antarctic":
          filterContinent = country.filter((e) => e.continent === "Antarctic");
          break;
        default:
          filterContinent = country;
      }
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

    default:
      return state;
  }
}
export { rootReducer };
