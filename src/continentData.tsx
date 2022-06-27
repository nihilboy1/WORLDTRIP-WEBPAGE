/*
Não sei como evitar tantas importações usando react, só sei resolver esse problema usando next, 
e usar next não era o objetivo desse projeto
*/

import africasulFlag from './images/cities_images/africadosul_flag.png'
import amsterdaImage from './images/cities_images/amsterda.png'
import holandaFlag from './images/cities_images/amsterda_flag.png'
import argentinaFlag from './images/cities_images/argentina_flag.png'
import aucklandImage from './images/cities_images/auckland.avif'
import australiaFlag from './images/cities_images/australia_flag.png'
import bangkokImage from './images/cities_images/bangkok.avif'
import boliviaFlag from './images/cities_images/bolivia_flag.png'
import brasilFlag from './images/cities_images/brasil_flag.png'
import brisbaneImage from './images/cities_images/brisbane.avif'
import buenosairesImage from './images/cities_images/buenosaires.avif'
import cairoImage from './images/cities_images/cairo.avif'
import cancunImage from './images/cities_images/cancun.avif'
import capetownImage from './images/cities_images/capetown.avif'
import cuscoImage from './images/cities_images/cusco.jpg'
import dubaiImage from './images/cities_images/dubai.avif'
import dubaiFlag from './images/cities_images/dubai_flag.png'
import egitoFlag from './images/cities_images/egito_flag.png'
import usFlag from './images/cities_images/estadosunidos_flag.png'
import francaFlag from './images/cities_images/franca_flag.png'
import hongkongImage from './images/cities_images/hongkong.avif'
import hongkongFlag from './images/cities_images/hongkong_flag.png'
import joanesburgoImage from './images/cities_images/joanesburgo.avif'
import lapazImage from './images/cities_images/lapaz.avif'
import lasvegasImage from './images/cities_images/lasvegas.avif'
import londresImage from './images/cities_images/londres.png'
import londresFlag from './images/cities_images/londres_flag.png'
import losangelesImage from './images/cities_images/losangeles.avif'
import macauImage from './images/cities_images/macau.avif'
import macauFlag from './images/cities_images/macau_flag.png'
import marrakeshImage from './images/cities_images/marrakesh.avif'
import marrocosFlag from './images/cities_images/marrocos_flag.png'
import mexicoFlag from './images/cities_images/mexico_flag.png'
import miamiImage from './images/cities_images/miami.avif'
import novayorkImage from './images/cities_images/novayork.avif'
import nzFlag from './images/cities_images/nz_flag.png'
import parisImage from './images/cities_images/paris.png'
import pearthImage from './images/cities_images/perth.avif'
import peruFlag from './images/cities_images/peru_flag.png'
import pragaImage from './images/cities_images/praga.png'
import repTchecaFlag from './images/cities_images/praga_flag.png'
import queenstownImage from './images/cities_images/queenstown.avif'
import rioImage from './images/cities_images/rio.avif'
import romaImage from './images/cities_images/roma.png'
import italiaFlag from './images/cities_images/roma_flag.png'
import saopauloImage from './images/cities_images/saopaulo.jpg'
import singapuraImage from './images/cities_images/singapore.avif'
import singapuraFlag from './images/cities_images/singapore_flag.png'
import stonetownImage from './images/cities_images/stonetown.avif'
import sydneyImage from './images/cities_images/sydney.avif'
import tailandiaFlag from './images/cities_images/tailandia_flag.png'
import tanzaniaFlag from './images/cities_images/tanzania_flag.png'

const continentData = [
  {
    about:
      'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste',
    countriesAmount: '44',
    languagesAmount: '200+',
    topCities: '21',
    name: 'Europa',
    cities: [
      {
        name: 'Londres',
        country: 'Reino Unido',
        countryFlag: londresFlag,
        cityImage: londresImage
      },
      {
        name: 'Paris',
        country: 'França',
        countryFlag: francaFlag,
        cityImage: parisImage
      },
      {
        name: 'Roma',
        country: 'Itália',
        countryFlag: italiaFlag,
        cityImage: romaImage
      },
      {
        name: 'Praga',
        country: 'República Tcheca',
        countryFlag: repTchecaFlag,
        cityImage: pragaImage
      },
      {
        name: 'Amsterdã',
        country: 'Holanda',
        countryFlag: holandaFlag,
        cityImage: amsterdaImage
      }
    ]
  },
  {
    about:
      'A América do Norte é um subcontinente que compreende a porçãosetentrional do continente americano. Existem duas formas de classificar esse continente: a primeira considera que a América do Norte é apenas a parte mais setentrional da América, separada da América Central na fronteira entre o México e a Guatemala, a segunda classificação reconhece apenas uma América do Norte e uma América do Sul, traçando o limite no Istmo do Panamá',
    countriesAmount: '23',
    languagesAmount: '350+',
    topCities: '23',
    name: 'América do Norte',
    cities: [
      {
        name: 'New York City',
        country: 'Estados Unidos',
        countryFlag: usFlag,
        cityImage: novayorkImage
      },
      {
        name: 'Miami',
        country: 'Estados Unidos',
        countryFlag: usFlag,
        cityImage: miamiImage
      },
      {
        name: 'Los Angeles',
        country: 'Estados Unidos',
        countryFlag: usFlag,
        cityImage: losangelesImage
      },
      {
        name: 'Las Vegas',
        country: 'Estados Unidos',
        countryFlag: usFlag,
        cityImage: lasvegasImage
      },
      {
        name: 'Cancún',
        country: 'México',
        countryFlag: mexicoFlag,
        cityImage: cancunImage
      }
    ]
  },
  {
    about:
      'A América do Sul é um continente que compreende a porção meridional da América. Também é considerada um subcontinente do continente americano. A sua extensão é de 17 819 100 km², abrangendo 12% da superfície terrestre e 6% da população mundial. Une-se à América Central a norte pelo istmo do Panamá e se separa da Antártida ao sul pelo estreito de Drake.',
    countriesAmount: '17',
    languagesAmount: '400+',
    name: 'América do Sul',
    topCities: '18',
    cities: [
      {
        name: 'Rio de Janeiro',
        country: 'Brasil',
        countryFlag: brasilFlag,
        cityImage: rioImage
      },
      {
        name: 'São Paulo',
        country: 'Brasil',
        countryFlag: brasilFlag,
        cityImage: saopauloImage
      },
      {
        name: 'Buenos Aires',
        country: 'Argentina',
        countryFlag: argentinaFlag,
        cityImage: buenosairesImage
      },
      {
        name: 'Cusco',
        country: 'Peru',
        countryFlag: peruFlag,
        cityImage: cuscoImage
      },
      {
        name: 'La Paz',
        country: 'Bolívia',
        countryFlag: boliviaFlag,
        cityImage: lapazImage
      }
    ]
  },
  {
    about:
      'A Ásia é o maior dos continentes, tanto em área como em população. Abrange um terço das partes sólidas da superfície da Terra e é responsável por abrigar quase três quintos da população mundial. A Ásia faz fronteira no lado ocidental com a África e com a Europa, e no lado oriental com o oceano Pacífico, a Oceania e, em menor proporção, com a América do Norte, pelo Estreito de Bering.',
    countriesAmount: '48',
    languagesAmount: '2300+',
    topCities: '17',
    name: 'Ásia',
    cities: [
      {
        name: 'Hong Kong',
        country: 'Hong Kong',
        countryFlag: hongkongFlag,
        cityImage: hongkongImage
      },
      {
        name: 'Dubai',
        country: 'Emirados Árabes',
        countryFlag: dubaiFlag,
        cityImage: dubaiImage
      },
      {
        name: 'Macau',
        country: 'Macau',
        countryFlag: macauFlag,
        cityImage: macauImage
      },
      {
        name: 'Singapura',
        country: 'Singapura',
        countryFlag: singapuraFlag,
        cityImage: singapuraImage
      },
      {
        name: 'Bangkok',
        country: 'Tailândia',
        countryFlag: tailandiaFlag,
        cityImage: bangkokImage
      }
    ]
  },
  {
    about:
      'A África é o terceiro continente mais extenso com cerca de 30 milhões de quilômetros quadrados, cobrindo 20,3% da área total da terra firme do planeta. É o segundo continente mais populoso da Terra com cerca de um bilhão de pessoas, representando cerca de um sétimo da população mundial, e 54 países independentes.',
    countriesAmount: '54',
    languagesAmount: '1500+',
    topCities: '26',
    name: 'África',
    cities: [
      {
        name: 'Joanesburgo',
        country: 'África do Sul',
        countryFlag: africasulFlag,
        cityImage: joanesburgoImage
      },
      {
        name: 'Cape Town',
        country: 'África do Sul',
        countryFlag: africasulFlag,
        cityImage: capetownImage
      },
      {
        name: 'Stone Town',
        country: 'Tanzânia',
        countryFlag: tanzaniaFlag,
        cityImage: stonetownImage
      },
      {
        name: 'Cairo',
        country: 'Egito',
        countryFlag: egitoFlag,
        cityImage: cairoImage
      },
      {
        name: 'Marrakesh',
        country: 'Marrocos',
        countryFlag: marrocosFlag,
        cityImage: marrakeshImage
      }
    ]
  },
  {
    about:
      "Oceania ou Oceânia é uma região geográfica composta por vários grupos de ilhas do oceano Pacífico. O termo Oceania foi criado em 1831 pelo explorador francês Dumont d'Urville. O termo é usado hoje em vários idiomas para designar uma região geográfica e política que compreende o continente da Austrália e ilhas do Oceano Pacífico adjacentes.",
    countriesAmount: '22',
    languagesAmount: '450+',
    topCities: '23',
    name: 'Oceania',
    cities: [
      {
        name: 'Sydney',
        country: 'Austrália',
        countryFlag: australiaFlag,
        cityImage: sydneyImage
      },
      {
        name: 'Auckland',
        country: 'Nova Zelândia',
        countryFlag: nzFlag,
        cityImage: aucklandImage
      },
      {
        name: 'Queens Town',
        country: 'Austrália',
        countryFlag: australiaFlag,
        cityImage: queenstownImage
      },
      {
        name: 'Perth',
        country: 'Austrália',
        countryFlag: australiaFlag,
        cityImage: pearthImage
      },
      {
        name: 'Brisbane',
        country: 'Austrália',
        countryFlag: australiaFlag,
        cityImage: brisbaneImage
      }
    ]
  }
]

export default continentData
