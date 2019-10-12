import './searchBar.scss';
import $ from 'jquery';

const filter = (e) => {
  const value = $(e.target).val().toLowerCase();
  console.error('filter-fire', value);
  const planets = $('.planets');
  planets.hide();
  if (value !== '') {
    // const card = `.${value}`;
    planets.filter(`[class*='${value}']`).show();
  }
};

const searchFilter = () => $(document).ready(() => {
  $('#myInput').on('keyup', (e) => {
    filter(e);
    // const value = $(e.target).val().toLowerCase();
    // console.error($('text').text().toLowerCase());
    // $('card-body').filter(() => {
    // }
    // $('#searchPlanets').each(() => {
    //   $('card-body').toggle($('text').text().toLowerCase().indexOf(value) > -1);
    // });
  });
});


export default { searchFilter };
