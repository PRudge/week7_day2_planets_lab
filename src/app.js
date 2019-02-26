const planetsData = require('./data/planets.js');
const SolarSystem = require('./models/solar_system.js');
const PlanetsMenu = require('./views/planets_menu_view.js');
const PlanetInfo = require('./views/planet_info_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const planetsDataModel = new SolarSystem(planetsData);
  planetsDataModel.bindEvents();
  const planetsInfo = document.querySelector('nav.planets-menu');
  const planetsMenu = new PlanetsMenu(planetsInfo);
  planetsMenu.bindEvents();

  const planetDetails = document.querySelector('.planet-details');
  const planetInfo = new PlanetInfo(planetDetails);

  planetInfo.bindEvents();

});
