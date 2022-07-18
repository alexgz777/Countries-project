import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getCountry, reset } from "../redux/actions";
import "../styles/Details.css";

function Details() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const country = useSelector((state) => state.details);
  const activity = useSelector((state) => state.activity);

  useEffect(() => {
    dispatch(getCountry(id));
    dispatch(reset());
  }, [dispatch]);

  return (
    <>
      <Link className="button__link" to="/home">
        <button className="button__back">← Back</button>
      </Link>
      <div className="container">
        {country.length ? (
          <>
            <div className="details">
              <img
                className="details__img"
                src={country[0].image[0]}
                alt="flag"
              />
              <h2 className="details__name">{`${country[0].name}`}</h2>
              <h4 className="details__data">{`Capital: ${country[0].capital}`}</h4>
              <h4 className="details__data">{`Continent: ${country[0].continent}`}</h4>
              <h4 className="details__data">{`Subregion: ${country[0].subregion}`}</h4>
              <h4 className="details__data">{`Area: ${country[0].area}`}</h4>
              <h4 className="details__data">{`Population: ${country[0].population}`}</h4>

              <div className="activity">
                {activity.length ? (
                  <div>
                    <div className="activities">
                      <h2 className="activities__title">{`${activity[0].name[0].toUpperCase()}${activity[0].name.slice(
                        [1]
                      )}`}</h2>
                      <h4 className="activities__data">{`Difficulty: ${activity[0].difficulty} of 5`}</h4>
                      <h4 className="activities__data">{`Duration: ${activity[0].duration} hour(s)`}</h4>
                      <h4 className="activities__data">{`Season: ${activity[0].season}`}</h4>
                      <div className="separator"></div>
                    </div>
                  </div>
                ) : (
                  <p className="activities__loading">
                    The country has not registered activities
                  </p>
                )}
              </div>
            </div>
          </>
        ) : (
          <p className="details__loading">Loading...</p>
        )}
        ;
      </div>
    </>
  );
}

export default Details;
