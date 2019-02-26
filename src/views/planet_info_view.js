const PubSub = require('../helpers/pub_sub.js');

const PlanetInfo = function(container){
  this.container = container;
};

PlanetInfo.prototype.bindEvents = function (){
  PubSub.subscribe('SolarSystem:planet-ready', (evt) => {
    const planetDets = evt.detail;
    this.outputDetails(planetDets);
  });

};

PlanetInfo.prototype.outputDetails = function(planetDets){
  const detail = document.createElement('li');
  const name = document.createElement('h2');
  name.textContent = planetDets.name;
  detail.appendChild(name);
  const orbit = document.createElement('h3');
  orbit.textContent = planetDets.orbit;
  detail.appendChild(orbit);
  const surfaceArea = document.createElement('h4');
  surfaceArea.textContent = planetDets.surfaceArea;
  detail.appendChild(surfaceArea);
  this.container.innerHTML = '';
  this.container.appendChild(detail);
};

PlanetInfo.prototype

module.exports = PlanetInfo;
