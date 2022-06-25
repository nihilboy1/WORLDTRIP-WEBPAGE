import { Flex, Text, VStack } from '@chakra-ui/react'
import skyBackground from '../../images/sky_background.png'
import AirplaneAndClouds from './AirplaneAndClouds'

export function HomeBanner() {
  return (
    <Flex
      bgImage={`url(${skyBackground})`}
      bgRepeat="no-repeat"
      bgSize="cover"
      w="full"
      h="20.93rem"
      position="relative"
      align="center"
    >
      <VStack align="start" gap="1rem" ml="9rem" zIndex="1">
        <Text as="h1" fontSize="2.25rem" color="white">
          5 Continentes, <br /> infinitas possibilidades
        </Text>
        <Text as="p" fontSize="1.25rem" color="white">
          Chegou a hora de tirar do papel a viagem que você <br /> sempre
          sonhou.
        </Text>
      </VStack>
      <AirplaneAndClouds />
    </Flex>
  )
}
