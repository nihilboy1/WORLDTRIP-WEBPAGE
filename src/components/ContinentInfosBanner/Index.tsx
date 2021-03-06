import { Flex, Text, useMediaQuery } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import data from '../../continentData'
import africaImageBanner from '../../images/continent_infos_banners/africa_continentinfos.jpg'
import americanorteImageBanner from '../../images/continent_infos_banners/americanorte_continentinfos.jpg'
import americasulImageBanner from '../../images/continent_infos_banners/americasul_continentinfos.jpg'
import asiaImageBanner from '../../images/continent_infos_banners/asia_continentinfos.jpg'
import europaImageBanner from '../../images/continent_infos_banners/europe_continentinfos.png'
import oceaniaImageBanner from '../../images/continent_infos_banners/oceania_continentinfos.avif'

interface ContinentInfosBannerProps {
  currentContinentID: number
}

export function ContinentInfosBanner({
  currentContinentID
}: ContinentInfosBannerProps) {
  const { id } = useParams()
  const [isSmallerThan600] = useMediaQuery('(max-width: 600px)')

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
      backgroundPosition={
        id === 'americanorte' ? 'bottom' : id === 'europa' ? 'left' : 'center'
      }
      minH="31.50rem"
      backgroundSize="cover"
      justifyContent={isSmallerThan600 ? 'center' : ''}
      pl={isSmallerThan600 ? '0' : '12%'}
      pb={isSmallerThan600 ? '15rem' : '4rem'}
      
    >
      <Text
        as="h1"
        mt="auto"
        color="white"
        fontSize="3rem"
        fontWeight="semibold"
        textShadow="2px 2px 1px #47585B"
      >
        {data[currentContinentID].name}
      </Text>
    </Flex>
  )
}
