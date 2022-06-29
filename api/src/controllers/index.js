const axios = require("axios");
const { Country, Activity } = require("../db");

const get_apiCountries = async () => {
  const getCountries = await axios
    .get("https://restcountries.com/v3/all")
    .then((results) => results.data);

  return getCountries.map((e) => {
    return {
      id: e.cca3,
      name: e.name.common,
      image: e.flags,
      capital: e.capital,
      languages: e.languages,
      currencies: e.currencies,
      continent: e.region,
      subregion: e.subregion,
      area: `${e.area} km2`,
      population: e.population,
    };
  });
};

const get_dbCountries = async () => {
  const getCountries = await Country.findAll();
  return getCountries;
};

const get_allCountries = async () => {
  const api = await get_apiCountries();
  const db = await get_dbCountries();
  return [...api, ...db];
};

////////////////////////////////////////////////////////////////

const get_id_Countries = async (id) => {
  const getCountries = await axios
    .get("https://restcountries.com/v3/all")
    .then((results) => results.data);

  const filteredById = getCountries.filter((e) => e.cca3 === id);

  return filteredById.map((e) => {
    return {
      id: e.cca3,
      name: e.name.common,
      image: e.flags,
      capital: e.capital,
      languages: e.languages,
      currencies: e.currencies,
      continent: e.region,
      subregion: e.subregion,
      area: `${e.area} km2`,
      population: e.population,
    };
  });
};

const get_db_Countries = async (idCountry) => {
  const getCountries = await Country.findOne({
    where: { id: idCountry },
    include: Activity,
  });
  return getCountries;
};

const get_db_allCountries = async (id) => {
  const db = await get_db_Countries(id);
  if (db) return db;
  else {
    const api = await get_id_Countries(id);
    return api;
  }
};

///////////////////////////////////////////////////////////////////////////////

const post_activity = async (name, difficulty, duration, season, country) => {
  const createActivity = await Activity.create({
    name,
    difficulty,
    duration,
    season,
    country,
  });

  const findCountry = await Country.findAll({
    where: {
      name: country,
    },
  });

  createActivity.addCountry(findCountry);

  return "The activity has been successfully added";
};

const getActivity = async () => {
  const getActivities = await Activity.findAll();
  return getActivities;
};

module.exports = {
  get_allCountries,
  post_activity,
  get_db_allCountries,
  getActivity,
};
