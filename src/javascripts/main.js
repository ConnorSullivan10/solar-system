import 'bootstrap';
import planetList from './components/planetList/planetList';
import searchBar from './components/searchBar/searchBar';
import bigPlanetCard from './components/bigPlanetCard/bigPlanetCard';

import '../styles/main.scss';

const init = () => {
  planetList.createPlanetList();
  searchBar.searchFilter();
  planetList.hoverFunc();
  bigPlanetCard.clickForBigCard();
  bigPlanetCard.closePlanetCard();
};

init();
