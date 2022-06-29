const { Router } = require("express");

const router = Router();

const {
  get_allCountries,
  get_db_allCountries,
  post_activity,
  getActivity,
} = require("../controllers");

router.get("/countries", async (req, res) => {
  const { name } = req.query;
  const getAll = await get_allCountries();

  if (name) {
    const getByName = getAll.filter((e) =>
      e.name.toLowerCase().includes(name.toLowerCase())
    );
    getByName
      ? res.status(200).send(getByName)
      : res.status(400).send(`The country ${name} has not been found`);
  } else {
    res.status(200).send(getAll);
  }
});

router.get("/countries/:id", async (req, res) => {
  const id = req.params.id.toUpperCase();
  const getById = await get_db_allCountries(id);

  getById
    ? res.status(200).send(getById)
    : res.status(400).send(`The country has not been found`);
});

router.get("/activity", async (req, res) => {
  const getActivities = await getActivity();
  getActivities
    ? res.status(200).send(getActivities)
    : res.status(400).send(`The activities have not been found`);
});

router.post("/activity", async (req, res) => {
  const { name, difficulty, duration, season, country } = req.body;

  const activity = await post_activity(
    name,
    difficulty,
    duration,
    season,
    country
  );

  res.status(200).send(activity);
});

module.exports = router;
