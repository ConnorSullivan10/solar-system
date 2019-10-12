import './searchBar.scss';
import $ from 'jquery';

const planetFilter = (e) => {
  const value = $(e.target).val().toLowerCase();
  console.error('filter-fire', value);
  const planets = $('.planets');
  planets.hide();
  if (value !== '') {
    planets.filter(`[class*='${value}']`).show();
  } else {
    planets.show();
  }
};

const searchFilter = () => $(document).ready(() => {
  $('#myInput').on('keyup', (e) => {
    planetFilter(e);
  });
});


export default { searchFilter };
