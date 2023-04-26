// import hero slider images
import HeroSlideImage1 from './assets/img/dogs/dog-slide-1.png';
import HeroSlideImage2 from './assets/img/dogs/dog-slide-2.png';
import HeroSlideImage3 from './assets/img/dogs/dog-slide-3.png';
// import dog category images
import DogCateg1 from './assets/img/dogs/dog-categ-1.png';
import DogCateg2 from './assets/img/dogs/dog-categ-2.png';
import DogCateg3 from './assets/img/dogs/dog-categ-3.png';
import DogCateg4 from './assets/img/dogs/dog-categ-4.png';
// import social icons
import { AiFillYoutube, AiFillInstagram, AiFillGithub } from 'react-icons/ai';

export const navigation = [
  {
    name: 'home',
    href: '#',
  },
  {
    name: 'prices',
    href: '#',
  },
  {
    name: 'contact',
    href: '#',
  },
  {
    name: 'get an appointment',
    href: '#',
  },
];

export const heroSlider = [
  {
    id: 1,
    title: 'We Take Care of Your Pet.',
    image: <HeroSlideImage1 />,
    subtitle:
      'Our professional grooming services will have your dog looking and feeling their best.',
    buttonText: 'Get an appointment',
  },
  {
    id: 2,
    title: 'Grooming Services for Every Need.',
    image: <HeroSlideImage2 />,
    subtitle:
      'From nail trims to full haircuts, we offer a range of grooming services to meet your dog\'s unique needs.',
    buttonText: 'Get an appointment',
  },
  {
    id: 3,
    title: 'Relax and Let Us Do the Work.',
    image: <HeroSlideImage3 />,
    subtitle:
      'Sit back and relax while our experienced groomers take care of your furry friend.',
    buttonText: 'Get an appointment',
  },
];

export const bundleData = [
  {
    id: 1,
    image: <DogCateg1 />,
    name: 'small',
    dogCategory: '1 - 9 kg',
    services: [
      {
        name: 'smart',
        price: 20,
        list: ['wash', 'ears cleaning', 'nail cut', 'perfumed'],
      },
      {
        name: 'premium',
        price: 40,
        list: [
          'all smart services',
          'paw pad moisturizer',
          'eye cleaning',
          'teeth brushing',
          'breath freshener',
        ],
      },
      {
        name: 'royal',
        price: 60,
        list: [
          'all premium services',
          'flea treatment',
          'gland expression',
          'facial scrub',
          'haircut',
          'massage',
          'styling',
        ],
      },
    ],
  },
  {
    id: 2,
    name: 'medium',
    image: <DogCateg2 />,
    dogCategory: '10 - 19 kg',
    services: [
      {
        name: 'smart',
        price: 80,
        list: ['wash', 'ears cleaning', 'nail cut', 'perfumed'],
      },
      {
        name: 'premium',
        price: 100,
        list: [
          'all smart services',
          'paw pad moisturizer',
          'eye cleaning',
          'teeth brushing',
          'breath freshener',
        ],
      },
      {
        name: 'royal',
        price: 120,
        list: [
          'all premium services',
          'flea treatment',
          'gland expression',
          'facial scrub',
          'haircut',
          'massage',
          'styling',
        ],
      },
    ],
  },
  {
    id: 3,
    name: 'big',
    image: <DogCateg3 />,
    dogCategory: '20 - 29 kg',
    services: [
      {
        name: 'smart',
        price: 140,
        list: ['wash', 'ears cleaning', 'nail cut', 'perfumed'],
      },
      {
        name: 'premium',
        price: 160,
        list: [
          'all smart services',
          'paw pad moisturizer',
          'eye cleaning',
          'teeth brushing',
          'breath freshener',
        ],
      },
      {
        name: 'royal',
        price: 180,
        list: [
          'all premium services',
          'flea treatment',
          'gland expression',
          'facial scrub',
          'haircut',
          'massage',
          'styling',
        ],
      },
    ],
  },
  {
    id: 4,
    name: 'super',
    image: <DogCateg4 />,
    dogCategory: '30 - 39 kg',
    services: [
      {
        name: 'smart',
        price: 200,
        list: ['wash', 'ears cleaning', 'nail cut', 'perfumed'],
      },
      {
        name: 'premium',
        price: 210,
        list: [
          'all smart services',
          'paw pad moisturizer',
          'eye cleaning',
          'teeth brushing',
          'breath freshener',
        ],
      },
      {
        name: 'royal',
        price: 220,
        list: [
          'all premium services',
          'flea treatment',
          'gland expression',
          'facial scrub',
          'haircut',
          'massage',
          'styling',
        ],
      },
    ],
  },
];

export const social = [
  {
    icon: <AiFillYoutube />,
    href: '#',
  },
  {
    icon: <AiFillInstagram />,
    href: '#',
  },
  {
    icon: <AiFillGithub />,
    href: '#',
  },
];
