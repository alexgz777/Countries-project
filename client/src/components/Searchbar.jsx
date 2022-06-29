import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { searchCountry } from "../redux/actions";
import "../styles/Searchbar.css";

const Searchbar = () => {
  const dispatch = useDispatch();
  const [country, setCountry] = useState("");

  const handleInput = (e) => {
    e.preventDefault();
    setCountry(e.target.value);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchCountry(country));
  };

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
