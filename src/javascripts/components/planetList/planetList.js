import $ from 'jquery';
import utilities from '../../helpers/utilities';
import planets from '../../helpers/data/planetData';
import './planetList.scss';

const createPlanetList = () => {
  const planetList = planets.getPlanets();
  let domString = '';
  for (let i = 0; i < planetList.length; i += 1) {
    const name = planetList[i].name.toLowerCase();
    domString += `
      <div class="col-4 planets ${name} ${planetList[i].description}" style="width:20rem; height:20rem;">
        <div class="card-body planet-list" id="${planetList[i].name}" style="width: 20rem; height: 20rem;">
          <h4 class="text">${planetList[i].name}</h4>
          <img src="${planetList[i].imageUrl}" class="image">
          </div>
      </div>
      `;
  }
  utilities.printToDom('planet-container', domString);
  $('.image').hide();
};

const hoverFunc = () => {
  $('.card-body').mouseenter((e) => {
    const singleCard = $(e.target);
    singleCard.find('.image').show();
    singleCard.find('.text').hide();
  }); $('.card-body').mouseleave((e) => {
    const singleCard = $(e.target);
    singleCard.find('.image').hide();
    singleCard.find('.text').show();
  });
};

export default { createPlanetList, hoverFunc };
