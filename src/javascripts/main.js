import 'bootstrap';
import planetData from './helpers/data/planetData';

import '../styles/main.scss';


const init = () => {
  const planets = planetData.getPlanets();
  console.error(planets);
};

init();
