import $ from 'jquery';
import utilities from '../../helpers/utilities';
import planetData from '../../helpers/data/planetData';
import './bigPlanetCard.scss';


const bigPlanetCard = (singlePlanet) => {
  let domString = '';
  const planetList = planetData.getPlanets();
  for (let i = 0; i < planetList.length; i += 1) {
    const name = planetList[i].name.toLowerCase();
    if (singlePlanet === `${planetList[i].name}`) {
      domString = `
      <div class=" planet-bigCard ${name}">
         <span class="pull-right clickable close" data-effect="fadeOut"><i class="fa fa-times"></i></span>
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
  console.log(bigPlanetCard);
};

const clickEvents = () => {
  $('.card-body').on('click', (event) => {
    const singlePlanet = event.target.id;
    bigPlanetCard(singlePlanet);
    utilities.printToDom('planet-container', '');
  });
  console.log(clickEvents);
};
// const closePlanetCard = () => {
// const closeButtons = $('.close');
// for (let i = 0; i < closeButtons.length; i += 1) {
// const currentButton = closeButtons[i];
// currentButton.click.parent.remove();
// currentButton.addEventListener('click', (event) => {
//   event.target.parentElement.remove();
// });
// }
// };

export default { clickEvents };
