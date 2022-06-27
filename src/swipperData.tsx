/*
Não sei como evitar tantas importações usando react, só sei resolver esse problema usando next, 
e usar next não era o objetivo desse projeto
*/

import africaSwipperImage from './images/swipper_images/africa_swipper.avif'
import americanorteSwipperImage from './images/swipper_images/americanorte_swipper.jpg'
import americasulSwipperImage from './images/swipper_images/americasul_swipper.jpg'
import asiaSwipperImage from './images/swipper_images/asia_swipper.avif'
import europaSwipperImage from './images/swipper_images/europa_swipper.png'
import oceaniaSwipperImage from './images/swipper_images/oceania_swipper.avif'

const swipperData = [
  {
    name: 'Europa',
    image: europaSwipperImage,
    description: 'Vida noturna e história',
    url: '/continent/europa'
  },
  {
    name: 'América do Norte',
    image: americanorteSwipperImage,
    description: 'Criatividade e dinamismo',
    url: '/continent/americanorte'
  },
  {
    name: 'América do Sul',
    image: americasulSwipperImage,
    description: 'Receptividade e gastronomia',
    url: '/continent/americasul'
  },
  {
    name: 'Ásia',
    image: asiaSwipperImage,
    description: 'Tradição e tecnologia',
    url: '/continent/asia'
  },
  {
    name: 'Africa',
    image: africaSwipperImage,
    description: 'O continente mais antigo',
    url: '/continent/africa'
  },
  {
    name: 'Oceania',
    image: oceaniaSwipperImage,
    description: 'Vida selvagem e hobbits',
    url: '/continent/oceania'
  }
]

export default swipperData
