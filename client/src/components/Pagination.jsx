import React from "react";
import "../styles/Pagination.css";

export default function Pagination({ countriesPerPage, country, pages }) {
  const numberOfPages = [];

  for (let i = 1; i < Math.ceil(country / countriesPerPage); i++) {
    numberOfPages.push(i);
  }

  return (
    <ul className="pagination">
      <li className="pagination__ul">
        {numberOfPages?.map((number, key) => {
          return (
            <button
              className="pagination__ul--btn"
              onClick={() => pages(number)}
              key={key}
            >
              {number}
            </button>
          );
        })}
      </li>
    </ul>
  );
}
