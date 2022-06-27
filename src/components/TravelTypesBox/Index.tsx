import { Flex, useMediaQuery } from '@chakra-ui/react'
import { TravelType } from './TravelType'
import building from '/src/images/traveltypes_icons/building1.png'
import cocktailImage from '/src/images/traveltypes_icons/cocktail1.png'
import earthImage from '/src/images/traveltypes_icons/earth1.png'
import museumImage from '/src/images/traveltypes_icons/museum1.png'
import surfImage from '/src/images/traveltypes_icons/surf1.png'

export function TravelTypesBox() {
  const [isSmallerThan780] = useMediaQuery('(max-width: 780px)')
  return (
    <Flex
      alignItems="center"
      flexDir={isSmallerThan780 ? 'column' : 'row'}
      justifyContent="space-between"
      mb={isSmallerThan780 ? '5rem' : '0'}
      mt={isSmallerThan780 ? '5rem' : '0'}
      h={isSmallerThan780 ? '50rem' : '24rem'}
      w="80%"
      mx="auto"
      _after={{
        content: '""',
        position: 'absolute',
        padding: '0.1rem',
        borderRadius: '1rem',
        bgColor: 'gray.600',
        width: '5rem',
        left: '50%',
        top: `${isSmallerThan780 ? '85rem' : '52%'}`,
        transform: 'translate(-50%, -50%)'
      }}
      transition="all .2s"
    >
      <TravelType image={cocktailImage} detail="Vida noturna" />
      <TravelType image={surfImage} detail="Praias" />
      <TravelType image={building} detail="Moderna" />
      <TravelType image={museumImage} detail="Clássica" />
      <TravelType image={earthImage} detail="E mais..." />
    </Flex>
  )
}
