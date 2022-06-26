import { Flex, Text } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import africaImageBanner from '../../images/continent_infos_banners/africa_continentinfos.jpg'
import americanorteImageBanner from '../../images/continent_infos_banners/americanorte_continentinfos.jpg'
import americasulImageBanner from '../../images/continent_infos_banners/americasul_continentinfos.jpg'
import asiaImageBanner from '../../images/continent_infos_banners/asia_continentinfos.jpg'
import europaImageBanner from '../../images/continent_infos_banners/europe_continentinfos.png'
import oceaniaImageBanner from '../../images/continent_infos_banners/oceania_continentinfos.avif'

export function ContinentInfosBanner() {
  const { id } = useParams()

  return (
    <Flex
      bgImage={`url(${
        id === 'europa'
          ? europaImageBanner
          : id === 'africa'
          ? africaImageBanner
          : id === 'asia'
          ? asiaImageBanner
          : id === 'oceania'
          ? oceaniaImageBanner
          : id === 'americasul'
          ? americasulImageBanner
          : id === 'americanorte'
          ? americanorteImageBanner
          : ''
      })`}
      backgroundPosition={id === 'americanorte' ? 'bottom' : 'center'}
      w="full"
      h="31.25rem"
      backgroundSize="cover"
      pl="12%"
      pb="4rem"
    >
      <Text
        as="h1"
        mt="auto"
        color="white"
        fontSize="3rem"
        fontWeight="semibold"
        textShadow="2px 2px 1px #47585B"
      >
        {id === 'europa'
          ? 'Europa'
          : id === 'africa'
          ? 'África'
          : id === 'asia'
          ? 'Ásia'
          : id === 'oceania'
          ? 'Oceania'
          : id === 'americasul'
          ? 'América do Sul'
          : id === 'americanorte'
          ? 'América do Norte'
          : ''}
      </Text>
    </Flex>
  )
}
