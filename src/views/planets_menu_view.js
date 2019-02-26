const PubSub = require('../helpers/pub_sub.js')
const PlanetsMenu = function(planets){
  this.planets = planets;

};

PlanetsMenu.prototype.bindEvents = function(){
  this.planets.addEventListener('click',(event)=>{

    const planetIndex = event.target.id;
    PubSub.publish('PlanetMenuView:click',planetIndex);
  });
};

module.exports = PlanetsMenu;
