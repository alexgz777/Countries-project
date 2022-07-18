import axios from "axios";

export function getCountries() {
  return async function (dispatch) {
    try {
      const request = await axios.get("/countries");
      return dispatch({
        type: "GET_COUNTRIES",
        payload: request.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
}

export function getCountry(id) {
  return async function (dispatch) {
    const request = await axios.get(`/countries/${id}`);
    return dispatch({
      type: "GET_COUNTRY",
      payload: request.data,
    });
  };
}

export function searchCountry(name) {
  return {
    type: "SEARCH_COUNTRY",
    payload: name,
  };
}

export function getActivities() {
  return async (dispatch) => {
    try {
      const request = await axios.get("/activity");
      return dispatch({
        type: "GET_ACTIVITIES",
        payload: request.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
}

export function createActivity(payload) {
  return async (dispatch) => {
    const created = await axios.post(`/activity`, payload);
    dispatch({
      type: "CREATE_ACTIVITY",
      payload: created,
    });
  };
}
export function filterByActivity(payload) {
  return {
    type: "FILTER_BY_ACTIVITY",
    payload,
  };
}

export function filterByContinent(payload) {
  return {
    type: "FILTER_BY_CONTINENT",
    payload,
  };
}

export function orderByAlpha(payload) {
  return {
    type: "ORDER_BY_ALPHA",
    payload,
  };
}

export function orderByPopulation(payload) {
  return {
    type: "ORDER_BY_POPULATION",
    payload,
  };
}

export function reset(payload) {
  return {
    type: "RESET",
    payload,
  };
}
