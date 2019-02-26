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
  const day = document.createElement('p');
  day.textContent = `Day: ${planetDets.day} Earth days`;
  detail.appendChild(day);
  const orbit = document.createElement('p');
  orbit.textContent = `Orbit: ${planetDets.orbit} Earth days`;
  detail.appendChild(orbit);
  const surfaceArea = document.createElement('p');
  surfaceArea.textContent = `Surface Area: ${planetDets.surfaceArea} Earths`;
  detail.appendChild(surfaceArea);
  const volume = document.createElement('p');
  volume.textContent = `Volume: ${planetDets.volume} Earths`;
  detail.appendChild(volume);
  const gravity = document.createElement('p');
  gravity.textContent = `Gravity: ${planetDets.gravity}g`;
  detail.appendChild(gravity);
  const moons = document.createElement('p');
  moons.textContent = `Moons: ${planetDets.moons}`;
  detail.appendChild(moons);
  const image = document.createElement('img');
  image.src = planetDets.image;
  detail.appendChild(image);
  this.container.innerHTML = '';
  this.container.appendChild(detail);
};

PlanetInfo.prototype

module.exports = PlanetInfo;
