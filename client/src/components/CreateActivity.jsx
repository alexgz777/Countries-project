import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createActivity, getCountries } from "../redux/actions";
import "../styles/CreateActivity.css";

function CreateActivity() {
  const country = useSelector((state) => state.country);
  const dispatch = useDispatch();

  //////////////////////////////////////////////////////
  const initialState = {
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    country: [],
  };

  const [form, setForm] = useState(initialState);

  const handleOnChange = (e) => {
    e.preventDefault();
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  ////////////////////////////////////////////////////////
  const [error, setError] = useState({});

  const handleValidate = (inputs) => {
    const errors = {};
    if (!inputs.name) {
      errors.name = "Should write an name of activity";
    } else if (inputs.name.typeOf(!"string")) {
      errors.name = "Write a valid name of activity";
    }

    if (!inputs.duration) {
      errors.duration = "Should write duration of activity";
    } else if (inputs.name.typeOf(!"number")) {
      errors.name = "Write a valid name of activity";
    } else if (inputs.duration > 24) {
      errors.duration = "The activity must have less the 24 hours";
    }
    return errors;
  };
  ////////////////////////////////////////////////////////
  const handleSelect = (e) => {
    setForm({
      ...form,
      country: [...form.country, e.target.value],
    });
  };

  const [isSumbit, setIsSumbit] = useState(false);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setError(handleValidate(form));
    setForm(true);

    dispatch(createActivity(form));
    alert("Your activity was created succesfully");
    setForm(initialState);
  };

  useEffect(() => {
    if (Object.keys(form).length === 0 && isSumbit) {
      //
    }
  }, [error]);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  return (
    <form className="create">
      <label>Name:</label>
      <input
        className="create__input"
        value={form.name}
        name="name"
        type="input"
        onChange={(e) => handleOnChange(e)}
      />
      <p>{error.name}</p>
      <label>Difficulty:</label>
      <select
        className="create__select"
        value={form.difficulty}
        name="difficulty"
        onChange={(e) => handleOnChange(e)}
      >
        <option value={"--"}>--</option>
        <option value={"1"}>1</option>
        <option value={"2"}>2</option>
        <option value={"3"}>3</option>
        <option value={"4"}>4</option>
        <option value={"5"}>5</option>
      </select>
      <label>Duration:</label>
      <input
        placeholder="hour(s)"
        value={form.duration}
        name="duration"
        className="create__input"
        type="input"
        onChange={(e) => handleOnChange(e)}
      />
      <p>{error.duration}</p>
      <label>Season:</label>
      <select
        className="create__select"
        value={form.season}
        name="season"
        onChange={(e) => handleOnChange(e)}
      >
        <option value={"--"}>--</option>
        <option value="Summer">Summer</option>
        <option value="Autumn">Autumn</option>
        <option value="Winter">Winter</option>
        <option value="Spring">Spring</option>
      </select>

      <label>Country/countries:</label>
      <select className="create__select" onChange={(e) => handleSelect(e)}>
        <option value={"--"}>--</option>
        {country?.map((e) => {
          return (
            <option key={e.id} value={e.name}>
              {e.name}
            </option>
          );
        })}
      </select>
      <ul className="countriesSelected">
        <li className="countriesSelected__list">
          {form.country.map((e) => `${e}, `)}
        </li>
      </ul>
      <button
        className="create__button"
        type="submit"
        onClick={(e) => handleOnSubmit(e)}
      >
        Create Activity
      </button>
    </form>
  );
}

export default CreateActivity;
