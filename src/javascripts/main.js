import 'bootstrap';
import planetData from './helpers/data/planetData';
import planetList from './components/planetList/planetList';
import searchBar from './components/searchBar/searchBar';

import '../styles/main.scss';

const init = () => {
  const planets = planetData.getPlanets();
  planetList.createPlanetList(planets);
  searchBar.searchFilter(planets);
};

init();
