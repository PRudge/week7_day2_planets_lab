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
  const orbit = document.createElement('p');
  orbit.textContent = planetDets.orbit;
  detail.appendChild(orbit);
  const day = document.createElement('p');
  day.textContent = planetDets.day;
  detail.appendChild(day);
  const surfaceArea = document.createElement('p');
  surfaceArea.textContent = planetDets.surfaceArea;
  detail.appendChild(surfaceArea);
  const volume = document.createElement('p');
  volume.textContent = planetDets.volume;
  detail.appendChild(volume);
  const gravity = document.createElement('p');
  gravity.textContent = planetDets.gravity;
  detail.appendChild(gravity);
  const moons = document.createElement('p');
  moons.textContent = planetDets.moons;
  detail.appendChild(moons);
  this.container.innerHTML = '';
  this.container.appendChild(detail);
};

PlanetInfo.prototype

module.exports = PlanetInfo;
