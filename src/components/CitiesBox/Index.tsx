import { Box, Flex, Img, Text, useMediaQuery } from '@chakra-ui/react'
import data from '../../continentData'

interface CitiesBoxProps {
  currentContinentID: number
}

export function CitiesBox({ currentContinentID }: CitiesBoxProps) {
  const [isSmallerThan960] = useMediaQuery('(max-width: 960px)')

  return (
    <Flex
      w="full"
      flexDir="column"
      my="5rem"
      px="10rem"
      align={isSmallerThan960 ? 'center' : ''}
    >
      <Text
        as="h1"
        fontSize="2.25rem"
        color="gray.600"
        fontWeight="semibold"
        mb="2rem"
        textAlign={isSmallerThan960 ? 'center' : 'left'}
        width="16rem"
      >
        Cidades +100
      </Text>
      <Flex
        
        minW="16rem"
        justify={isSmallerThan960 ? 'center' : 'space-between'}
        wrap="wrap"
        gap="2rem"
      >
        {data[currentContinentID].cities.map(city => {
          return (
            <Flex
              key={city.name}
              flexDir="column"
              borderRadius="md"
              mb="4rem"
              minWidth="16rem"
              boxShadow="1px 1px 5px #9F9F9F"
            >
              <Img
                src={city.cityImage}
                width="16rem"
                height="12rem"
                borderTopRadius="md"
              />
              <Flex
                align="center"
                justifyContent="space-between"
                px="1.2rem"
                py="0.5rem"
                border="1px solid #FFBA08"
                borderBottomRadius="md"
              >
                <Box>
                  <Text
                    as="h2"
                    fontSize="1.25rem"
                    color="gray.600"
                    fontWeight="semibold"
                  >
                    {city.name}
                  </Text>
                  <Text fontSize="1rem" as="h3" color="gray.500">
                    {city.country}
                  </Text>
                </Box>
                <Img src={city.countryFlag} w="2rem" h="2rem" />
              </Flex>
            </Flex>
          )
        })}
      </Flex>
    </Flex>
  )
}
