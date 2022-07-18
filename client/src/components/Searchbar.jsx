import { useEffect } from "react";
import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { reset, searchCountry } from "../redux/actions";
import "../styles/Searchbar.css";

const Searchbar = () => {
  const dispatch = useDispatch();
  const [country, setCountry] = useState("");

  const handleInput = (e) => {
    setCountry(e.target.value);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchCountry(country));
  };
  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);
  return (
    <form className="searchbar">
      <input
        className="searchbar__input"
        onChange={(e) => handleInput(e)}
        type="text"
        placeholder="Type a country..."
      />
      <button
        className="searchbar__button"
        onClick={(e) => handleSearch(e)}
        type="submit"
      >
        Search
      </button>
    </form>
  );
};

export default Searchbar;
