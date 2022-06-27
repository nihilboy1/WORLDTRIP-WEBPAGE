import { Flex, Text, useMediaQuery, VStack } from '@chakra-ui/react'
import skyBackground from '../../images/sky_background.png'
import AirplaneAndClouds from './AirplaneAndClouds'

export function HomeBanner() {
  const [isSmallerThan1180] = useMediaQuery('(max-width: 1180px)')

  return (
    <Flex
      bgImage={`url(${skyBackground})`}
      bgRepeat="no-repeat"
      bgSize="cover"
      w="full"
      h="20.93rem"
      position="relative"
      align="center"
      justifyContent={isSmallerThan1180 ? 'center' : 'start'}
    >
      <VStack
        align="start"
        gap="1rem"
        m={isSmallerThan1180 ? '1.5rem' : '0rem 0rem 0rem 9rem'}
        zIndex="1"
        transition="all .4s"
      >
        <Text as="h1" fontSize="2.25rem" color="white" fontWeight="bold">
          6 Continentes, {isSmallerThan1180 ? '' : <br />} infinitas
          possibilidades
        </Text>
        <Text as="p" fontSize="1.25rem" color="white" fontWeight="semibold">
          Chegou a hora de tirar do papel a viagem que você{' '}
          {isSmallerThan1180 ? '' : <br />} sempre sonhou.
        </Text>
      </VStack>
      <AirplaneAndClouds />
    </Flex>
  )
}
