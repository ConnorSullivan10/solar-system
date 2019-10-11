import 'bootstrap';
import planetData from './helpers/data/planetData';
import planetList from './components/planetList/planetList';

import '../styles/main.scss';


const init = () => {
  const planets = planetData.getPlanets();
  planetList.createPlanetList(planets);
};

init();
