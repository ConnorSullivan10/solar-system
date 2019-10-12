import utilities from '../../helpers/utilities';
import './planetList.scss';

const createPlanetList = (planetArr) => {
  let domString = '';
  for (let i = 0; i < planetArr.length; i += 1) {
    const planet = planetArr[i];
    domString += `
      <div class="container planets ${planet.name}" style="width:20rem; height:20rem;">
        <div class="card" style="width: 20rem; height: 20rem;">
          <div class="card-body">
            <h4 class="text">${planet.name}</h4>
          </div>
          <div class="overlay">
            <img src="${planet.imageUrl}" alt="Avatar" class="image">
          </div>
        </div>
      </div>
      `;
  }
  utilities.printToDom('planet-container', domString);
};

export default { createPlanetList };
