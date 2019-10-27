import $ from 'jquery';
import utilities from '../../helpers/utilities';
import planetData from '../../helpers/data/planetData';
import createPlanetList from '../planetList/planetList';
import './bigPlanetCard.scss';


const bigPlanetCard = (singlePlanet) => {
  let domString = '';
  const planetList = planetData.getPlanets();
  for (let i = 0; i < planetList.length; i += 1) {
    const name = planetList[i].name.toLowerCase();
    if (singlePlanet === `${planetList[i].name}`) {
      domString = `
      <div class=" planet-bigCard text-center ${name}">
         <button class="close d-flex justify-content-end">X</button>
         <h2>${planetList[i].name}</h2>
         <img src="${planetList[i].imageUrl}"/>
         <h5>Is it made of gas? = ${planetList[i].isGasPlanet}</h5>
         <h5>Number of moons = ${planetList[i].numberOfMoons}</h5>
         <h5> Name Of Largest Moon = ${planetList[i].nameOfLargestMoon}</h5>
         <p>${planetList[i].description}</p>
     </div>
        `;
    }
  }
  utilities.printToDom('largePlanetCard', domString);
};

const clickForBigCard = () => {
  $('.card-body').on('click', (event) => {
    const singlePlanet = event.target.id;
    bigPlanetCard(singlePlanet);
    utilities.printToDom('planet-container', '');
  });
};

const closePlanetCard = () => {
  $('body').on('click', '.close', () => {
    utilities.printToDom('largePlanetCard', '');
    createPlanetList.createPlanetList();
    createPlanetList.hoverFunc();
    clickForBigCard();
  });
};
// const closeButtons = $('.close');
// for (let i = 0; i < closeButtons.length; i += 1) {
// const currentButton = closeButtons[i];
// currentButton.click.parent.remove();
// currentButton.addEventListener('click', (event) => {
//   event.target.parentElement.remove();
// });
// }
// };

export default { clickForBigCard, closePlanetCard };
