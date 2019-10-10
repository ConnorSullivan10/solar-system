const planets = [
  {
    name: 'Mercury',
    imageUrl: 'https://scx1.b-cdn.net/csz/news/800/2015/whatsimporta.jpg',
    description: 'Mercury—the smallest planet in our solar system and closest to the Sun—is only slightly larger than Earth\'s Moon. Mercury is the fastest planet, zipping around the Sun every 88 Earth days.',
    isGasPlanet: false,
    numberOfMoons: '0',
    nameOfLargestMoon: 'N/A',
  },
  {
    name: 'Venus',
    imageUrl: 'https://cosmos-images1.imgix.net/file/spina/photo/14590/180403-venus-full.jpg?ixlib=rails-2.1.4&auto=format&ch=Width%2CDPR&fit=max&w=835',
    description: 'Venus spins slowly in the opposite direction from most planets. A thick atmosphere traps heat in a runaway greenhouse effect, making it the hottest planet in our solar system.',
    isGasPlanet: false,
    numberOfMoons: '0',
    nameOfLargestMoon: 'N/A',
  },
  {
    name: 'Earth',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/1200px-The_Earth_seen_from_Apollo_17.jpg',
    description: 'Earth—our home planet—is the only place we know of so far that’s inhabited by living things. It\'s also the only planet in our solar system with liquid water on the surface.',
    isGasPlanet: false,
    numberOfMoons: '1',
    nameOfLargestMoon: 'Luna',
  },
  {
    name: 'Mars',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/1200px-OSIRIS_Mars_true_color.jpg',
    description: 'Mars is a dusty, cold, desert world with a very thin atmosphere. There is strong evidence Mars was—billions of years ago—wetter and warmer, with a thicker atmosphere.',
    isGasPlanet: false,
    numberOfMoons: '2',
    nameOfLargestMoon: 'Phobos',
  },
  {
    name: 'Jupiter',
    imageUrl: 'https://3.bp.blogspot.com/-JzB2ruOjBOs/WJy8tR_tJSI/AAAAAAAABdA/26gANOQ4Y4IZyMnEGS2L8X-dvhVhGL0ZQCLcB/s1600/jupiter_HD.jpg',
    description: 'Jupiter is more than twice as massive than the other planets of our solar system combined. The giant planet\'s Great Red spot is a centuries-old storm bigger than Earth.',
    isGasPlanet: true,
    numberOfMoons: '79',
    nameOfLargestMoon: 'Ganymede',
  },
  {
    name: 'Saturn',
    imageUrl: 'https://space-facts.com/wp-content/uploads/saturn.png',
    description: 'Adorned with a dazzling, complex system of icy rings, Saturn is unique in our solar system. The other giant planets have rings, but none are as spectacular as Saturn\'s. ',
    isGasPlanet: true,
    numberOfMoons: '53',
    nameOfLargestMoon: 'Titan',
  },
  {
    name: 'Uranus',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Uranus2.jpg',
    description: 'Uranus—seventh planet from the Sun—rotates at a nearly 90-degree angle from the plane of its orbit. This unique tilt makes Uranus appear to spin on its side.',
    isGasPlanet: true,
    numberOfMoons: '27',
    nameOfLargestMoon: 'Titania',
  },
  {
    name: 'Neptune',
    imageUrl: 'https://loe.org/content/2017-05-19/SPACEEAR-Neptune_Full.jpg',
    description: 'Neptune—the eighth and most distant major planet orbiting our Sun—is dark, cold and whipped by supersonic winds. It was the first planet located through mathematical calculations. ',
    isGasPlanet: true,
    numberOfMoons: '14',
    nameOfLargestMoon: 'Triton',
  },
];

const getPlanets = () => planets;

export default { getPlanets };
