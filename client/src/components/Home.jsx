import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getCountries,
  filterByActivity,
  filterByContinent,
  orderByAlpha,
  orderByPopulation,
  getActivities,
} from "../redux/actions";

import Card from "./Card";
import Pagination from "./Pagination";
import "../styles/Home.css";
const imgNotFound = require("../assets/not-found-image.jpg");

export default function Home() {
  const dispatch = useDispatch();
  const country = useSelector((state) => state.country);
  const activity = useSelector((state) => state.activity);
  const [Order, setOrder] = useState("");

  //filter & order//
  function handleClick(e) {
    e.preventDefault();
    dispatch(getCountries());
  }
  function handleFilterActivity(e) {
    dispatch(filterByActivity(e.target.value));
  }
  function handleFilterContinent(e) {
    dispatch(filterByContinent(e.target.value));
  }

  function handleOrderAlpha(e) {
    e.preventDefault();
    dispatch(orderByAlpha(e.target.value));
    setCurrentPage(1);
    setOrder(`Ordered ${e.target.value}`);
  }
  function handleOrderPopulation(e) {
    e.preventDefault();
    dispatch(orderByPopulation(e.target.value));
    setCurrentPage(1);
    setOrder(`Ordered ${e.target.value}`);
  }

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

  //pagination//
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage, setCoutriesPerPage] = useState(9);

  const lastCountry = currentPage * countriesPerPage;
  const firstCountry = lastCountry - countriesPerPage;
  const currentCountries = country.slice(firstCountry, lastCountry);

  const pages = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container">
      <form className="filterOrder">
        <label className="filterOrder__label">Filter by activity:</label>
        <select
          className="filterOrder__select"
          onChange={(e) => handleFilterActivity(e)}
        >
          <option value="--">--</option>
          {activity?.map((e) => {
            return (
              <option key={e.id} value={e.country}>
                {e.name}
              </option>
            );
          })}
        </select>

        <label className="filterOrder__label">Filter by continent:</label>
        <select
          className="filterOrder__select"
          onChange={(e) => handleFilterContinent(e)}
        >
          <option value="--">--</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Africa">Africa</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
          <option value="Antarctic">Antarctic</option>
        </select>

        <label className="filterOrder__label">Order alphabetically:</label>
        <select
          className="filterOrder__select"
          onChange={(e) => handleOrderAlpha(e)}
        >
          <option value="--">--</option>
          <option value="A-z">A-z</option>
          <option value="z-A">z-A</option>
        </select>

        <label className="filterOrder__label">Order by population:</label>
        <select
          className="filterOrder__select"
          onChange={(e) => handleOrderPopulation(e)}
        >
          <option value="--">--</option>
          <option value="MaxPopulation">Max Population</option>
          <option value="MinPopulation">Min Population</option>
        </select>
      </form>

      <Pagination
        countriesPerPage={countriesPerPage}
        country={country.length}
        pages={pages}
      />

      <div className="cards">
        {currentCountries?.map((e) => {
          return (
            <Card
              id={e.id}
              key={e.id}
              image={e.image[1] ? e.image[1] : imgNotFound}
              name={e.name}
              continent={e.continent}
            />
          );
        })}
      </div>

      <button
        className="button__reload"
        onClick={(e) => {
          handleClick(e);
        }}
      >
        Reload
      </button>

      <Pagination
        countriesPerPage={countriesPerPage}
        country={country.length}
        pages={pages}
      />
    </div>
  );
}
