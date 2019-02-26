const PubSub = require('../helpers/pub_sub.js');

const SolarSystem = function(planets) {
  this.planets = planets;
};

SolarSystem.prototype.bindEvents = function(){
  PubSub.subscribe('PlanetMenuView:click',(event) =>{
  const planetIndex = event.detail;
  this.getPlanetDetail(planetIndex);
  })
};

SolarSystem.prototype.getPlanetDetail = function(planetIndex){
  const planetDets = this.planets.find(planetName => planetName.name === planetIndex);
  PubSub.publish('SolarSystem:planet-ready', planetDets);
};


module.exports = SolarSystem;
