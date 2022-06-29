const { Country, conn } = require("../../src/db.js");
const { expect } = require("chai");

const testCountry = {
  id: 341,
  name: "Argentina",
  image:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/1200px-Flag_of_Argentina.svg.png",
  continent: "America",
  capital: "Buenos Aires",
  subregion: "South America",
  area: "2.780.400",
  population: "45.195.777",
};

describe("Country model", () => {
  beforeEach(async () => {
    await conn.sync({ force: true });
    await Country.create(testCountry);
  });

  describe("name", () => {
    it("should throw an error if name is null", (done) => {
      Country.create({})
        .then(() => done(new Error("It requires a valid name")))
        .catch(() => done());
    });
  });

  describe("flag image", () => {
    it("should throw an error if image is null", (done) => {
      Country.create({ name: "Argentina" })
        .then(() => done(new Error("It requires an image")))
        .catch(() => done());
    });
  });

  describe("name", () => {
    it("has a name property", () => {
      expect(Country).haveOwnProperty(name);
    });
  });
  describe("flag image", () => {
    it("has an image property", () => {
      expect(Country).haveOwnProperty(image);
    });
  });

  describe("ID", () => {
    it("has an ID with length of 3", () => {
      expect(Country).haveOwnProperty(id).with.lengthOf(3);
    });
  });
  describe("continent", () => {
    it("has a continent property", () => {
      expect(Country).haveOwnProperty(continent);
    });
    it("continent property is a string", () => {
      expect(Country.continent).to.be.a("string");
    });
  });
  describe("capital", () => {
    it("has a capital property", () => {
      expect(Country).haveOwnProperty(capital);
    });
    it("capital property is a string", () => {
      expect(Country.capital).to.be.a("string");
    });
  });
  describe("subregion", () => {
    it("has a subregion property", () => {
      expect(Country).haveOwnProperty(subregion);
    });
    it("subregion property is a string", () => {
      expect(Country.subregion).to.be.a("string");
    });
  });
  describe("area", () => {
    it("has an area property", () => {
      expect(Country).haveOwnProperty(area);
    });
    it("area property is a number", () => {
      expect(Country.area).to.be.a("integer");
    });
  });
  describe("population", () => {
    it("has a population property", () => {
      expect(Country).haveOwnProperty(population);
    });
    it("population property is a number", () => {
      expect(Country.population).to.be.a("integer");
    });
  });
});

/* describe("Activity model", () => {}); */
