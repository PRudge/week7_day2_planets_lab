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
  const detail = document.createElement('p');
  console.log(this.container);
  detail.textContent = planetDets.name;
  this.container.appendChild(detail);
};

module.exports = PlanetInfo;
